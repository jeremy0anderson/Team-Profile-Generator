const Employee = require('../lib/Employee');

describe('Employee', () =>{
    it('creates a new employee key/value pair', () =>{
        const employee = new Employee('name','id', 'email');
        expect(employee.getRole()).toEqual('Employee');
        expect(employee.getEmail()).toEqual('email');
    });
});