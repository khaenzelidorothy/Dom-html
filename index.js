const body =document.body;
body.style.backgroundColor ='silver'


const title =document.getElementById('title');
title.style.color ='green'


const heading =document.getElementById('heading');
heading.style.textTransform ='uppercase'


const headings =document.getElementById('headings');
headings.style.textTransform ='uppercase'


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


const images =[
  'images/mango-removebg-preview.png',
  'images/bananas-removebg-preview.png',
  'images/watermelon-removebg-preview.png',
  'images/apple-removebg-preview.png',
  'images/onions-removebg-preview.png',
  'images/tomatos-removebg-preview.png',
  'images/kales-removebg-preview.png',
  'images/cabbages.jpg'
]
const generateLi =document.querySelectorAll('ul li');
generateLi.forEach((li,index) =>{
    // li.style.display = 'flex';
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
     img.style.marginRight = '10px';
    img.style.verticalAlign = 'middle';
    img.style.borderRadius = '10%';
     flexList.appendChild(img);
     flexList.appendChild(span);
     li.appendChild(flexList);
})







