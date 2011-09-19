function(doc) {
  if (doc.type === "event"){
    emit([doc.start, doc.end], doc)
  } else if (doc.type === "todo") {
    emit([doc.due], doc)
  }
}