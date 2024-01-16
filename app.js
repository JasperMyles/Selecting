// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
//     console.log(img.src)
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }


// Creating Element in the page of a website using Javascript

//  const newImg = document.createElement('img');

//  newImg.src = 'https://plus.unsplash.com/premium_photo-1705262413411-5e623427f90a?q=80&w=1041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

//  document.body.appendChild(newImg)
//  newImg.classList.add('square');

//  const h2 = document.createElement('h2');
//  h2.apppend('Hello Solkie Chicken Fans');
//  const h1 = document.querySelector('h1');
//  h1.insertAdjacentElement('afterend', 'h2')

let container = document.querySelector('#container')
for(let i = 0; i <= 100; i++){
    const button = document.createElement('button')
    button.innerText = 'clickMe'
    container.appendChild(button)
}
