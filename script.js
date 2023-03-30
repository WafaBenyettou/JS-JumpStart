let typed = new Typed(".text",{
    strings: ['ReactJS','BrainJS','VueJS','NodeJS','Frameworks', 'Web Dev','Android'],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})


new FlipDown(1679999416, {
  theme:"dark",
}).start().ifEnded(()=>{
  console.log("the countdown has ended!");
});




/**speaker */

const speakers = [
  {
      id:1,
      img:"images/speaker01.png",
      name:"{ Chahine BENDJEDDOU}",
      job:"Introduction to JavaScript",
   
      text:"Full stack web developer, Software engineer student",

  },
  {
      id:2,
      img:"images/speaker02.png",
      name:"{ Afaf KELAI }",
      job:"JS in Backend development",
   
      text:"Software engineer @Lasting dynamics, FullStack JS mentor and Instructor, GDG organizer and WTM Ambassador .", 

  },
  {
      id:3,
      img:"images/speaker03.png",
      name:"{ Comming soon.. }",
      job:"Comming soon..",
   
      text:"Comming soon..     ",

  },
  {
      id:4,
      img:"images/speaker03.png",
      name:"{ Comming soon.. }",
      job:"Comming soon..",
   
      text:"Comming soon..                                         ",

  },
];


//selection 
const speaker = document.getElementById('speaker');
const job = document.getElementById('job');
const info = document.getElementById('info');
const Image = document.getElementById('img');

const rightbutton = document.querySelector(".right");
const leftbutton = document.querySelector(".left");



let current_item =0;

//logic 
window.addEventListener('DOMContentLoaded', function(){
  speakerPage(current_item);
});

//avoid repeat
function speakerPage(revp){
   const item = speakers[revp];
   Image.src=item.img;
   speaker.textContent=item.name;
   job.textContent=item.job;
   info.textContent=item.text;
}
//moving 
rightbutton.addEventListener('click', function(){
  current_item++;
  if(current_item> speakers.length-1){
      current_item=0;
  }
  speakerPage(current_item);
});

leftbutton.addEventListener('click', function(){
  current_item--;
  if(current_item < 0){
      current_item=speakers.length-1;
  }
  speakerPage(current_item);
});




let li = document.querySelectorAll(".faq-text li");
for (let i=0; i<li.length; i++){
  li[i].addEventListener("click", (e)=>{
    let clickedLi;

    if(e.target.classList.contains("question-arrow")){
      clickedLi = e.target.parentElement;

    }
    else{
      clickedLi = e.target.parentElement.parentElement;

    }
    clickedLi.classList.toggle("showAnswer")
    console.log(e.target)
  })
}
