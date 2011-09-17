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

Todo
------------
 * other calendar objects (todo, journal etc)
 * GUI