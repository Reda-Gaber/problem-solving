function getDetails (zName, zAge, zCountry) {
  let name = zName => {
    let name = zName.split(' ')
    return `${name[0]} ${name[1][0].toUpperCase()}.`
  }
  let age = zAge => zAge.split('').filter(ele => parseInt(ele)).join('')

  let country = zCountry => zCountry.slice(0, 2).toUpperCase()

  let fullDetails = _ =>
    `Hello ${name(zName)}, Your Age Is ${age(zAge)} You Live In ${country(
      zCountry
    )}`

  return fullDetails() // Do Not Edit This
}

console.log(getDetails('Osama Mohamed', '38 Is My Age', 'Egypt'))
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails('Ahmed ali', '32 Is The Age', 'Syria'))
// Hello Ahmed A., Your Age Is 32, You Live In SY
