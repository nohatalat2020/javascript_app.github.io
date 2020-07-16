/* global,console,let,var */


//check if there's localstorage color option

let mainColors =localStorage.getItem("color_option");



if (mainColors !== null){
    
        document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
    
    
    //remove active class from all colors list items
    
    document.querySelectorAll(".colors-list li").forEach(element=>{
        
        element.classList.remove("active");
        
        //add active class on element with data-color === local storage item
        
        if(element.dataset.color===mainColors){
            
            //add active class
            
            element.classList.add("active");
        }
    });
};

    //Random background option

    let backgroundOption=true;

    // variable to controll interval

    let backgroundInterval;


//check local storage random background

let backgroundLocalItem = localStorage.getItem("background_option");

//check if local storage s not empty

if(backgroundLocalItem !== null){
    
    if(backgroundLocalItem ==='true'){
        
        backgroundOption = true;
    }else{
        
         backgroundOption = false;

    }
    
    //remove active class from all spans
    
    document.querySelectorAll(".random-backgrounds span").forEach(element =>{
        
        element.classList.remove("active");
    });
    
    if(backgroundLocalItem === 'true'){
        
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }else{
        
        document.querySelector(".random-backgrounds .no").classList.add("active");

    }
}


//Toggle spin class on icon

document.querySelector(".toggle-setting .fa-gear").onclick=function(){
    
    //toggle class fa spin for rotation on self
    
    this.classList.toggle("fa-spin");
    
    
    
    //Toggle class open on main box
    
    document.querySelector(".setting-box").classList.toggle("open");
    
};

//switch colors
const colorsLi=document.querySelectorAll(".colors-list li");

//loop on all list items

colorsLi.forEach(li=>{
    
    // click on every list item 
    
    li.addEventListener("click",(e)=>{
        
            //set color on root

        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);


            //set color on localstorage
        
        localStorage.setItem("color_option",e.target.dataset.color);

            //remove actine class from all children
        
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            
            element.classList.remove("active");
        });
        
      //  add active class on self
        
        e.target.classList.add("active");
        
       
        
    }); 
});




//switch random backgrounds

const randomBackgroundsElement=document.querySelectorAll(".random-backgrounds span");

//loop on all list items

randomBackgroundsElement.forEach(span=>{
    
    // click on every list item 
    
    span.addEventListener("click",(e)=>{
        
           
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            
            element.classList.remove("active");
        });
        
      //  add active class on self
        
        e.target.classList.add("active");
        
         if(e.target.dataset.background==='yes'){
            
            backgroundOption=true;
             
            randomizeImgs();

            localStorage.setItem("background_option",true);
             
        }else{
            
            backgroundOption=false;
            
            clearInterval(backgroundInterval);
            
             localStorage.setItem("background_option",false);

 
        }
    }); 
});







    //Select Landing Page Element
    let landingPage=document.querySelector('.landing-page');

    //Get Array Of Images
    let imagsArray=["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg","b6.jpg",];



    //function to randomize images

    function randomizeImgs(){
    
    if( backgroundOption === true ){
        
        

   backgroundInterval  = setInterval( () =>{
    
    //get random number
    
    let randomNumber=Math.floor(Math.random()*imagsArray.length);
    
    //change background images url
    landingPage.style.backgroundImage='url("images/'+imagsArray[randomNumber]+'")';
	   
	   
	   const mq = window.matchMedia( "(max-width: 768px)" );
	   const mqSmall = window.matchMedia( "(max-width: 576px)" );

	   if( mq.matches){
			
			 //change background images url
    landingPage.style.backgroundImage='url("images/b7.jpg")';
		   
		    
	  

		}
	   
	   
	   if( mqSmall.matches){
			
			 //change background images url
    landingPage.style.backgroundImage='url("images/b8.jpg")';
		   
		    
	  

		}
	   
    
    
} ,3000);


        
    };
    
};

 randomizeImgs();


//skills animation code


//select skills selector

	 let ourSkills = document.querySelector(".skills");

	 window.onscroll = function(){
	 
	 
	 // skills off set top
	 
	 let skillsOffsetTop = ourSkills.offsetTop;
	 
	 //skills outer height
	 
	 let skillsOuterHeight = ourSkills.offsetHeight;
	 

	 // windo height
	 
	 let windowHeight = this.innerHeight;
	 

	 // scroll top window
	 
	 let windowScrollTop = this.pageYOffset;
	 	 	 	 

	 
	  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
		 
		 
		 let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
		 
		 allSkills.forEach(skill =>{
			 
			 skill.style.width = skill.dataset.progress;
		 });
		 
	                                     
	 
	 
 };
	 
	 };
	 




//pop up gallary

//create popup with the image

let ourGallary = document.querySelectorAll(".gallary img");


