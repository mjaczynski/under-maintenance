# Notice

This is a simple module to configure a server using Express to respond to traffic (UI and API) while you deploy or update your other servers. The module can be configured so that API URL will return a JSON object while all the other routes will return an HTML page.

Context
-------

When using PaaS such as IBM Bluemix or other cloud services, it is easy to deploy multiple servers following the micro-services pattern. You can usually update each service without downtime as the PaaS will gradually update the different instances. However, when a global update is necessary because of some dependencies between services, you may need to implement a traditional blue/green deployment. If this is too costly for you, just start this small server, redirect all the routes to it while you do you updates. At least the users will understand and that's better than a pure HTTP error.  


Example
-------

In this following example, 2 REST services will return code 500 with a JSON message, and any other URL will be redirected to the `down.html` page.

```
var under_maintenance = require('under-maintenance');

var appEnv   = cfenv.getAppEnv();

var app = under_maintenance({	
	api : ['/service1/rest/v1', '/service2/rest/v1'],
    message : { message : "unavailable"},
    root : './public',
    page : 'down.html'
    	
});

More About IBM Bluemix
----------------------

You will also find a full example ready for Bluemix in this githib repository.
[https://github.com/mjaczynski/under-maintenance-example](https://github.com/mjaczynski/under-maintenance-example)

Just use `cf push` to push to you environment and you can use `cf map-route` and `cf unmap-route` to redirect temporarily the traffic to this app 




app.listen(80);
```

