document.addEventListener("DOMContentLoaded", function () {
  let image = document.querySelector(".sp__header--backimg");

  new simpleParallax(image, {
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
  });

  new Typewriter(".sp__header--subheader", {
    strings: "Все лучшие места и яркие герои южного мегаполиса здесь.",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
});
