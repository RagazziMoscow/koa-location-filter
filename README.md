# koa-location-filter

Middleware for Koa realizing filtering via user's location.

### Install
---
Install with [npm](https://npmjs.org)

```
$ npm install koa-location-filter --save
```

### Usage

This module works detects the location of client by requests to following providers:
- https://freegeoip.net/
- https://ipapi.co/

#### Countries list

You can to make list of countries access is denied from. The can be added into the list by code.
List of countrues and their codes:
[geonames](http://www.geonames.org/countries/)

##### Example
For each country you can specify the reponse message. Response will be with code status 404.

```javascript
var Koa = require('koa');
var app = new Koa();
var filter = require('koa-location-filter');

filter(app, {
    blackList: {
	RU: 'Вам запрещён доступ',
	BG: 'Ne moze bee',
	US: 'Access is denied'
    }
});

app.use(async (ctx, next) => {
    ctx.body = 'Success';
});

var port = 8000;
app.listen(port, ()=> {
    console.log('Сервер работает на порту ' + port);
});
```

