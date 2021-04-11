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


