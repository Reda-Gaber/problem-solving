function hello (name) {
  if (name) {
    let textName = name.toLowerCase()
    let firstLetter = textName[0].toUpperCase()
    return `Hello, ${firstLetter}${textName.slice(1)}!`
  } else {
    return `Hello, World!`
  }
}
