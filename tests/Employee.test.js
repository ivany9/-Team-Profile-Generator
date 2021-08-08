const Employee =require("../lib/Employee");


test("Can set the Constructor ", () => {
    const emplo = new Employee("name", 1, "ivany9@test.com");
    expect(typeof(emplo)).toBe("object");
  });

test("Can set name from Constructor ", () => {
    const name = "ivan";
    const emplo = new Employee(name, 1, "ivany9@test.com");
    expect(emplo.getName()).toBe(name);
  });

  test("Can set id from Constructor ", () => {
    const id = 12;
    const emplo = new Employee("name", id, "ivany9@test.com");
    expect(emplo.getId()).toBe(id);
  });

  test("Can set email from Constructor ", () => {
    const email = "ivan@test.com";
    const emplo = new Employee("name", 1,email);
    expect(emplo.getEmail()).toBe(email);
  });

  test("Can I get role from the method", () => {
    const role = "Employee";
    const emplo = new Employee("name", 1,"ivany9@test.com");
    expect(emplo.getRole()).toBe(role);
  });

  test("Can I get name from the method", () => {
    const name = "ivan";
    const emplo = new Employee(name, 1,"ivany9@test.com");
    expect(emplo.getName()).toBe(name);
  });
 
  test("Can I get id from the method", () => {
    const id = 12;
    const emplo = new Employee("name", id,"ivany9@test.com");
    expect(emplo.getId()).toBe(id);
  });

  test("Can I get Email from the method", () => {
    const email = "ivany9@test.com";
    const emplo = new Employee("name", 1,email);
    expect(emplo.getEmail()).toBe(email);
  });




