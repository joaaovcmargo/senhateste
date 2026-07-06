const password=document.getElementById("password");

const generate=document.getElementById("generate");

const copy=document.getElementById("copy");

const length=document.getElementById("length");

const lengthText=document.getElementById("lengthText");

const suggestions=document.getElementById("suggestions");

const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lower="abcdefghijklmnopqrstuvwxyz";

const numbers="0123456789";

const symbols="!@#$%&*()_-+=?><{}[]";

length.oninput=()=>{

lengthText.innerHTML="Tamanho: "+length.value;

}

function createPassword(){

let chars="";

if(uppercase.checked)chars+=upper;
if(lowercase.checked)chars+=lower;
if(numbers.checked)chars+=numbers;
if(symbols.checked)chars+=symbols;

let pass="";

for(let i=0;i<length.value;i++){

pass+=chars[Math.floor(Math.random()*chars.length)];

}

password.value=pass;

strength(pass);

suggest();

}

generate.onclick=createPassword;

copy.onclick=()=>{

navigator.clipboard.writeText(password.value);

alert("Senha copiada!");

}

function strength(pass){

let score=0;

if(pass.length>=12)score++;

if(/[A-Z]/.test(pass))score++;

if(/[a-z]/.test(pass))score++;

if(/[0-9]/.test(pass))score++;

if(/[^A-Za-z0-9]/.test(pass))score++;

const bar=document.getElementById("bar");

const text=document.getElementById("strengthText");

if(score<=2){

bar.style.width="25%";

bar.style.background="red";

text.innerHTML="Fraca";

}

else if(score==3){

bar.style.width="50%";

bar.style.background="orange";

text.innerHTML="Média";

}

else if(score==4){

bar.style.width="75%";

bar.style.background="gold";

text.innerHTML="Forte";

}

else{

bar.style.width="100%";

bar.style.background="limegreen";

text.innerHTML="Muito Forte";

}

}

function randomStrong(){

const chars=upper+lower+numbers+symbols;

let pass="";

for(let i=0;i<20;i++){

pass+=chars[Math.floor(Math.random()*chars.length)];

}

return pass;

}

function suggest(){

suggestions.innerHTML="";

for(let i=0;i<5;i++){

let div=document.createElement("div");

div.className="suggestion";

div.innerHTML=randomStrong();

div.onclick=()=>{

password.value=div.innerHTML;

};

suggestions.appendChild(div);

}

}

const language=document.getElementById("language");

language.onchange=()=>{

const lang=language.value;

if(lang=="pt"){

title.innerHTML="🔐 Gerador de Senhas";

generate.innerHTML="Gerar Senha";

suggestionTitle.innerHTML="Sugestões Fortes";

upperText.innerHTML="Letras Maiúsculas";

lowerText.innerHTML="Letras Minúsculas";

numberText.innerHTML="Números";

symbolText.innerHTML="Símbolos";

}

if(lang=="en"){

title.innerHTML="🔐 Password Generator";

generate.innerHTML="Generate Password";

suggestionTitle.innerHTML="Strong Suggestions";

upperText.innerHTML="Uppercase";

lowerText.innerHTML="Lowercase";

numberText.innerHTML="Numbers";

symbolText.innerHTML="Symbols";

}

if(lang=="es"){

title.innerHTML="🔐 Generador de Contraseñas";

generate.innerHTML="Generar";

suggestionTitle.innerHTML="Contraseñas Seguras";

upperText.innerHTML="Mayúsculas";

lowerText.innerHTML="Minúsculas";

numberText.innerHTML="Números";

symbolText.innerHTML="Símbolos";

}

};

createPassword();