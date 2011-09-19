function(doc) {
  if (doc.type === "event"){
    emit([doc.start, doc.end], doc)
  }
}