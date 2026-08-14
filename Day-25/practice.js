// +++++++++++++++++++++++++++++++++ EASY QUESTIONS ++++++++++++++++++++++++++++++++++++++++++
// const h1 = document.getElementById('heading1');
// console.log(h1)
// h1.innerHTML = 'Welcome to JavaScript';
// h1.style.backgroundColor = 'blue';
// h1.style.color = 'yellow';

// console.log(h1.getAttribute('id'))
// console.log(h1.getAttribute('class'))

// h1.setAttribute('class', 'title');

// const pass = document.querySelector('input[type="password"]')
// console.log(pass)

// console.log(document.title)

// const liItems = document.querySelectorAll('li');
// liItems.forEach((li) => {
//     li.style.color = "orange";
//     console.log(li.innerText);
//     console.log(li.textContent);
//     console.log(li.innerHTML);
// });

// +++++++++++++++++++++++++++++++++ MEDIUM QUESTIONS ++++++++++++++++++++++++++++++++++++++++++

const h2 = document.createElement('h2')
h2.innerHTML = "Heading Two"

document.querySelector('body').appendChild(h2)


const btn = document.createElement('button')
btn.innerHTML = "Click Me"
document.querySelector('body').appendChild(btn)
// console.log(btn)

// const liItem = document.createElement('li')
// liItem.innerHTML = "React"

// document.querySelector('ul').appendChild(liItem)


const ul = document.createElement('ul')
ul.setAttribute('class', 'language')
// console.log(ul)
document.querySelector('body').appendChild(ul)
function addLanguages(langName) {
    const liItem = document.createElement('li')
    liItem.innerHTML = langName;
    document.querySelector('.language').appendChild(liItem)
}
addLanguages('Java')
addLanguages('Swift')
addLanguages('JavaScript')
addLanguages('React')
addLanguages('Python')


const secondLang = document.querySelector('ul:nth-of-type(2) li:nth-child(2)')
// console.log(secondLang)
secondLang.innerHTML = "Rust"


const firstLang = document.querySelector('ul:nth-of-type(2) li:nth-child(1)')
firstLang.outerHTML = "<li>React Native</li>"


const lastLang = document.querySelector('ul:nth-of-type(2) li:last-child')
lastLang.remove()
// console.log(lastLang)


const newLi = document.querySelector('.language')
    const firstLi = newLi.querySelector('li:first-child')
    const lastLi = newLi.querySelector('li:last-child')
    // console.log(firstLi.textContent)
    // console.log(lastLi.textContent)


const secondLi = newLi.querySelector('li:nth-child(2)')
// console.log(secondLi)
// console.log(secondLi.parentNode)
// console.log(secondLi.parentElement)

// console.log(secondLi.nextSibling)


const ulList = document.getElementsByClassName('.language')
console.log(ulList)


