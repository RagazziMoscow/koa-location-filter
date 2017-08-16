var location = require('koa-location');

module.exports = function(app, options) {
	app.use(location({
		autoDetect: true
	}));

	app.use(async (ctx, next) => {
		let banedCountries = Object.keys(options.blackList);
		let country = ctx.request.location.code;
		let banedCondition = (banedCountries.includes(country));

		if (banedCondition) {
			ctx.body = options.blackList[country];
			ctx.response.status = 404;
			return;
		}

		next();
	});
}