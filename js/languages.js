
const langs = document.querySelectorAll(".text");
const langsLinks = document.querySelectorAll(".lang-link");




langsLinks.forEach((elem) => {
  elem.onclick = function () {
    window.location.hash = elem.id;
    loadLanguage();
  };
});
function loadLanguage(){
  if (window.location.hash && window.location.hash === "#en") {
    var lang = en;
    console.log("en",en);

  } else {
    console.log("fr",fr);
    var lang = fr;
  }
  langs.forEach((elem) => {
    console.log(elem.id);
    elem.textContent = lang[elem.id];
  });
}

loadLanguage();
