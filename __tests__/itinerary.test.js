const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");


describe("Itinerary constructor", ()=> {    
    it("checks if the itinerary constructor is an Object",()=>{
        const itinerary = new Itinerary(['port'])
        expect(itinerary).toBeInstanceOf(Object)
    })
    it("checks if the itinerary has ports property",()=>{
        const dover = jest.fn()
        const calais = jest.fn()
        const itinerary = new Itinerary([dover, calais])
        expect(itinerary.ports).toEqual([dover, calais])
    })
   
})