alert('Seja bem vindo ao nosso site.')

let imagens= [
    "src/assets/img3.jpg",
    "src/assets/img1.jpg",
    "src/assets/bike2.jpg"
];

let i =0;
let time=4000;

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i=== imagens.length){i=0};
    setTimeout("slideShow()", time)


}
slideShow();
