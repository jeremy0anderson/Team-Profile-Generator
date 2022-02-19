const Intern = require('../lib/Intern');

describe('Intern', () =>{
    it('should return a new employee with the role of "intern" as a key/value pair', () =>{
        const intern = new Intern("name", "id", "email", "school");
        expect(intern.getRole()).toEqual('Intern');
        expect(intern.getEmail()).toEqual('email');
        expect(intern.getId()).toEqual('id');
        expect(intern.getEmail()).toEqual('email')
        expect(intern.getName()).toEqual('name');
        expect(intern.getSchool()).toBe('school');
    })
})