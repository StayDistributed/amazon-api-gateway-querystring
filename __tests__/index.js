var mapQueryString = require('../index');

describe('Query String', () => {

  test('Mapper', () => {

    var querystring = {
      'legs[0][departure_airport]': 'MXP',
      'legs[0][arrival_airport]': 'TIA',
      'legs[0][outbound_date]': '2017-03-29',
      'legs[1][departure_airport]': 'oiue',
      'legs[1][arrival_airport]': 'csdjn',
      'legs[1][outbound_date]': '2017-03-21',
      'person[child][name]': 'oiue',
      'person[child][age]': 'csdjn',
      'person[parent][name]': '2017-03-21',
      'adult': 1,
      'search_type': 'oneway'
    };

    var mapped = mapQueryString(querystring);

    expect(mapped.legs[1].departure_airport).toBe('oiue');
    expect(Object.prototype.toString.call(mapped.legs)).toBe('[object Array]');
    expect(Object.prototype.toString.call(mapped.legs[0])).toBe('[object Object]');
    expect(mapped.person.child.name).toBe('oiue');
    expect(mapped.legs[0].outbound_date).toBe('2017-03-29');
  });
});
