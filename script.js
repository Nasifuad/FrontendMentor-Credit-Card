// document.getElementById("confirm").addEventListener("click", function () {
//   console.log("clicked");
//   document.getElementById("dataform").style.display = "none";
//   document.getElementById("success").style.display = "block";
// });
// document.getElementById("continue").addEventListener("click", function () {
//   console.log("clicked");
//   document.getElementById("success").style.display = "none";
//   document.getElementById("dataform").style.display = "block";
// });
document.getElementById("confirm").addEventListener("click", function () {
  console.log("clicked");
  document.getElementById("dataform").classList.add("hidden");
  document.getElementById("dataform").classList.remove("visible");
  document.getElementById("success").classList.remove("hidden");
  document.getElementById("success").classList.add("visible");
});

document.getElementById("continue").addEventListener("click", function () {
  console.log("clicked");
  document.getElementById("success").classList.add("hidden");
  document.getElementById("success").classList.remove("visible");
  document.getElementById("dataform").classList.remove("hidden");
  document.getElementById("dataform").classList.add("visible");
});
