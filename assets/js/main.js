document.getElementById("submit-button").onclick = () => {
  var fullName = document.getElementById("full-name").value;
  var emailId = document.getElementById("email-id").value;
  var confirmEmail = document.getElementById("confirm-email").value;
  var instaId = document.getElementById("insta-id").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var gender = document.getElementById("gender").value;
  var whatsappNumber = document.getElementById("whatsapp-number").value;
  var password = document.getElementById("password").value;

  localStorage.setItem("full-name", fullName);
  localStorage.setItem("email-id", "imshubsoni@gmail.com");

  sessionStorage.setItem("insta", instaId);
  sessionStorage.setItem("phone", "9772187144");
};

document.getElementById(
  "contents"
).innerHTML = `Name is: ${localStorage.getItem(
  "full-name"
)}. \n Email-id is: ${localStorage.getItem(
  "email-id"
)}. \n Insta-id is: ${sessionStorage.getItem(
  "insta"
)} \n Phone Number is: ${sessionStorage.getItem("phone")}`;
