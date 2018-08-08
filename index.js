// Code your solution in this file.
function toLower(driver) {
  return driver.toLowerCase()
}
function lowerCaseDrivers(drivers){
  return drivers.map(toLower)
}
function nameToAttributes(drivers) {
  splitName = driver.split('')
  return {firstName: splitName [0], lastName: splitName[1]}
}