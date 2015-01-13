// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

//用户钩子
AV.Cloud.afterUpdate("_User", function(request) {
   console.log("Updated _user,the id is :" + request.object.id);
});

AV.Cloud.afterSave("_User", function(request) {
  console.log(request.object);
  // request.object.set("from","LeanCloud");
  // request.object.save(null,{success:function(user)
  //   {
  //     console.log("ok!");
  //   },error:function(user,error)
  //   {
  //     console.log("error",error);
  //   }
  //   });
});