const Manager = require('../lib/Manager');

describe("Manager", () =>{
    it('should create an employee with the role of manager', () => {
        const manager = new Manager('name', 'id', 'email', 'office#');
        expect(manager.getRole()).toEqual('Manager');
        expect(manager.getEmail()).toEqual('email');
        expect(manager.getId()).toEqual('id');
        expect(manager.getEmail()).toEqual('email')
        expect(manager.getName()).toEqual('name');
        expect(manager.getOffice()).toBe('office#');
        expect(manager).toEqual({
            name: 'name',
            id: 'id',
            email: 'email',
            office: 'office#'
            });
    });
})