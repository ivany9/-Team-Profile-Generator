const Manager = require("../lib/Manager");

test("Can I get role from the method", () => {
    const role = "Manager";
    const  man= new Manager("name", 1,"ivany9@test.com",468757314);
    expect(man.getRole()).toBe(role);
  });

  test("Can I get officeNumber from the method", () => {
    const number = 468757314;
    const man = new Manager("name", 1,"ivany9@test.com",number);
    expect(man.getofficeNumber()).toBe(number);
  });