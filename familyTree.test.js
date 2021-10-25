const { royalFamily, WilliamWindsor } = require("./familyTree.js");

describe('person object', () => {
    test('Person must have a name attribute', () => {
        expect(WilliamWindsor.name).toEqual("William Windsor")
    })

    test("Person's parents must return at least one name or unknown", () => {
        expect(WilliamWindsor.childOf()).toBe(String) &&
        expect().toEqual()
    })
})