
// HOME carousel

$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// NavBar

window.addEventListener('scroll' , function(){
    let navbar = document.getElementById("navbar");
    // Toggles fixed class in NavBar on Scroll 
    navbar.classList.toggle('fixed',this.window.scrollY > 10)
})

// Nav Buttons
// ==================================================== 

let menuBtn = document.querySelector(".menu-btn");
let searchBtn = document.querySelector(".searchbtn");
let cartBtn = document.querySelector(".cartbtn");
let darkBtn = document.querySelector(".darkbtn");
let signImg = document.getElementById("signImg");




menuBtn.onclick = function(){
    // Toggles Active Class In nav-items Form On Click 
    document.getElementById("nav-items").classList.toggle('active');

    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
}





// Changes Icon On click 
// ------------------------------------------------------


searchBtn.onclick = function(){
    // Toggles Active Class In Search Form On Click 
    document.getElementById("search-form").classList.toggle('active');

    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}






cartBtn.onclick = function(){
    // Toggles Active Class In Cart On Click 
    document.getElementById("cart").classList.toggle('active');

    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }
    else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}


darkBtn.onclick = function(){
    // Toggles Active Class In Cart On Click 
    document.body.classList.toggle('dark-mode');

    // If body contains Dark Mode class 

    if(document.body.classList.contains('dark-mode')){

        // changes Dark Mode Button Icon to Sun 

        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");

        // Changes Sign Image for Dark Backgroun Mode 

        signImg.src = '/Images/sign/sign-dark.png';
    }
            // changes Dark Mode Button Icon to Moon 

    else{
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon");
        signImg.src = '/Images/sign/sign-light.png';

    }
}

// Menu Section 

let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){

    // If Clicked Tab Does Not Contains Active Class 

    if(e.target.classList.contains('menu-tabs-item') && !e.target.classList.contains('active')){

        // Get Data Attributes 
        const target = e.target.getAttribute("data-target");

        // remove Active Class From Active  Tab 
        menuTabs.querySelector('.active').classList.remove('active');
        // Add Active Class From Clicked Tab 
        e.target.classList.add("active");
        
        let menuSection = document.querySelector(".menu-section");

        // removes show class from active tab content 
        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");

        // Add show class from Active tab 
        menuSection.querySelector(target).classList.add("show");
    }
    else{
        return // Return Nothing 
    }
})







// Events carousel

$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// Team carousel

$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})





// Review carousel

$('.review-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



// Blog carousel

$('.blog-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})