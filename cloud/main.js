// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.afterUpdate("_User", function(request) {
   console.log("Updated _user,the id is :" + request.object.id);
});