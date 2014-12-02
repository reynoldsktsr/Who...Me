Parse.initialize("jPjX42UDtpJlCpl61bVM0fZhrCo7KejSUTPZ2QrB", "hjwkwzXvZqK5XlyeCOTRD5OakMgVN4LuzuYTEuYH");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

function registerNew(){
var user = new Parse.User();
var form = document.getElementById("register-form")
var fname = form.fname.value;
var lname = form.lname.value;
var email = form.email.value;

user.set("username", fname);
user.set("password", lname);
user.set("email", email);
  
// other fields can be set just like with Parse.Object
user.set("phone", "650-555-0000");
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    form.submit;
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
}