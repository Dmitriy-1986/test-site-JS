'use script';

// JavaScript
const root = document.querySelector('#root');

const data = {
    author: 'Dovgal Dima',
    title: 'Internet Shop',
    subTitle: 'Buy our fruits',
    description: '',
    pear: {
        imgPear: 'https://firebasestorage.googleapis.com/v0/b/dovgal-project.appspot.com/o/pear-shop.jpg?alt=media&token=a1b8a5f6-aac1-4941-b209-f1371b7ae076',
        pearTitle: 'Pear',
        pearDescription: 'Useful for consumption, has many useful vitamins for the body...'
    },
    apricot: {
        imgApricot: 'https://firebasestorage.googleapis.com/v0/b/dovgal-project.appspot.com/o/apricot-shop.jpg?alt=media&token=5883669f-bd1b-4f36-a34c-7c31d22c4fbb',
        apricotTitle: 'Apricot',
        apricotDescription: 'Useful for consumption, has many useful vitamins for the body...'
    },
    apple: {
        imgApple: 'https://firebasestorage.googleapis.com/v0/b/dovgal-project.appspot.com/o/apple-shop.jpg?alt=media&token=e73c0304-4292-4ff1-a084-a7fc272bdd33',
        appleTitle: 'Apple',
        appleDescription:'Useful for consumption, has many useful vitamins for the body...'
    },
    lemon: {
        imgLemon: 'https://firebasestorage.googleapis.com/v0/b/dovgal-project.appspot.com/o/lemon-shop.jpg?alt=media&token=7d2008fa-6acf-4c2c-98cb-44c646d163c3',
        lemonTitle: 'Lemon',
        lemonDescription: 'Useful for consumption, has many useful vitamins for the body...'
    }
};

data.description += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo atque voluptas odio iure, delectus quaerat ipsa dolore, ut dolorem consequatur accusamus eaque libero pariatur mollitia quasi culpa quisquam temporibus sit!';

//Date
const date = new Date();
const fullYear = date.getFullYear();

//Header
let html =  `<header><h1 class='title'>${data.title}</h1>`;
    html += `<p class='subtitle'>${data.subTitle}</p>`;
    html += `<p class='description'>${data.description}</p></header>`;
//Main
    html += `<main><div class='card'><img class='img' src=${data.pear.imgPear} alt=${data.pear.pearTitle}><div><strong>${data.pear.pearTitle}</strong><br><span>${data.pear.pearDescription.slice(0, 25) + '<a target=\'_blank\' href=\'https://dovgaldima.pp.ua\'>...</a>'}</span></div><span>${data.author}</span></div>`;
    html += `<div class='card'><img class='img' src=${data.apple.imgApple} alt=${data.apple.appleTitle}><div><strong>${data.apple.appleTitle}</strong><br><span>${data.apple.appleDescription.slice(0, 25) + '<a target=\'_blank\' href=\'https://dovgaldima.pp.ua\'>...</a>'}</span></div><span>${data.author}</span></div>`;
    html += `<div class='card'><img class='img' src=${data.apricot.imgApricot} alt=${data.apricot.apricotTitle}><div><strong>${data.apricot.apricotTitle}</strong><br><span>${data.apricot.apricotDescription.slice(0, 25) + '<a target=\'_blank\' href=\'https://dovgaldima.pp.ua\'>...</a>'}</span></div><span>${data.author}</span></div>`;
    html += `<div class='card'><img class='img' src=${data.lemon.imgLemon} alt=${data.lemon.lemonTitle}><div><strong>${data.lemon.lemonTitle}</strong><br><span>${data.lemon.lemonDescription.slice(0, 25) + '<a target=\'_blank\' href=\'https://dovgaldima.pp.ua\'>...</a>'}</span></div><span>${data.author}</span></div>`;
    html += `</main>`
//Footer
    html += `<footer><span>${fullYear + ' ' + data.author}</span></footer>`;

root.innerHTML = html;

// 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