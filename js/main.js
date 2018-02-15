document.getElementById("educationbtn").addEventListener("click", education);
document.getElementById("hobbiesbtn").addEventListener("click", hobbies);
document.getElementById("familybtn").addEventListener("click", family);
document.getElementById("contactbtn").addEventListener("click", contact);

function education(){
  document.getElementById("hobbies").style.display = "none"
  document.getElementById("family").style.display = "none"
  document.getElementById("contact").style.display = "none"
  document.getElementById("education").style.display = "initial"
  console.log("hey")
}
function hobbies(){
  document.getElementById("family").style.display = "none"
  document.getElementById("contact").style.display = "none"
  document.getElementById("education").style.display = "none"
  document.getElementById("hobbies").style.display = "initial"
  console.log("hey")
}
function family(){
  document.getElementById("hobbies").style.display = "none"
  document.getElementById("contact").style.display = "none"
  document.getElementById("education").style.display = "none"
  document.getElementById("family").style.display = "initial"
}
function contact(){
  document.getElementById("hobbies").style.display = "none"
  document.getElementById("family").style.display = "none"
  document.getElementById("education").style.display = "none"
  document.getElementById("contact").style.display = "initial"
}