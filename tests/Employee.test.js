const  Employee = require('../lib/Employee');

describe('Employee', () =>{
    it('creates a new employee key/value pair', () =>{
        const employee = new Employee('name','id', 'email');
        expect(employee.getRole()).toEqual('Employee');
        expect(employee.getEmail()).toEqual('email');
        expect(employee.getId()).toEqual('id');
        expect(employee.getEmail()).toEqual('email')
        expect(employee.getName()).toEqual('name');
        expect(employee).toEqual({
            name: 'name',
            id: 'id',
            email: 'email'
        });
    });
});