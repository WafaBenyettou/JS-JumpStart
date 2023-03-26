let typed = new Typed(".text",{
    strings: ['ReactJS','BrainJS','VuJS','NodeJS','Frameworks', 'Web Dev','Android'],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})


new FlipDown(1681169192, {
  theme:"dark",
}).start().ifEnded(()=>{
  console.log("the countdown has ended!");
});




/**speaker */

const speakers = [
  {
      id:1,
      img:"images/speaker.png",
      name:"{ Wafa }",
      job:"JS Workflows",
   
      text:"Full stack web developer ex-ITC lead and a freelancer chez Ooredoo",

  },
  {
      id:2,
      img:"images/speaker.png",
      name:"{ Wafa2 }",
      job:"House wife2",
   
      text:"Hello World!This is my string", 

  },
  {
      id:3,
      img:"images/speaker.png",
      name:"{ Wafa3 }",
      job:"House wife",
   
      text:"great opportunity for anyone who wants to start                       ",

  },
  {
      id:4,
      img:"images/speaker.png",
      name:"{ Wafa4 }",
      job:"House wife",
   
      text:"Ya khawti ana 3yit mn 9raya                                            ",

  },
];


//selection 
const speaker = document.getElementById('speaker');
const job = document.getElementById('job');
const info = document.getElementById('info');

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
