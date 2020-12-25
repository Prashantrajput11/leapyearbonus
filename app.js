let userInfo = document.querySelector(".user-info");
let output = document.querySelector(".output-text");
let btn = document.querySelector(".btn-birthday");

btn.addEventListener("click", function () {
  //function to check leap year

  function checkLeapYear() {
    var userDate = userInfo.value.split("/");
    console.log(userDate[2]);
    if (
      userDate[2] % 400 == 0 ||
      (userDate[2] % 4 == 0 && !userDate[2] % 100 == 0)
    ) {
      output.innerText = " your birthyear is a leap year";
      console.log(" your birthyear is a leap year");
    } else {
      output.innerText = "your birthday is not a leap year";
      console.log("your birthday is not a leap year");
    }
  }
  checkLeapYear();
});
