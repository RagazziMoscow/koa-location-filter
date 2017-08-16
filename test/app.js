var Koa = require('koa');
var app = new Koa();
var filter = require('./../lib');

filter(app, {
	blackList: {
		RU: 'Русне вход запрещён, она сидит на бутылке',
		BG: 'Ne moze bee',
		DE: 'You cant request it'
	}
});
 app.use(async (ctx, next) => {
 	ctx.body = 'Ответ успешен';
 });


var port = 8000;
app.listen(port, ()=> {
	console.log('Сервер работает на порту ' + port);
});