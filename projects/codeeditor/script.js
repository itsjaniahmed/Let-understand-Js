function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function compile() {
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            html.value +
            "<style>" +
            css.value +
            "</style>" +
            "<script>" +
            js.value +
            "</script>"
        );
        code.close();
    };
}




compile()


// const themeSwitch = document.querySelector('.btn');

// themeSwitch.addEventListener('change', () => {
//   document.body.classList.toggle('black');
//   console.log("clicked");
// });

let btn=document.getElementById("btn")
function darkMode() {

     let element = document.getElementById("man");
    element.classList.toggle("black");

 

}


