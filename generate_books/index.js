const homedir = require('os').homedir();
const db = require("better-sqlite3")(homedir + '/Books/metadata.db', {});
const fs = require("fs")

const books = db
  .prepare(
    "SELECT author_sort, title, timestamp, custom_column_3.value AS special, custom_column_4.value AS prohibited_if_set FROM books LEFT JOIN custom_column_3 ON books.id = custom_column_3.book LEFT JOIN custom_column_4 ON books.id = custom_column_4.book ORDER BY timestamp DESC"
  )
  .all()
console.log(books.length)
let generated = books
  .map((bookmeta) => {
    if (bookmeta.prohibited_if_set === 0) {
      return
    }
    if (bookmeta.special) {
    }
    return `<tr><td>${bookmeta.special ? "●" : ""}</td><td>${
      bookmeta.author_sort
    }</td><td>${bookmeta.title}</td> </tr>`
  })
  .join("\n")

fs.writeFileSync("output.txt", generated)
