console.log("ramdan kareem");
import './style.css';
import MenuContentPage from './menu';
import homeContentPage from './home';
import contactContentPage from './contact';
import oldPhoto from './photos/oldPhoto.jpg'
import rockets from './photos/rockets.jpg'
import kremaAndMksrat from '/src/photos/kremaAndMksrat.jpg'


const container=document.querySelector('#content');
const navButtons=document.querySelectorAll('nav button');

// navButtons.forEach(btn => {
//     btn.addEventListener('click',)
// });

// container.appendChild(MenuContentPage());
// container.appendChild(homeContentPage())
container.appendChild(contactContentPage());