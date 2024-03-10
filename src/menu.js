function MenuContentPage(){
    console.log("hello from menu");
   const element= document.createElement("div");
    element.innerHTML=`
     <div class="menu-container"> 

          <div class="menu-item">
            <img src="src/photos/kremaAndMksrat.jpg" alt="" id="kremaAndMksrat">
            <h2>Cream & Nuts Pasty</h2>
            <p>A decadent twist on a classic, our Sweet Surprise Pizza is topped with fresh cherries, crunchy nuts, and a dusting of powdered sugar. It's perfect for satisfying your sweet tooth or sharing with friends.</p>
         </div>  

         <hr></hr>

         <div class="menu-item">
         <img src="src/photos/chickenBBQ.jpg" alt="" id="chickenBBQ">
         <h2>Chicken BBQ Pizza</h2>
         <p>Savor the smoky flavors of our BBQ Chicken Bonanza! This pizza is loaded with tender, grilled chicken, smothered in our tangy, house-made BBQ sauce. We top it all off with melty mozzarella cheese, crisp red onions, and a sprinkle of fresh cilantro for a taste explosion in every bite.</p>
          </div>

          <hr></hr>

      <div class="menu-item">
      <img src="src/photos/Nutella.jpg" alt="" id="Nutella">
      <h2>Nutella Pasty</h2>
      <p>Indulge in pure chocolate hazelnut bliss with our Nutella Dream. Flaky, golden puff pastry is filled to bursting with rich, Nutella spread. We dust it with powdered sugar for an extra touch of sweetness and serve it warm for a delightful anytime treat.</p>
          </div> 

          <hr></hr>
          
          <div class="menu-item">
      <img src="src/photos/rockets.jpg" alt="" id="rockets">
      <h2>Nutella & Cheese Rockets</h2>
      <p>A delightful sweet and savory treat, our Nutella and Cheese Pockets are made with golden brown puff pastry filled with a creamy blend of mozzarella cheese and rich Nutella spread.  This is a tempting appetizer or a decadent dessert.</p>
          </div>      
    </div>
    <div id="footer-menu">
    For Complete Menu : <a href="https://www.facebook.com/photo.php?fbid=706308271521645&set=pb.100064274342562.-2207520000&type=3">Here </a>
    </div>
    `
    return element;
}

export default MenuContentPage;