ourGallary.forEach(img => {
	
	img.addEventListener('click',(e) =>{
		
		//create overlay element
		
		let overlay = document.createElement("div");
		
		//add class to overlay
		
		overlay.className = 'popup-overlay';
		
		//append overlay to the body
		
		document.body.appendChild(overlay);
		
		//create popup box
		
		let popupBox = document.createElement("div");
		
		//add classto the pop up box
		
		popupBox.className = 'popup-box';
		
		
		if(img.alt !== null){
			
			//create heading
			
			let imgHeading = document.createElement("h3");
			
			//create text for heading
			
			let imgText = document.createTextNode(img.alt);
			
			//append text to the heading
			
			imgHeading.appendChild(imgText);
			
			//append heading to the popup box
			
			popupBox.appendChild(imgHeading);
		
		//create the image
		
		let popupImage = document.createElement("img");
		
		//set image source
		popupImage.src = img.src;
		
		//add image to popup box
		
		popupBox.appendChild(popupImage);
		
		//append the popup box o body
		
		document.body.appendChild(popupBox);
			
			
			//create close button
			
			let closeButton = document.createElement("span");
			
			//create close button text
			
		let closeButtonText = document.createTextNode("x");
			
			//append text to close button
			
			closeButton.appendChild(closeButtonText);
			
			//add class to close button
			
			closeButton.className = 'close-button';
			
			//append close button to popup
			
			popupBox.appendChild(closeButton);
			
			
		
		}
	});
});
	 
	 
	 
           //close popup
			
			document.addEventListener("click",function(e){
				
				
				if(e.target.className == 'close-button'){
					
					//remove the current popup
				
				e.target.parentNode.remove();
					
					//remove overlay
				
				document.querySelector(".popup-overlay").remove();
				
				}
						
				
			});	 





// tooltip  section 

//Select all bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet =>{

		bullet.addEventListener('click',(e)=>{
			document.querySelector(e.target.dataset.section).scrollIntoView({
				
				behavior:'smooth'
			});
		})

});



//SELECT ALL LINKS

const allLinks = document.querySelectorAll(".links a");

allLinks.forEach(link =>{

	
	
		link.addEventListener('click',(e)=>{
			
			e.preventDefault();
			
			document.querySelector(e.target.dataset.section).scrollIntoView({
				
				behavior:'smooth'
			});
		})

});




// bullets show & hide

let bulletsSpan  = document.querySelectorAll (".bullets-option span");

let bulletsContainer  =  document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

  if(bulletLocalItem !== null){
	  
	 bulletsSpan.forEach(span =>{
		 
		 span.classList.remove("active");
	 });
	  
	  if(bulletLocalItem === 'block'){
		  
		 bulletsContainer.style.display = 'block';
		  
		  document.querySelector(".bullets-option .yes").classList.add("active");
  
	  }else{
		  
		   bulletsContainer.style.display = 'none';
		  
		  
        document.querySelector(".bullets-option .no").classList.add("active");
	  }
	  
  }
   
   bulletsSpan.forEach (span => {
		 
		 span.addEventListener ("click",(e)=>{
			 
			 if(span.dataset.display === 'show'){
				 
				 bulletsContainer.style.display = 'block';
				 
				 localStorage.setItem("bullets-option",'block')
				 
			 }else{
				 
				  bulletsContainer.style.display = 'none';
				 
				  localStorage.setItem("bullets-option",'none')


			 }
			 
			  e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            
            element.classList.remove("active");
        });
        
      //  add active class on self
        
        e.target.classList.add("active");
        
		 });
		 
	 });



//Reset Button


document.querySelector(".reset-option").onclick = function (){
	
	// if there is no important  items 
	
	//localStorage.clear();
	
	// if there is important items 
	
	localStorage.removeItem("color_option");
	localStorage.removeItem("background_option");
	localStorage.removeItem("bullets_option");
	
	
	
	//reload page
	
	window.location.reload();
};



// Toggle Menu Button

let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");



  toggleBtn.onclick =function(e){
	  
	  
	  //stop propagation
	  
	  e.stopPropagation();
	  
	  // toggle class "menu-active" on button 
	  
	  this.classList.toggle("menu-active");
	  
	  
	  //toggle class menu open
	  
	  tLinks.classList.toggle("open");
  };

//click anywhere outside menu and toggle button

document.addEventListener("click",(e) =>{
	
	
	if(e.target !== toggleBtn && e.target !== tLinks ){
		
		
		if(tLinks.classList.contains("open")){
			
			
			 // toggle class "menu-active" on button 
	  
	  toggleBtn.classList.toggle("menu-active");
	  
	  
	  //toggle class menu open
	  
	  tLinks.classList.toggle("open");
		}
	}
});


//stop propagation on menu

tLinks.onclick = function (e){
	
	  e.stopPropagation();
}




