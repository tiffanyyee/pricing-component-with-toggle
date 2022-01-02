const toggleSwitch = document.getElementById("toggle-switch");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

toggleSwitch.addEventListener("click", () => {
    if (toggleSwitch.checked === true) {
      monthly.forEach(month => {
        month.classList.remove("hidden");
      });
      annually.forEach(annual => {
        annual.classList.add("hidden");
      });
    } else {
      monthly.forEach(month => {
        month.classList.add("hidden");
      });
      annually.forEach(annual => {
        annual.classList.remove("hidden");
      });
    }
  });
