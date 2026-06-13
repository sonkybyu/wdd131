
const shoes=[
{id:1,name:'Air Runner',category:'Sports',price:79000, src:'images/Runer.webp'},
{id:2,name:'Urban Walk',category:'Casual',price:65000, src:'images/casual2.jpg'},
{id:3,name:'Executive Leather',category:'Formal',price:95000, src:'images/casual1.webp'},
{id:4,name:'Fashion Glow',category:'Fashion',price:85000,src:'images/fashion.jpg'},
{id:5,name:'Power Sprint',category:'Sports',price:88000,src:'images/sport.jpg'},
{id:6,name:'City Comfort',category:'Casual',price:70000,src:'images/runer.webp'}
];
function displayProducts(items){
const c=document.getElementById('productContainer'); 
if(!c)return;
c.innerHTML='';
items.forEach(s=>c.innerHTML+=`<article class="card">
    <h3>${s.name}</h3>
    <img src="${s.src}" alt="${s.name}"loading="lazy">
    <p>${s.category}</p><p>₦${s.price}</p>
    <button class="cart" data-id="${s.id}">Add to Cart</button> 
    <button class="fav" data-id="${s.id}">❤ Favorite</button></article>`);
    document.querySelectorAll('.cart').forEach(b=>b.addEventListener('click',addCart));
    document.querySelectorAll('.fav').forEach(b=>b.addEventListener('click',addFav));
}
function addCart(){let c=+(localStorage.getItem('cartCount')||0);
    localStorage.setItem('cartCount',++c);updateCounts();
}
function addFav(){
    let f=JSON.parse(localStorage.getItem('favorites')||'[]'); 
    if(!f.includes(this.dataset.id)){
        f.push(this.dataset.id);} 
    localStorage.setItem('favorites',JSON.stringify(f)); 
    updateCounts();}
function updateCounts(){
    const c=document.getElementById('cartCount');
    if(c)c.textContent=localStorage.getItem('cartCount')||0;
    const f=document.getElementById('favCount'); 
    if(f)f.textContent=(JSON.parse(localStorage.getItem('favorites')||'[]')).length;
}
document.addEventListener('DOMContentLoaded',()=>{
updateCounts(); displayProducts(shoes);
document.querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>{
const cat=btn.dataset.category;
displayProducts(cat==='all'?shoes:shoes.filter(x=>x.category===cat));
}));
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();
    const m=document.getElementById('message').value;
    document.getElementById('formMsg').textContent=m.length<10?'Please enter at least 10 characters.':'Message submitted successfully!';});}
});

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
