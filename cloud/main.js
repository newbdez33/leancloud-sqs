// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello from Jacky!");
});


var API_URL = "http://moodle.salmonapps.com/update.php";

function callback_moodle(actionName, className, obj) {

  AV.Cloud.httpRequest({
    method: 'POST',
    url: API_URL,
    body: {
      data: obj,
      action: actionName,
      className: className
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

//通知钩子
AV.Cloud.afterUpdate("Notification", function(request) {
  callback_moodle("UPDATE", "Notification", request.object);
});

AV.Cloud.afterSave("Notification", function(request) {
  callback_moodle("ADD", "Notification", request.object);
});

AV.Cloud.beforeDelete("Notification", function(request, response) {
  callback_moodle("DELETE", "Notification", request.object);
  response.success();
});

//通知回复钩子
AV.Cloud.afterUpdate("NotificationReply", function(request) {
  callback_moodle("UPDATE", "NotificationReply", request.object);
});

AV.Cloud.afterSave("NotificationReply", function(request) {
  callback_moodle("ADD", "NotificationReply", request.object);
});

AV.Cloud.beforeDelete("NotificationReply", function(request, response) {
  callback_moodle("DELETE", "NotificationReply", request.object);
  response.success();
});

//作业钩子
AV.Cloud.afterUpdate("Assignment", function(request) {
  callback_moodle("UPDATE", "Assignment", request.object);
});

AV.Cloud.afterSave("Assignment", function(request) {
  callback_moodle("ADD", "Assignment", request.object);
});

AV.Cloud.afterDelete("Assignment", function(request, response) {
  console.log("after delete called"+request);
  callback_moodle("DELETE", "Assignment", request.object);
});