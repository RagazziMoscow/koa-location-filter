var Koa = require('koa');
var app = new Koa();
var filter = require('./../lib');

filter(app, {
	blackList: {
		RU: 'Вам запрещён доступ',
		BG: 'Ne moze bee',
		US: 'You cant request it'
	}
});
 app.use(async (ctx, next) => {
 	ctx.body = 'Ответ успешен';
 	console.log(ctx.request.location);
 });


var port = 8000;
app.listen(port, ()=> {
	console.log('Сервер работает на порту ' + port);
});