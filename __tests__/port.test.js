const Port = require("../src/port.js");
const Ship = require("../src/ship.js");
const Itinerary = require("../src/itinerary.js");

let dover;
beforeEach(() => {
  dover = new Port("Dover");
});
describe("Port constructor", () => {
  it("checks if the port constructor is an Object", () => {
    expect(dover).toBeInstanceOf(Object);
  });
  it("checks if the port's name is recorded", () => {
    expect(dover.name).toBe("Dover");
  });
});

describe("Port fuctions", () => {
  let itinerary ;
  beforeEach(() => {
    itinerary = new Itinerary([dover]);
  });
  describe("Port addShip", () => {
    it("checks if the ship is added", () => {
      const ship = jest.fn();
      dover.addShip(ship);
      expect(dover.ships).toContain(ship);
    });
  });
  describe("Port removeShip", () => {
    it("checks if the ship is removed", () => {
      const ship1 = jest.fn();
      const ship2 = jest.fn();
      const ship3 = jest.fn();
      dover.ships = [ship1, ship2, ship3];
      dover.removeShip(ship2);
      expect(dover.ships).toEqual([ship1, ship3]);
    });
  });
});
