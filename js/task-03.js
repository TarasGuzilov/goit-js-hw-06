const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  
];

// * Первый вариант *

// const galleryRef = document.querySelector('.gallery');


// const galleryItems = images.map(image => {
//   const gallaryItemRef = document.createElement('li');

//   const gallaryImageRef = document.createElement('img');
//   gallaryImageRef.src = image.url;
//   gallaryImageRef.alt = image.alt;
//   gallaryImageRef.width = 320;

//   gallaryItemRef.append(gallaryImageRef);
//   return gallaryItemRef;
// });

// galleryRef.append(...galleryItems);


// galleryRef.style = 'list-style-type: none';
// galleryRef.style.display = 'flex';
// for (let i = 0; i < galleryRef.children.length-1; i += 1) {
//   galleryRef.children[i].style = 'margin-right:10px';
// };

// console.log(galleryRef);



// * 2 вариант *
const galleryRef = document.querySelector('.gallery');

const galleryItems = images
  .map(image => `<li><img src='${image.url}' alt='${image.alt}' width='320'></li>`)
  .join('');


galleryRef.insertAdjacentHTML("afterbegin", galleryItems);


galleryRef.style = 'list-style-type: none';
galleryRef.style.display = 'flex';
for (let i = 0; i < galleryRef.children.length-1; i += 1) {
  galleryRef.children[i].style = 'margin-right:10px';
};

console.log(galleryRef);
