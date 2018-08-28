// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver, { [key]: value })
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
   driver[key] = value 
   return driver

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = driver 
  delete newDriver[key]
  return newDriver
}