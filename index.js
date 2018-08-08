// Code your solution in this file.
function toLower(driver) {
  return driver.toLowerCase()
}
function lowerCaseDrivers(drivers){
  return drivers.map(toLower)
}
function nameToAttributes(drivers){
  return drivers.map(function (driver){
  splitName = driver.split('')
  return {firstName: splitName[0], lastName: splitName[1]}
})
}
function attributestoPhrase(drivers) {
  return drivers.map(function(driver){
  return driver.name + 'is from ' + driver.hometown
})
}