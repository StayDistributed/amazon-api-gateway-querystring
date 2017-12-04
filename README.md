# amazon-api-gateway-querystring
Utility for parse nested parameters in query strings


To transform plain nested params in object inside querystring:

```javascript
var mapQueryString = require('amazon-api-gateway-querystring');
event.queryStringParameters = mapQueryString(event.queryStringParameters);
```

```javascript
event.queryStringParameters = {
  "person[0][name]": "Mark",
  "person[0][age]": 32,
  "person[1][name]": "Luke",
  "person[1][age]": 26,
  "contacts[home][phone]": "+3333333333",
  "contacts[home][email]": "email@email.com",
  "contacts[home][twitter]": "@username"
}

// become:

event.queryStringParameters = {
  "person": [{
    "name": "Mark",
    "age": 32
  }, {
    "name": "Luke",
    "age": 26
  }],
  "contacts": {
    "home": {
      "phone": "+3333333333",
      "email": "email@email.com",
      "twitter": "@username"
    }
  }
}
```
