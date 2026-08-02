/*=====================================================
      Triveni Super Speciality Clinic
      Author : Sankalp Raj Singh, Aayushman Srivastav
      Version : 1.0
=====================================================*/


/*==============================
        AOS Animation
===============================*/

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});


/*==============================
      Sticky Header Shadow
===============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",function(){

    if(window.scrollY > 60){

        header.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";

    }
    else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

});


/*==============================
      Active Navigation Link
===============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*==============================
      Counter Animation
===============================*/

const counters=document.querySelectorAll(".stat-card h2");

const speed=100;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const updateCount=()=>{

const target=parseInt(counter.innerText);

const count=+counter.getAttribute("data-count") || 0;

const increment=Math.ceil(target/speed);

if(count<target){

counter.setAttribute("data-count",count+increment);

counter.innerText=count+increment;

setTimeout(updateCount,20);

}
else{

counter.innerText=target+"+";

}

}

updateCount();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});


/*==============================
      Scroll To Top Button
===============================*/

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.className="scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.classList.add("show");

}
else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==============================
      Smooth Scroll
===============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==============================
      Hero Image Hover Effect
===============================*/

const doctors=document.querySelectorAll(".doctor-circle");

doctors.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-20px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


/*==============================
      Floating Animation
===============================*/

setInterval(()=>{

doctors.forEach((doctor,index)=>{

doctor.style.transition="all .6s";

doctor.style.transform=`translateY(${Math.sin(Date.now()/600+index)*5}px)`;

});

},100);


/*==============================
      Loading Animation
===============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*==============================
      Console Message
===============================*/

console.log("%c🏥 Triveni Super Speciality Clinic","color:#D4AF37;font-size:24px;font-weight:bold");

console.log("%cWebsite Developed By Sankalp Raj Singh","color:#07294D;font-size:16px;");
