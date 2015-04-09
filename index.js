
var express = require('express');

var message_default = {
   message : "Site under maintenance"
};

module.exports = function(config) {
	
	var app = express();
		
	if (config.api){
		config.api.forEach(function (route) {
			var message = JSON.stringify(config.message||message_default);
			console.log("configuring api route %s to message %s",route,message);
			app.use(route, function(request,response){
				 response.set("Content-Type", "application/json");				 
				 response.status(500).send(message);
			});
		})
	}
		
	var root = config.root||__dirname+'/public';
	console.log('configuring static root to %s',root);
	app.use(express.static(root));
	
	var page = config.page||'unavailable.html';
	console.log('configuring unavailable page to %s',page);
	app.use('/', function(request,response){
		response.redirect('/'+page);
	} );
	
	return app;
}
