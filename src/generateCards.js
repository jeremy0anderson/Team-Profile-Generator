class Card {
      constructor(data) {
            this.role = data.getRole();
            switch (this.role) {
                  case "Manager":
                        this.role = data.getRole();
                        return this.card =
                              `<section class="container">
                                    <div class="card">
                                    <h5 class="card-panel">
                                        <span class="row card-header">${data.name}</span>
                                        <span class="row subheader">${this.role}</span></h5>
                                    <div class="card-content">
                                        <h6 class="card-header">ID:</h6>
                                        <p class="subheader">${data.id}</p>
                                    </div>
                                    <div class="card-action card-content">
                                        <h6 class="card-header">Email: </h6>
                                        <a class="subheader" href="mailto:${data.email}" >${data.email}</a>
                                    </div>
                                    <div class="card-action card-content">
                                        <h6 class="card-header">Office Number: </h6>
                                        <p class="subheader">${data.office}</p>
                                    </div>
                                </div>
                              </section>`;
                  case "Engineer":
                        this.role = data.getRole();
                        return this.card =
                              `<section class="container">
                                     <div class="card">
                                          <h5 class="card-panel">
                                              <span class="row card-header">${data.name}</span>
                                              <span class="row subheader">${this.role}</span></h5>
                                          <div class="card-content">
                                              <h6 class="card-header">ID:</h6>
                                              <p class="subheader">${data.id}</p>
                                          </div>
                                          <div class="card-action card-content">
                                              <h6 class="card-header">Email: </h6>
                                              <a class="subheader" href="mailto:${data.email}" >${data.email}</a>
                                          </div>
                                          <div class="card-action card-content">
                                              <h6 class="card-header">GitHub: </h6>
                                              <a class="subheader" href="https://github.com/${data.github}">${data.github}</a>
                                          </div>
                                      </div>
                              </section>`;
                  case "Intern":
                        this.role = data.getRole();
                        return this.card = `<section class="container">
                              <div class="card">
                              <h5 class="card-panel">
                              <span class="row card-header">${data.name}</span>
                              <span class="row subheader">${this.role}</span></h5>
                              <div class="card-content">
                              <h6 class="card-header">ID:</h6>
                              <p class="subheader">${data.id}</p>
                              </div>
                              <div class="card-action card-content">
                              <h6 class="card-header">Email: </h6>
                              <a class="subheader" href="mailto:${data.email}" >${data.email}</a>
                              </div>
                              <div class="card-action card-content">
                              <h6 class="card-header">School: </h6>
                              <p class="subheader">${data.school}</p>
                              </div>
                              </div>
                              </section>`;
                  default:
                        console.log('Invalid Data');
                        break;
            }
      }
}
module.exports = Card;