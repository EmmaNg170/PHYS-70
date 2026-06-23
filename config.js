var config = {
  student_name: "Emma Ng", // ie. John Doe
  student_year_sem: "Summer Sessions", // ie. Fall 2025
  student_email: "ngemma1111@gmail.com", // ie. jdoe@college.harvard.edu

  background_color: "#252755",
  text_color: "#dedede",
  accent_color: "#aeb0e1",

  // Make sure to add the @import from Google Fonts to style.css, ask if you need help!
  font_family: "Lato",
  code_font_family: "Roboto Mono"
};

document.title = `${config.student_name}'s PS70 Website`;

document.documentElement.style.setProperty(
  "--background-color",
  config.background_color
);
document.documentElement.style.setProperty(
  "--text-color",
  config.text_color
);
document.documentElement.style.setProperty(
  "--accent-color",
  config.accent_color
);
document.documentElement.style.setProperty(
  "--font-family",
  config.font_family
);
document.documentElement.style.setProperty(
  "--mono-font-family",
  config.code_font_family
);

document.querySelector("footer").innerHTML = `
  <a href="./index.html#final-project">Work</a>
  <a href="./about.html">About</a>

  <div id="contact-info">
    <a href="mailto:${config.student_email}">${config.student_email}</a>
  </div>
`;

document.querySelectorAll('#student-name').forEach(el => {
  el.innerHTML = `${config.student_name}`;
});