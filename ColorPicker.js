var colors = ["blue","green","yellow","#00b894","#00cec9","#0984e3","#6c5ce7","#b2bec3","#fdcb6e","#e17055",
"#d63031","#e84393","#e84393","#2d3436","#130f40","#4834d4","#130f40","#535c68"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
 btn.addEventListener('click', function(){
const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
 });
 function getRandomNumber(){
     return Math.floor(Math.random()*colors.length);
 }