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
        send("BEGIN:VEVENT\n");
        send("UID:" + row.value._id + "\n");
        if(row.value.timestamp) {send("DTSTAMP:" + row.value.timestamp + "\n")};
        if(row.value.organiser) {send("ORGANIZER:" + row.value.organiser + "\n")};
        if(row.value.start) {send("DTSTART:" + row.value.start + "\n")};
        if(row.value.end) {send("DTEND:" + row.value.end + "\n")};
        if(row.value.summary) {send("SUMMARY:" + row.value.summary + "\n")};
        if(row.value.description) {send("DESCRIPTION:" + row.value.description + "\n")};
        if(row.value.recur){
          send("RRULE:");
          for (i in row.value.recur){
            send(i.toUpperCase());
            send("=");
            send(row.value.recur[i].toUpperCase());
//            send(";");
          }
          send("\n");
        }
        send("END:VEVENT\n");
      }
    }
    send("END:VCALENDAR\n")
}