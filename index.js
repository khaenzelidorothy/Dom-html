const body =document.body;
body.style.backgroundColor ='silver'
body.style.fontFamily ='poppins'
body.style.fontSize ='0.2in'


const title =document.getElementById('title');
title.style.color ='green'
title.style.fontSize ='0.4in'
title.style.marginTop ='18%'
title.style.marginLeft ='11%'
// heading.style.color ='#004526'

const heading =document.getElementById('heading');
heading.style.textTransform ='uppercase'
heading.style.textAlign ='center'
heading.style.fontSize ='0.4in'
heading.style.color ='#004526'
heading.style.marginTop='12%'

const headings =document.getElementById('headings');
headings.style.textTransform ='uppercase'
headings.style.textAlign ='center'
headings.style.fontSize ='0.4in'
headings.style.color ='#004526'

const fruitList =document.getElementById('fruList')
const newLi =document.createElement('li');
const addList = document.createTextNode('Apple');
newLi.appendChild(addList);
fruitList.appendChild(newLi);


const vegetableList =document.getElementById('vegList')
const vegLists =document.createElement('li')
const addVeg =document.createTextNode('Cabbages')
vegLists.appendChild(addVeg);
vegetableList.appendChild(vegLists);

vegetableList.style.display = 'flex';
vegetableList.style.gap = '55px';
vegetableList.style.marginBottom = '16px';
vegetableList.style.flexDirection = 'row';
vegetableList.style.justifyContent = 'center';


fruitList.style.display = 'flex';
fruitList.style.gap = '55px';
fruitList.style.marginBottom = '16px';
fruitList.style.flexDirection = 'row';
fruitList.style.justifyContent = 'center';

const images =[
  'images/mango-removebg-preview.png',
  'images/bananas-removebg-preview.png',
  'images/melon-removebg-preview.png',
  'images/apple-removebg-preview.png',
  'images/onions-removebg-preview.png',
  'images/tomatos-removebg-preview.png',
  'images/kales-removebg-preview.png',
  'images/cabbages.jpg'
]
const generateLi =document.querySelectorAll('ul li');
generateLi.forEach((li,index) =>{
    li.style.listStyleType ='none';
    const label =li.textContent;

    li.innerHTML ='';

    const flexList =document.createElement('div');
    flexList.className ='flex-list';

    const span =document.createElement('span');
    span.textContent =label;
    const img = document.createElement('img');
    img.src = images[index];
    img.classList.add('list-img');

     if (index === 2) {
    img.style.width = '67%';
    img.style.height = '67%';
  }
     img.style.marginRight = '10px';
    img.style.verticalAlign = 'middle';
    img.style.borderRadius = '10%';
     flexList.appendChild(img);
     flexList.appendChild(span);
     li.appendChild(flexList);
})

const navList = document.querySelectorAll('a');
navList.forEach((list) =>{
  list.style.textDecoration ='none'
  list.style.color ='green'
  list.style.marginRight='12%'
})

const navigation = document.getElementById('navigation')
navigation.style.marginLeft ='52%'
navigation.style.marginTop ='-2%'
navigation.style.fontSize ='0.2in'
// navigation.style.gap='2px'

const image =document.createElement('img')
const anImage =document.getElementById('image')
image.src ='images/basket-removebg-preview.png'
anImage.style.textAlign ='center'
anImage.style.marginTop='-15%'
anImage.style.marginLeft='40%'
anImage.appendChild(image)

const logo =document.getElementById('logo')
logo.style.marginLeft ='7%'
logo.style.paddingTop ='2%'

const paragraph =document.getElementById('paragraph')
paragraph.style.marginLeft ='11%'

const button = document.getElementById('button')
const aButton =document.createElement('button')
aButton.textContent = 'order now'
button.appendChild(aButton)
aButton.style.padding = '15px 29px';          
aButton.style.fontSize = '1rem';            
aButton.style.marginLeft= '19%';               
aButton.style.border = 'none';                
aButton.style.borderRadius = '18px';          
aButton.style.cursor = 'pointer';           
aButton.style.boxShadow = '0 2px 8px #ccc';   


