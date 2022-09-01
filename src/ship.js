//const Port = require("../src/port.js");

class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }
  setSail() {
    const itineraryArr = this.itinerary.ports;
    const currentPortIndex = itineraryArr.indexOf(this.currentPort);

    if (currentPortIndex === itineraryArr.length - 1) {
      throw new Error("End of itinerary reached");
    }
    this.previousPort = itineraryArr[currentPortIndex];
    this.currentPort = null;
    this.previousPort.removeShip(this);
  }
  dock() {
    const itineraryArr = this.itinerary.ports;
    const previousPortIndex = itineraryArr.indexOf(this.previousPort);
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this)
  }
}

module.exports = Ship;
// export default Ship;
