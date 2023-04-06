
      const hamburger=document.querySelector('.hamburger');
     const navbar=document.querySelector('ul');

     hamburger.addEventListener('click',()=>{
        navbar.classList.toggle('slide');
     })



   //   slider
   var mainImg=document.getElementById("MainImg");
   var smallImg=document.getElementsByClassName("Small");
    
   smallImg[0].onclick=function(){
     mainImg.src=smallImg[0].src;
   }
   smallImg[1].onclick=function(){
     mainImg.src=smallImg[1].src;
   }
   smallImg[2].onclick=function(){
     mainImg.src=smallImg[2].src;
   }
   smallImg[3].onclick=function(){
     mainImg.src=smallImg[3].src;
   }
   console.log('smallImg');
   console.log('mainImg');
   