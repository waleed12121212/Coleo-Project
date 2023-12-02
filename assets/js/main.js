let scrollToTop=document.querySelector(".scroll-to-up");
const toTop= 300;
let demoTabContainer=document.querySelector(".demo-tabs");
let demoTabShop=document.querySelector(".demo-tabs .shop");
let demoTabPhoto=document.querySelector(".demo-tabs .photo");
let demoTabHead=document.querySelector(".demo-tabs .head");
let textShop=document.querySelector(".demo-tabs .textS");
let textPhoto=document.querySelector(".demo-tabs .textP");
let textHead=document.querySelector(".demo-tabs .textH");
const loading=document.querySelector(".loading");
window.addEventListener("scroll",function(e){
    if(window.scrollY >= toTop)
    {
        scrollToTop.classList.remove('opacity-0','invisible');
    }
    else{
        scrollToTop.classList.add('opacity-0','invisible');
    }
});

scrollToTop.addEventListener("click",function(e){
    window.scroll({
        top : 0,
        behavior :"smooth"
    });
});

demoTabShop.addEventListener("mouseenter",function(e){
    demoTabShop.classList.remove('w-60');
    demoTabShop.classList.add('w-80');
    textShop.classList.remove('d-none','opacity-0');
});
demoTabShop.addEventListener("mouseleave",function(e){
    demoTabShop.classList.remove('w-80');
    demoTabShop.classList.add('w-60');
    textShop.classList.add('d-none','opacity-0');
});
demoTabPhoto.addEventListener("mouseenter",function(e){
    demoTabPhoto.classList.remove('w-60');
    demoTabPhoto.classList.add('w-80');
    textPhoto.classList.remove('d-none','opacity-0');
});
demoTabPhoto.addEventListener("mouseleave",function(e){
    demoTabPhoto.classList.remove('w-80');
    demoTabPhoto.classList.add('w-60');
    textPhoto.classList.add('d-none','opacity-0');
});
demoTabHead.addEventListener("mouseenter",function(e){
    demoTabHead.classList.remove('w-60');
    demoTabHead.classList.add('w-80');
    textHead.classList.remove('d-none','opacity-0');
    behavior:'smooth'
});
demoTabHead.addEventListener("mouseleave",function(e){
    demoTabHead.classList.remove('w-80');
    demoTabHead.classList.add('w-60');
    textHead.classList.add('d-none','opacity-0');
});
demoTabHead.addEventListener("click",function(e){
    demoTabContainer.classList.add('d-none'); 
});
function headDemoTab(){
    demoTabContainer.classList.add('transition:all 0.4s !important');
    demoTabContainer.classList.add('d-none');
}
//================================================================
window.addEventListener('load',function(){
    setTimeout(function(){
        loading.classList.add('opacity-0','invisible');
        document.body.style.overflow='auto';
    },1500);
});