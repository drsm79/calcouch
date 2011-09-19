CalCouch
============

A CouchApp that produces an iCal compatible feed via a view and a list function.

Data format
------------

### Events:

    {
      "type": "event",
      "timestamp": "20110202T000000Z",
      "organiser": "Chloe",
      "start": "20110202",
      "end": "20110202",
      "summary": "Chloe's Birthday",
      "description":"The day Chloe was born",
      "recur":{"FREQ":"YEARLY"}
    }

### Todo:
    {
        "type": "todo",
        "timestamp": "20110714T170000Z",
        "organiser": "CN=John Doe:MAILTO:john.doe@example.com",
        "due": "20110714T170000Z",
        "summary": "Thing that needs doing",
        "description":"Some sweet stuff is going to happen...",
        "attendee": "PARTSTAT=ACCEPTED:MAILTO:jqpublic@example.com",
        "status":"NEEDS-ACTION",
        "alarm": {
            "action":"AUDIO",
            "trigger":"19980403T120000",
            "attach":"FMTTYPE=audio/basic:http://example.com/pub/audio-files/ssbanner.aud",
            "repeat":4,
            "duration":"PT1H"
        }
    }

Todo
------------
 * other calendar objects (journal etc)
 * improve format for recur and alarms
 * GUI (start from http://arshaw.com/fullcalendar/ perhaps?)