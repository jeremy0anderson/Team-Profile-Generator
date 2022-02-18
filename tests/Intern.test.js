const Intern = require('../lib/Intern');

describe('Intern', () =>{
    it('should return a new employee with the role of "intern" as a key/value pair', () =>{
        const intern = new Intern("name", "id", "email", "school");
        expect(intern.getSchool()).toBe('school');
    })
})