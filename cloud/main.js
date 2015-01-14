// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello from Jacky!");
});

//用户钩子
AV.Cloud.afterUpdate("_User", function(request) {
   console.log("Updated _user:" + JSON.stringify(request.object));
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

AV.Cloud.beforeDelete("_User", function(request, response) {

	//之前可以检查是否允许删除
	//response.error("因为某些原因不能删除");
	response.success();
});