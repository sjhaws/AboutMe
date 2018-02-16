document.getElementById("educationbtn").addEventListener("click", education);
document.getElementById("hobbiesbtn").addEventListener("click", hobbies);
document.getElementById("familybtn").addEventListener("click", family);
document.getElementById("contactbtn").addEventListener("click", contact);

function education(){
  hideAll();
  document.getElementById("education").style.display = "initial";
};
function hobbies(){
  hideAll();
  document.getElementById("hobbies").style.display = "initial";
};
function family(){
  hideAll();
  document.getElementById("family").style.display = "initial";
};
function contact(){
  hideAll();
  document.getElementById("contact").style.display = "initial";
};
function hideAll(){
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("family").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("education").style.display = "none";
}