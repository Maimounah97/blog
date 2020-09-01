var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Start addin (click) events to scroll to specific element in the page 

const navList = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');
// create for loop to adding the (click) event on each element of navList

for(let i = 0; i < navList.length ; i++){
    // store the id of section 
   // let secId = "#section"+(i+1);
    //let sectionElem = document.querySelector(sections[i+1]);
    // using getBoundingClientRect() method to returns the size of the section and its position relative to the viewport.
    let secPosition = sections[i+1].getBoundingClientRect();

    navList[i].addEventListener('click', function () {

       window.scrollTo({
         // usind secPosition.y to returns the top of section
         top : secPosition.y ,
         behavior : 'smooth'

    }) ;   
        
    });
    
}

// End addin (click) events

/*const navList = document.querySelectorAll('li');
const a =document.querySelectorAll('section');
let secPosition = a[1].getBoundingClientRect();
navList[0].addEventListener('click', function () {
  //console.log("Hello world!");

  window.scrollTo({
    // usind secPosition.y to returns the top of section
    top : secPosition.y ,
    behavior : 'smooth'
    

}) ;   
   
});*/