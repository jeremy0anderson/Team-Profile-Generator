const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const fs = require('fs');
class Card {
      constructor(data) {
            this.role = data.getRole();
            switch (this.role) {
                  case "Manager":
                        this.role = data.getRole();
                        return this.card =
                            `<div class="card" id="manager-${data.id}">
                                <h3 class="card-header">${data.name} / ${this.role}</h3>
                                <section class="content-section">
                                    <div>
                                        <h4>Employee ID:</h4>
                                        <p>${data.id}</p>
                                    </div>
                                        <h4>Email:</h4>
                                        <p>${data.email}</p>
                                    <div>
                                        <h4>Office Number:</h4>
                                        <p>${data.office}</p>
                                    </div>
                                </section>
                            </div>`;
                  case "Engineer":
                        this.role = data.getRole();
                        return this.card =
                            `<div class="card" id="engineer-${data.id}">
                                <h3 class="card-header">${data.name} / ${this.role}</h3>
                                <section class="content-section">
                                    <div>
                                        <h4>Employee ID:</h4>
                                        <p>${data.id}</p>
                                    </div>
                                        <h4>Email:</h4>
                                        <p>${data.email}</p>
                                    <div>
                                        <h4>GitHub:</h4>
                                        <p>${data.github}</p>
                                    </div>
                                </section>
                            </div>`;
                  case "Intern":
                        this.role = data.getRole();
                        return this.card =
                            `<div class="card" id="intern-${data.id}">
                                <h3 class="card-header">${data.name} / ${this.role}</h3>
                                <section class="content-section">
                                    <div>
                                        <h4>Employee ID:</h4>
                                        <p>${data.id}</p>
                                    </div>
                                        <h4>Email:</h4>
                                        <p>${data.email}</p>
                                    <div>
                                        <h4>School:</h4>
                                        <p>${data.school}</p>
                                    </div>
                                </section>
                            </div>`;
                  default:
                        console.log('Invalid Data');
                        break;
            }
      }
}


module.exports = Card;