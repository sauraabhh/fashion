var c1 = document.querySelector("#circle")
var icon  = document.querySelector("#circle i")
c1.addEventListener("mouseenter",function(){
    c1.style.scale = 2.5;
    icon.style.opacity = 1;
    
})
c1.addEventListener("mouseleave",function(){
    c1.style.scale = 1;
    icon.style.opacity = 0;
})


gsap.from("#page2 h1,h2",{
    y : 100,
    stagger : 0.3,
    opacity : 0,
    delay : 1,
    scrollTrigger : {
        start :"top 40%",
        end : "top 0%",
        scroller : "body",
        trigger : "#page2",
        // markers : true,
        scrub : true,
    }
})

var swiper = new Swiper(".mySwiper", {});


var circ1 = document.querySelector("#gola1")
var swip = document.querySelector(".swiper-wrapper,#one")

swip.addEventListener("mousemove",function(dets){
    circ1.style.left = dets.x + "px"
    circ1.style.top = dets.y +"px"
})


var circ22 = document.querySelector("#gola5")
var swip1 = document.querySelector("#one1")

swip1.addEventListener("mousemove",function(dets){
    circ22.style.left = dets.x + "px"
    circ22.style.top = dets.y +"px"
    circ22.style.opacity = 1
})

var circ23 = document.querySelector("#gola2")
var swip3 = document.querySelector("#one2")

swip3.addEventListener("mousemove",function(dets){
    circ23.style.left = dets.x + "px"
    circ23.style.top = dets.y +"px"
    circ23.style.opacity = 1
})

var circ24 = document.querySelector("#gola3")
var swip2 = document.querySelector("#one3")
var head = document.querySelector("#gola3 h1")
var contain = document.querySelector("#rightt")

swip2.addEventListener("mousemove",function(dets){
    circ24.style.left = dets.x + "px"
    circ24.style.top = dets.y +"px"
    circ24.style.opacity = 1
})
contain.addEventListener("mouseenter",function(dets){
    circ24.style.backgroundColor = " #BB8D8D"
    circ24.style.opacity = 1 
})
contain.addEventListener("mouseleave",function(dets){
    circ24.style.backgroundColor = " #white"
    circ24.style.opacity = 1 

})

var circ25 = document.querySelector("#gola4")
var swip22 = document.querySelector("#one4")

swip22.addEventListener("mousemove",function(dets){
    circ25.style.left = dets.x + "px"
    circ25.style.top = dets.y +"px"
    circ25.style.opacity = 1
})


gsap.from("#sir h1,#middle h1,#image",{
    x :-100,
    delay : .5,
    opacity : 0,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page3",
        // markers : true,
        start : "top 60%",
        end : "top 0"
    }
})

gsap.from("#page4 h1,#h2,#vid,#textt,#circ2",{
    x :200,
    opacity : 0,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page4",
        // markers : true,
        start : "top 30%",
        end : "top 0"
    }
})






var circ2 = document.querySelector("#circ2")
var vid = document.querySelector("#vid video")

vid.addEventListener("mousemove",function(dets){
    circ2.style.left = dets.x + "px"
    circ2.style.top = dets.y +"px"
})
vid.addEventListener("mouseleave",function(dets){
    // circ2.style.transition = "all ease-in 0.1s"
    circ2.style.left = "30%"
    circ2.style.top = "25%"
})







gsap.from("#second h1",{
    opacity : 0,
    transform : "translateX(50%)",
    scrollTrigger : {
        scroller : "body",
        trigger : "#page7",
        // markers : true,
        start : "top 35%",
        end : "top 0"
    }
})
gsap.from("#third h1",{
    opacity : 0,
    transform : "translateX(-50%)",
    scrollTrigger : {
        scroller : "body",
        trigger : "#page7",
        // markers : true,
        start : "top 35%",
        end : "top 0"
    }
})
gsap.from("#first h1",{
    opacity : 0,
    y : 100,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page7",
        // markers : true,
        start : "top 35%",
        end : "top 0"
    }
})
gsap.from("#fourth h1",{
    opacity : 0,
    y : 100,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page7",
        // markers : true,
        start : "top -5%",
        end : "top 0"
    }
})


gsap.from("#r1 img",{
    opacity : 0,
    y : 100,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page8",
        // markers : true,
        start : "top 20%",
        end : "top 0"
    }
})

gsap.from("#r2 img",{
    opacity : 0,
    y : 100,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page8",
        // markers : true,
        start : "top 12%",
        end : "top 0"
    }
})


gsap.from("#r3 img",{
    opacity : 0,
    y : 100,
    scrollTrigger : {
        scroller : "body",
        trigger : "#page8",
        // markers : true,
        start : "top 7%",
        end : "top 0"
    }
})


var elem = document.querySelectorAll(".elem");

elem.forEach(function(e){
    var img = e.childNodes[3]

    e.addEventListener("mouseenter", function(){
        gsap.to(img, {
            transform: 'scale(1)',
            opacity: 1
        })
    })
    e.addEventListener("mouseleave", function(){
        gsap.to(img, {
            transform: 'scale(0)',
            opacity: 0
        })
    })
    e.addEventListener("mousemove", function(dets){
        gsap.to(img, {
            left:dets.x
        })
    })
})