const panels = $(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    // panel.classList.add('.active');
    panel.classList.add("active");
    // console.log("Hello?")
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
