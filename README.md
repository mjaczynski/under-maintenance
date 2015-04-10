# Notice

This is a simple module to configure a server using Express to respond to traffic (UI and API) while you deploy or update your other servers. The module can be configured so that API URL will return a JSON object while all the other routes will return an HTML page.

Context
-------

When using PaaS such as IBM Bluemix or other cloud services, it is easy to deploy multiple servers following the micro-services pattern. You can usually update each service without downtime as the PaaS will gradually update the different instances. However, when a global update is necessary because of some dependencies between services, you may need to implement a traditional blue/green deployment. If this is too costly for you, just start this small server, redirect all the routes to it while you do you updates. At least the users will understand and that's better than a pure HTTP error.  


Example
-------

`
var under_maintenance = require('under-maintenance');

var appEnv   = cfenv.getAppEnv();

var app = under_maintenance({	
	api : ['/service1/rest/v1', '/service2/rest/v1'],
    message : { message : "unavailable"},
    root : './public',
    page : 'down.html'
    	
});

app.listen(80);
`

