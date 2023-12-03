
function findMatching(driversNames, name) {
    const lowerCaseName = name.toLowerCase();
    const result = driversNames.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
  }

  function fuzzyMatch(driversNames, letter){
    const result = driversNames.filter(driver => driver.substring(0,2) === letter)
    return result
}

function matchName(driversNames, name){
    const result = driversNames.filter(driver => driver.name === name)
    return result
}