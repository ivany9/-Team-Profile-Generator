const Intern = require("../lib/Intern");

test("Can I get role from the method", () => {
    const role = "Intern";
    const  inter= new Intern("name", 1,"ivany9@test.com","st.Patrick");
    expect(inter.getRole()).toBe(role);
  });

  test("Can I get GitHub from the method", () => {
    const school = "St.Patrick";
    const inter = new Intern("name", 1,"ivany9@test.com",school);
    expect(inter.getSchool()).toBe(school);
  });