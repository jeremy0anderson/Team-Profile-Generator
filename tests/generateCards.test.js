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
            const newEngineer = new Engineer('Engineer 1', '12345', 'email@engineer.com', 'GitHubUsername');
            expect(new Card(newEngineer)).toEqual({
                role:"Engineer", card: `<div class="card" id="engineer-12345">
                                <h3 class="card-header">Engineer 1 / Engineer</h3>
                                <section class="content-section">
                                    <div>
                                        <h4>Employee ID:</h4>
                                        <p>12345</p>
                                    </div>
                                        <h4>Email:</h4>
                                        <p>email@engineer.com</p>
                                    <div>
                                        <h4>GitHub:</h4>
                                        <p>GitHubUsername</p>
                                    </div>
                                </section>
                            </div>`
            });
            const newManager = new Manager('Manager 1', '12345', 'email@manager.com', '1-800-manager');
            expect(new Card(newManager)).toEqual({
                  role: "Manager", card: `<div class="card" id="manager-12345">
                                <h3 class="card-header">Manager 1 / Manager</h3>
                                <section class="content-section">
                                    <div>
                                        <h4>Employee ID:</h4>
                                        <p>12345</p>
                                    </div>
                                        <h4>Email:</h4>
                                        <p>email@manager.com</p>
                                    <div>
                                        <h4>Office Number:</h4>
                                        <p>1-800-manager</p>
                                    </div>
                                </section>
                            </div>`
            })
      })
})