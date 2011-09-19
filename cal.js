function(head, req) {
  var row;
    start({
      "headers": {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition":"inline; filename=calendar.ics"
       }
    });
    send("BEGIN:VCALENDAR\n");
    send("VERSION:2.0\n");
    send("PRODID:-//hacksw/handcal//NONSGML v1.0//EN);\n");
    while(row = getRow()) {
      if (row.value.type=="event"){
        send_event(row.value)
      }
      if (row.value.type=="todo"){
        send_todo(row.value)
      }
    }
    send("END:VCALENDAR\n")
}

function send_todo(calTodo){
  send("BEGIN:VTODO\n");
  send("UID:" + calTodo._id + "\n");
  if(calTodo.timestamp) {send("DTSTAMP:" + calTodo.timestamp + "\n")};
  if(calTodo.organiser) {send("ORGANIZER:" + calTodo.organiser + "\n")};
  if(calTodo.summary) {send("SUMMARY:" + calTodo.summary + "\n")};
  if(calTodo.due) {send("DUE:" + calTodo.due + "\n")};
  if(calTodo.sequence) {send("SEQUENCE:" + calTodo.sequence + "\n")};
  if(calTodo.status) {send("STATUS:" + calTodo.status + "\n")};
  if(calTodo.alarm) {
    send("BEGIN:VALARM\n");
    for (i in calTodo.alarm){
      send(i.toUpperCase());
      send(":");
      if (i.toUpperCase() == "REPEAT") {
        send(calTodo.alarm[i]);
      } else {
        send(calTodo.alarm[i].toUpperCase());
      }
      send("\n");
    }
    send("END:VALARM\n");
  }
  send("END:VTODO\n");
}

function send_event(calEvent){
  send("BEGIN:VEVENT\n");
  send("UID:" + calEvent._id + "\n");
  if(calEvent.timestamp) {send("DTSTAMP:" + calEvent.timestamp + "\n")};
  if(calEvent.organiser) {send("ORGANIZER:" + calEvent.organiser + "\n")};
  if(calEvent.start) {send("DTSTART:" + calEvent.start + "\n")};
  if(calEvent.end) {send("DTEND:" + calEvent.end + "\n")};
  if(calEvent.summary) {send("SUMMARY:" + calEvent.summary + "\n")};
  if(calEvent.description) {send("DESCRIPTION:" + calEvent.description + "\n")};
  if(calEvent.recur){
    send("RRULE:");
    for (i in calEvent.recur){
      send(i.toUpperCase());
      send("=");
      send(calEvent.recur[i].toUpperCase());
    }
    send("\n");
  }
  send("END:VEVENT\n");
}