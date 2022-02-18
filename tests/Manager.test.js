const Manager = require('../lib/Manager');

describe("Manager", () =>{
    it('should create an employee with the role of manager', () => {
        const manager = new Manager('name', 'id', 'email', 'office#');
        expect(manager.getOffice()).toBe('office#');
    })
})