import img6 from './photos/delivery.jpg'
function homeContentPage(){
    const element=document.createElement('div');
    element.innerHTML=`

    <i class="cil-pizza"></i> <h2 class="welcome">Wellcome to <span>Fetooh Brothers</span> !</h2>

    <button class="book-btn"> <a href="https://www.facebook.com/fettohWazeer">Order Now !</a></button>

    <img src="./photos/delivery.jpg" alt="" id="delivery-photo">
    
    `

    return element;
}

export default homeContentPage;