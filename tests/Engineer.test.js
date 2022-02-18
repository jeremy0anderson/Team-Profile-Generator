const Engineer = require('../lib/Engineer');

describe ("Engineer", () => {
    it ("creates an employee who's role is an engineer as a key/value pair", () => {
        const engineer = new Engineer('name', 'id', 'email', 'github');
        expect(engineer).toEqual({
            name: 'name',
            id: 'id',
            email: 'email',
            github: 'github'
        });
    });
})