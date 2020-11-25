function validateForm() {
  // check first name
  let firstname = document.forms["ContactMeForm"]["firstname"].value;
  let alertStr = "";
  if (firstname === "") {
    alertStr += "First name must be filled out. ";
  } else if (!firstname.match(/^[A-Za-z]+$/)) {
    alertStr += "First name should only contain alphabet. ";
  }
  // check last name
  let lastname = document.forms["ContactMeForm"]["lastname"].value;
  if (lastname === "") {
    alertStr += "Last name must be filled out. ";
  } else if (!lastname.match(/^[A-Za-z]+$/)) {
    alertStr += "Last name should only contain alphabet. ";
  }
  // check email
  let email = document.forms["ContactMeForm"]["email"].value;
  const email_re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email === "") {
    alertStr += "Email address must be filled out. ";
  } else if(!email.match(email_re)) {
    alertStr += "Email address is invalid.";
  }
  // check phone number
  let phone = document.forms["ContactMeForm"]["phone"].value;
  if (phone !== "" && (phone.length !== 10 || !phone.match(/^[0-9]+$/))) {
    alertStr += "Phone number is invalid.";
  }

  if (alertStr) {
    alert(alertStr);
    return false;
  } else {
    alert("Information submitted!")
    return true;
  }
}