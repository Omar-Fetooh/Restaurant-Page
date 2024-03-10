function contactContentPage(){
    const element=document.createElement('div');
    console.log("Hello from contact page");
    element.innerHTML=`
    <h1 id="Contact">Contact Us !</h1>
    <div class="footer-container">
   
    <div class="openings">
       <h2> Opening </h2> <span>every day from 2pm To 2 Am</span>
    </div>

    <hr></hr>
    <div>
    <h2>Address: </h2><span>Egypt,Damietta,wazeer Street</span> 

     <div>
     <hr></hr>
    
     <div>
    <a href="https://www.facebook.com/fettohWazeer"> <h2>FacebookPage </h2></a>

     </div>
    
</div>
</div>
</div>
<h2 class="location">Our Location</h2>
<div><img src="src/photos/Untitled design.png" alt=""></div>


    `

    return element;
}

export default contactContentPage;
  // <div class="info">
    // <img src="/home/omarfetooh/restaurant-page/src/photos/Untitled design.png" alt="location">