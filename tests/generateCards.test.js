const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Card = require('../src/generateCards');
describe("Cards", () => {
      it('should return the role of an employee and a key named card containing html', () =>{
            const newIntern = new Intern('Intern 1', '12345', 'email@intern.com', 'Intern University');
            expect(new Card(newIntern)).toEqual({
                  role: "Intern", card: `<div class="card" id="intern-12345">
                                <h3 class="card-header">Intern 1 / Intern</h3>
                                <section class="content-section">
                                    <div>
                                        <h4>Employee ID:</h4>
                                        <p>12345</p>
                                    </div>
                                        <h4>Email:</h4>
                                        <p>email@intern.com</p>
                                    <div>
                                        <h4>School:</h4>
                                        <p>Intern University</p>
                                    </div>
                                </section>
                            </div>`
            });
      })
})