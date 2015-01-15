// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello from Jacky!");
});


var API_URL = "http://moodle.salmonapps.com/update.php";

function callback_moodle(actionName, className, objectId, obj) {

  var json = JSON.stringify(obj);

  AV.Cloud.httpRequest({
    method: 'POST',
    url: API_URL,
    headers: {
    'Content-Type': 'application/json'
    },
    body: {
      action: actionName,
      className: className,
      data: obj
    },
    success: function(httpResponse) {
      console.log(httpResponse.text);
    },
    error: function(httpResponse) {
      console.error('Request failed with response code ' + httpResponse.status);
    }
  });

}

//用户钩子
AV.Cloud.afterUpdate("_User", function(request) {
  callback_moodle("UPDATE", "_USER", request.object);
});

AV.Cloud.afterSave("_User", function(request) {
  callback_moodle("ADD", "_USER", request.object);
});

AV.Cloud.beforeDelete("_User", function(request, response) {
  callback_moodle("DELETE", "_USER", request.object);
	response.success();
});