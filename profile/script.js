const border = document.getElementById('border');

const hom = document.getElementById('home');
const nam = document.getElementById('name');
const wh = document.getElementById('who');
const project = document.getElementById('projects');
const inf = document.getElementById('info');
const obs = document.getElementById('obs');

const proj = document.getElementById('textpr');
const th = document.getElementById('texthome');
const info = document.getElementById('information');

const box1 = document.getElementsByClassName('box1')[0];
const box2 = document.getElementsByClassName('box2')[0];

var i = 0;
var c = 0;
var circle;
var list = [
    "Home",
    "Projects",
    "About me"
]
function home() {
    if(i===1){
        reset(project, i, proj);
    }
    if(i===2){
        reset(inf, i, info);
    }
    i = 0;
    trans(hom);
    proj.style.width='0px';
    proj.style.height='0px';
    info.style.width='0px';
    info.style.height='0px';
    th.style.width = '910px';
    th.style.height = '770px';
    proj.style.marginLeft = '0px';
    animfortext(th);
}

function pr() {
    if(i===0){
        reset(hom, i, th);
    }
    if(i===2){
        reset(inf, i, info);
    }
    i = 1;
    trans(project);
    th.style.width='0px';
    th.style.height='0px';
    info.style.width='0px';
    info.style.height='0px';
    proj.style.width = '910px';
    proj.style.height = '770px';
    proj.style.marginLeft = '770px';
    
    animfortext(proj);
}

function abme() {
    if(i===1){
        reset(project, i, proj);
    }
    if(i===0){
        reset(hom, i, th);
    }
    i = 2;
    trans(inf);
    th.style.width='0px';
    th.style.height='0px';
    proj.style.width='0px';
    proj.style.height='0px';
    info.style.width = '910px';
    info.style.height = '770px';
    proj.style.marginLeft = '0px';
    animfortext(info);

}

function trans(name) {
    name.style.width = '5px';
    name.style.height = '5px';
    name.style.borderRadius = '360px';
    if(c===0)name.style.backgroundColor = 'black';
    else {
        name.style.backgroundColor = 'white';
    }
    name.innerHTML = '';
    name.style.display = 'flex';
    name.style.marginBottom = '10px';

}
function reset(name, i, text) {
    name.innerHTML = list[i];
    name.style.backgroundColor = 'transparent';
    name.style.width = '100px';
    name.style.height = '20px';
    animfortext(name);
    attenuation(text);
}

function animfortext(name){
    name.style.animation = 'anim 500ms linear';

    setTimeout(function(){
        name.style.animation = 'none';
    }, 500);
}

function attenuation(name){
    name.style.animation = 'atenuation 500ms linear';

    setTimeout(function(){
        name.style.animation = 'none';
    }, 500);
}

function tolight(){
    const allElements = document.getElementsByTagName("*");
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'white';
    }
    c = 1;
    border.style.border = '1px solid white';
    box1.style.border = '1px solid white';
    box2.style.border = '1px solid white';
    box1.style.backgroundColor = 'white';
    box2.style.backgroundColor = 'transparent';
    if (k===0){
        hom.style.backgroundColor = 'white';
    }
    if (k===1){
        project.style.backgroundColor = 'white';
    }
    if (k===2){
        inf.style.backgroundColor = 'white';
    }
}

function todark(k){
    const allElements = document.getElementsByTagName("*");
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'black';
    }
    c = 0;
    border.style.border = '1px solid black';
    box1.style.border = '1px solid black';
    box2.style.border = '1px solid black';
    box2.style.backgroundColor = 'black';
    box1.style.backgroundColor = 'transparent';
    if (k===0){
        hom.style.backgroundColor = 'black';
    }
    if (k===1){
        project.style.backgroundColor = 'black';
    }
    if (k===2){
        inf.style.backgroundColor = 'black';
    }
}
