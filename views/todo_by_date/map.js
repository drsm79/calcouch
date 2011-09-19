function(doc) {
  if (doc.type === "todo") {
    emit([doc.due], doc)
  }
}