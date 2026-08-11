const h1 = document.getElementById('heading1');
console.log(h1)
h1.innerHTML = 'Welcome to JavaScript';
h1.style.backgroundColor = 'blue';
h1.style.color = 'yellow';

console.log(h1.getAttribute('id'))
console.log(h1.getAttribute('class'))

h1.setAttribute('class', 'title');

const pass = document.querySelector('input[type="password"]')
console.log(pass)

console.log(document.title)

const liItems = document.querySelectorAll('li');
liItems.forEach((li) => {
    li.style.color = "orange";
    console.log(li.innerText);
    console.log(li.textContent);
    console.log(li.innerHTML);
});
