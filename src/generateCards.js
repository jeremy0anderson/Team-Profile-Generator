const generate = function(data){
      let cards = [];
      this.role = data.getRole();
      switch(this.role){
            case "Manager":
                  //format html for engineer employees
                  const managerCard =
`
<section class="container">
    <div class="card">
        <h5 class="card-panel">
            <span class="card-header">${data.name}</span>
            <span class="subheader">${this.role = data.getRole()}</span>
        </h5>
        <div class="card-action card-content">
            <h6 class="card-header">ID:</h6>
            <p class="subheader">${data.id}</p>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">Email: </h6>
            <a class="subheader" href="mailto:${data.email}" >${data.email}</a>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">Office: </h6>
            <p class="subheader">${this.office = data.getOffice()}</p>
        </div>
    </div>
</section>
`;
                  cards.push(managerCard);
                  return cards;
            case "Intern":
                  //format html for intern employees
                  const internCard =
`
<section class="container">
      <div class="card">
            <h5 class="card-panel">
                <span class="card-header">${data.name}</span>
                <span class="subheader">${this.role = data.getRole()}</span>
            </h5>
            <div class="card-action card-content">
                <h6 class="card-header">ID:</h6>
                <p class="subheader">${data.id}</p>
            </div>
            <div class="card-action card-content">
                <h6 class="card-header">Email: </h6>
                <a class="subheader" href="mailto:${data.email}" >${data.email}</a>
            </div>
            <div class="card-action card-content">
                <h6 class="card-header">School: </h6>
                <a class="subheader">${this.school = data.getSchool()}</a>
            </div>
      </div>
</section>`;
                  cards.push(internCard);
                  return cards;
            case "Engineer":
                  //format html for manager employees
                  const engineerCard  =
`
<section class="container">
    <div class="card">
        <h5 class="card-panel">
            <span class="card-header">${data.name}</span>
            <span class="subheader">${this.role = data.getRole()}</span>
        </h5>
        <div class="card-action card-content">
            <h6 class="card-header">ID:</h6>
            <p class="subheader">${data.id}</p>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">Email: </h6>
            <a class="subheader" href="mailto:${data.email}" >${data.email}</a>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">GitHub: </h6>
            <a class="subheader" href="https://github.com/${this.github = data.getGithub()}">${this.github = data.getGithub()}</a>
        </div>
    </div>
</section>
`;
                  cards.push(engineerCard);
                  return cards;
      }
      cards.forEach(card => {
            return card;
      });
}


module.exports = generate;