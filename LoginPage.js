const SubBtn = document.getElementById("SubBtn");

SubBtn.addEventListener("click", event => {
  event.preventDefault();
let UserTxt = document.getElementById("UserTxt").value;
let Password = document.getElementById("Password").value;


fetch('LoginInfo.json')
.then(Response => Response.json())
.then(jsonData => {
    localStorage.setItem("jsonData", JSON.stringify(jsonData));
    
    const GetData = JSON.parse(localStorage.getItem("jsonData"));
    
    const JsonInfo = GetData.Users.find(user => user.UserName == UserTxt && user.Password == Password);


     if(JsonInfo){
          window.location.href = "DashBoard.html";
         }
     else{
            document.write("Username and Password Invalid!!")
         }
    });
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("Password");
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
  } else {
      passwordInput.type = "password";
  }
}