const {generate, Manager, Engineer, Intern} = require('../src/generateCards');

describe("generateCards", () =>{
      it ("should resolve input values to an appropriate pre-formatted html file", () =>{
            const nM = new Manager("Manager Example1", "12344", "email@manager.com", "18881234567");
            const nE = new Engineer("Jeremy Anderson", "12345", "jeremy@engineer.com", "jeremy0anderson");
            const nI = new Intern("Intern Example1", "123456", "Example@intern.com", "School");
            const emArray = [nM, nE, nI];
                  expect(generate(nM)).toEqual([
`
<section class="container">
    <div class="card">
        <h5 class="card-panel">
            <span class="card-header">Manager Example1</span>
            <span class="subheader">Manager</span>
        </h5>
        <div class="card-action card-content">
            <h6 class="card-header">ID:</h6>
            <p class="subheader">12344</p>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">Email: </h6>
            <a class="subheader" href="mailto:email@manager.com" >email@manager.com</a>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">Office: </h6>
            <p class="subheader">18881234567</p>
        </div>
    </div>
</section>
`]);
                  expect(generate(nE)).toEqual([
`
<section class="container">
    <div class="card">
        <h5 class="card-panel">
            <span class="card-header">Jeremy Anderson</span>
            <span class="subheader">Engineer</span>
        </h5>
        <div class="card-action card-content">
            <h6 class="card-header">ID:</h6>
            <p class="subheader">12345</p>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">Email: </h6>
            <a class="subheader" href="mailto:jeremy@engineer.com" >jeremy@engineer.com</a>
        </div>
        <div class="card-action card-content">
            <h6 class="card-header">GitHub: </h6>
            <a class="subheader" href="https://github.com/jeremy0anderson">jeremy0anderson</a>
        </div>
    </div>
</section>
`]);
                  expect(generate(nI)).toEqual([
`
<section class="container">
      <div class="card">
            <h5 class="card-panel">
                <span class="card-header">Intern Example1</span>
                <span class="subheader">Intern</span>
            </h5>
            <div class="card-action card-content">
                <h6 class="card-header">ID:</h6>
                <p class="subheader">123456</p>
            </div>
            <div class="card-action card-content">
                <h6 class="card-header">Email: </h6>
                <a class="subheader" href="mailto:Example@intern.com" >Example@intern.com</a>
            </div>
            <div class="card-action card-content">
                <h6 class="card-header">School: </h6>
                <a class="subheader">School</a>
            </div>
      </div>
</section>
`]);
      });
})