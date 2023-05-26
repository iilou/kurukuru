var audio1;
var audio2;
var I;
var L;
var container;
var body;
var html;
var kurus = 0;
const MAX_KURU = 20;
var kuruList = new Array(MAX_KURU);

init_defaults();

function init_vars(){
    audio1 = [];
    audio2 = [];
    I = 0;
    L = 100;

    for(let i = 0; i < L; i++){
        audio1.push(new Audio('kuru1.mp3'));
        audio2.push(new Audio('kuru2.mp3'));
    }

    return true;
}

async function init_defaults(){ 
    
    let a = await init_vars();

    addEventListener("DOMContentLoaded", (event) => {

        body = document.body;
        html = document.documentElement;

        var slider = document.getElementById("slider");
        var root = document.documentElement;

        document.addEventListener('contextmenu', event => event.preventDefault());
        
        slider.addEventListener("input", (e) => {
            root.style.setProperty("--h", e.target.value + "px");
            console.log("kurkur")
        })

        container = document.getElementById("container-main");

        for(let i = 0; i < 4; i++){
            create_kuru();
        }
    }
)};

function next(i, l){
    return i+1 == l ? 0 : i+1;
}

function kurukuru(elm){
    audio1[I].play();

    const img = document.createElement("img");
    img.classList.add("kuru-1");
    img.src = "star-rail-kuru.gif";

    elm.appendChild(img);

    setTimeout( function() {img.remove()}, 5000);
}

function kuruing(elm){
    audio2[I].play();

    const img = document.createElement("img");
    img.classList.add("kuru-2");
    img.src = "star-rail-kuru.gif";

    elm.appendChild(img);

    setTimeout( function() {img.remove()}, 5000);
}

function kuru(type, elm, e){

    console.log(e.which);

    if (type*(e.which-2) == -1) kurukuru(elm);
    if (type*(e.which-2) == 1) kuruing(elm);

    I = next(I, L);

    if(Math.random() < 0.1) draw_herta();

    

}

function create_kuru(){
    console.log("created 1 kuru");

    var newKuru = document.createElement("div");
    newKuru.classList.add("kuru");

    container.appendChild(newKuru);

    let type = kurus%2==0?1:-1;
    
    newKuru.addEventListener("mousedown", (e) => {kuru(type, newKuru, e)});

    kuruList[kurus] = newKuru;
    kurus = Math.min(MAX_KURU, kurus+1);

}

function delete_kuru(){
    console.log("deleted 1 kuru");

    kurus = Math.max(kurus-1, 0);
    kuruList[kurus].remove();
}


function draw_herta(){
    var newHerta = document.createElement("img");
    newHerta.classList.add("herta");
    newHerta.src = "herta.png";

    let scale = Math.random()+0.5;
    let transformX = Math.random()*(window.innerWidth-(scale*374));
    let transformY = Math.random()*(document.body.scrollHeight-(scale*509));
    
    let rotate = Math.random()*140-70;

    newHerta.style.transform = "scale("+scale+", "+scale+") translate("+
        transformX+"px, "+transformY+"px) rotate("+rotate+"deg)";

    document.body.appendChild(newHerta);
}