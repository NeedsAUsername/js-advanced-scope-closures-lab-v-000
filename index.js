function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = end.slice(0, 2) - start.slice(0, 2);
    if (distance < blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
