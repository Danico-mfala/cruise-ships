const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");
//  import Ship from "../src/ship.js";

describe("Ship constructor", () => {
  let dover;
  let itinerary;
  let ship;
  beforeEach(() => {
    dover = new Port("Dover");
    itinerary = new Itinerary([dover]);
    ship = new Ship(itinerary);
  });

  it("checks if the ship constructor is defined", () => {
    expect(ship).toBeDefined();
  });
  it("cheks if ship is an Object", () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it("has a starting point", () => {
    expect(ship.currentPort).toEqual(dover);
  });
  it("gets added to the port on instantiation", () => {
    expect(dover.ships).toContain(ship);
  });
});

describe("Set sail", () => {
  it("checks if the ship constructor is defined", () => {
    const dover = new Port("Dover");
    const calais = new Port("Dover");
    const itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
    expect(dover.ships).not.toContain(ship);
  });
});

describe("Dock", () => {
  let dover;
  let calais;
  let itinerary;
  let ship;
  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
  });

  it("can dock at any port", () => {
    expect(ship.currentPort).toEqual(calais);
    expect(calais.ships).toContain(ship);
  });
  it("can't sail further than its itinerary", () => {
    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});
