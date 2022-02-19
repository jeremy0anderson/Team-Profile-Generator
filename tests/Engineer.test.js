const Engineer = require('../lib/Engineer');

describe ("Engineer", () => {
    it ("creates an employee who's role is an engineer as a key/value pair", () => {
        const engineer = new Engineer('name', 'id', 'email', 'github');
        expect(engineer.getRole()).toEqual("Engineer");
        expect(engineer.getName()).toEqual("name");
        expect(engineer.getEmail()).toEqual("email");
        expect(engineer.getId()).toEqual("id");
        expect(engineer.getGithub()).toEqual("github");
        expect(engineer).toEqual({
            name: 'name',
            id: 'id',
            email: 'email',
            github: 'github'
        });
    });
})