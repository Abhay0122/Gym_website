// loader:::

var preloader = document.querySelector(".pre_loader");

setTimeout(function webloader() {
    preloader.style.display = 'none';
}, 4000)



///::::::----left-right-scrolling_coading_start:::::::----
const slide_end = document.querySelector(".slide_3");
const scrollElementRight = document.querySelector(".scroll_element_right");

const scrollRight = () => {
    slide_end.scrollIntoView({ behavior: "smooth"});
};

scrollElementRight.addEventListener("click", scrollRight)


const slide_start = document.querySelector(".slide_1");
const scrollElementleft = document.querySelector(".scroll_element_left");

const scrollLeft = () => {
    slide_start.scrollIntoView({ behavior: "smooth"});
};

scrollElementleft.addEventListener("click", scrollLeft)

///::::::----scrolltotop_coading_start:::::::----

const landing_page = document.querySelector("#main");
const scrollToTop = document.querySelector(".scrollToTop");

const scrollTop = () => {
    landing_page.scrollIntoView({ behavior: "smooth"});
};

scrollToTop.addEventListener("click", scrollTop);


///::::::----menu_overlay_coading_start:::::::----

const menu = document.querySelector("#hemburger_menu");
const overlay = document.querySelector(".menu_overlay");
const cross = document.querySelector("#cross");


menu.addEventListener("click", function(){
    overlay.style.transform = "translatex(0)";
})
cross.addEventListener("click", function(){
    overlay.style.transform = "translatex(100%)";
})


///::::::----search_bar_coading_start:::::::----

const search_icon = document.querySelector("#search_button");
const search_bar = document.querySelector(".search_bar");

var val = 0;
search_icon.addEventListener("click", function(){
    if(val===0){
        search_bar.style.transform = "translatex(0)";
        val = 1;
    }
    else{
        search_bar.style.transform = "translatex(140%)";
        val = 0;
    }
})


///::::::----cursor_custimize_coading_start:::::::----

const cursor = document.querySelector("#cursor");


document.addEventListener("mousemove", function(move){
    // console.log(move.clientY)
    // console.log(move.clientX);
    // console.log(move)
    
    var x = move.clientX
    var y = move.clientY
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

