const Engineer = require("../lib/Engineer");

test("Can I get role from the method", () => {
    const role = "Engineer";
    const engi = new Engineer("name", 1,"ivany9@test.com","ivany9");
    expect(engi.getRole()).toBe(role);
  });

  test("Can I get GitHub from the method", () => {
    const github = "ivany9";
    const engi = new Engineer("name", 1,"ivany9@test.com",github);
    expect(engi.getGitHub()).toBe(github);
  });