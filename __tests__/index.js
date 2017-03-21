var mapQueryString = require('../index');

describe('Query String', () => {

  test('Readme.md', () => {

    var querystring = {
      "person[0][name]": "Mark",
      "person[0][age]": 32,
      "person[1][name]": "Luke",
      "person[1][age]": 26,
      "contacts[home][phone]": "+3333333333",
      "contacts[home][email]": "email@email.com",
      "contacts[home][twitter]": "@username"
    };

    var mapped = mapQueryString(querystring);

    expect(Object.prototype.toString.call(querystring)).toBe('[object Object]');
    expect(Object.prototype.toString.call(querystring.person)).toBe('[object Array]');
    expect(Object.prototype.toString.call(querystring.person[0])).toBe('[object Object]');
    expect(Object.prototype.toString.call(querystring.contacts)).toBe('[object Object]');
    expect(Object.prototype.toString.call(querystring.contacts.home)).toBe('[object Object]');
    expect(querystring.person[0].name).toBe('Mark');
    expect(querystring.person[0].age).toBe(32);
    expect(querystring.person[1].name).toBe('Luke');
    expect(querystring.person[1].age).toBe(26);
    expect(querystring.contacts.home.phone).toBe("+3333333333");
    expect(querystring.contacts.home.email).toBe("email@email.com");
    expect(querystring.contacts.home.twitter).toBe("@username");

  });
});
