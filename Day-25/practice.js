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

// const h2 = document.createElement('h2')
// h2.innerHTML = "Heading Two"

// document.querySelector('body').appendChild(h2)


// const btn = document.createElement('button')
// btn.innerHTML = "Click Me"
// document.querySelector('body').appendChild(btn)
// // console.log(btn)

// // const liItem = document.createElement('li')
// // liItem.innerHTML = "React"

// // document.querySelector('ul').appendChild(liItem)


// const ul = document.createElement('ul')
// ul.setAttribute('class', 'language')
// // console.log(ul)
// document.querySelector('body').appendChild(ul)
// function addLanguages(langName) {
//     const liItem = document.createElement('li')
//     liItem.innerHTML = langName;
//     document.querySelector('.language').appendChild(liItem)
// }
// addLanguages('Java')
// addLanguages('Swift')
// addLanguages('JavaScript')
// addLanguages('React')
// addLanguages('Python')


// const secondLang = document.querySelector('ul:nth-of-type(2) li:nth-child(2)')
// // console.log(secondLang)
// secondLang.innerHTML = "Rust"


// const firstLang = document.querySelector('ul:nth-of-type(2) li:nth-child(1)')
// firstLang.outerHTML = "<li>React Native</li>"


// const lastLang = document.querySelector('ul:nth-of-type(2) li:last-child')
// lastLang.remove()
// // console.log(lastLang)


// const newLi = document.querySelector('.language')
//     const firstLi = newLi.querySelector('li:first-child')
//     const lastLi = newLi.querySelector('li:last-child')
//     // console.log(firstLi.textContent)
//     // console.log(lastLi.textContent)


// const secondLi = newLi.querySelector('li:nth-child(2)')
// // console.log(secondLi)
// // console.log(secondLi.parentNode)
// // console.log(secondLi.parentElement)

// // console.log(secondLi.nextSibling)


// const ulList = document.getElementsByClassName('numbers')
// // const ulList = document.querySelector('.numbers')
// // console.log(ulList)
// console.log(ulList[0].children)




// const arr = Array.from(ulList)
// const newAr = arr.map((li) => {
//     console.log(li.textContent)
// })
// console.log(arr)


// const div = document.createElement('div')
// div.setAttribute('class', 'container')
// div.setAttribute('id', 'box')
// div.style.backgroundColor = 'brown'
// div.style.color = 'white'
// div.style.padding = "10px"
// div.textContent = "This is the div container."
// document.querySelector('body').appendChild(div)
// console.log(div)

// +++++++++++++++++++++++++++++++++ HARD QUESTIONS ++++++++++++++++++++++++++++++++++++++++++

// const newUl = document.createElement('ul')
// newUl.setAttribute('class', 'list-items')
// document.querySelector('body').appendChild(newUl)
// console.log(newUl)

// for(let i=1; i<=10; i++) {
//     const liItem = document.createElement('li')
//     liItem.innerHTML = i;
//     document.querySelector('.list-items').appendChild(liItem)
// }

// for(let i=1; i<=10; i++) {
//     if(i%2 !== 0) {
//         const liItem = document.createElement('li')
//         liItem.innerHTML = i;
//         document.querySelector('.list-items').appendChild(liItem)  
//     }
// }

// let arr = ['java', 'python', 'react'];
// for(let i=0; i<arr.length; i++) {
//         const liItem = document.createElement('li')
//         liItem.innerHTML = arr[i].toUpperCase();
//         document.querySelector('.list-items').appendChild(liItem)  
// }


// const cards = [{name:"Adnan",age:25},{name:"Ahmed",age:26}];
// cards.forEach((item) => {
//     let div = document.createElement('div')
//     div.innerHTML = `<strong>${item.name}</strong><br>Age: ${item.age}`

//     div.style.height = '50px';
//     div.style.width = '100px';
//     div.style.padding = '20px';
//     div.style.textAlign = 'center'
//     div.style.backgroundColor = 'beige';
//     div.style.marginBottom = '10px'

//     document.querySelector('body').appendChild(div)
//     console.log(div)
// })



// let arr = ['java', 'python', 'react', 'ruby'];
// function createDynamicTable(data) {
//   const table = document.createElement('table');
//   table.setAttribute('class', 'table');
//   table.style.border = '1px solid black';
//   document.body.appendChild(table); // Simplified body selection

//   data.forEach((item) => {
//     const tableRow = document.createElement('tr');
//     tableRow.setAttribute('class', 'rows');

//     const tableData = document.createElement('td');
//     tableData.setAttribute('class', 'data');
//     tableData.textContent = item; // Safer than innerHTML for plain text

//     // FIX: Append directly to the elements you just created
//     tableRow.appendChild(tableData);
//     table.appendChild(tableRow);
//   });

//   return true;
// }
// console.log(createDynamicTable(cards));


// const cards = [{name:"Adnan",age:25},{name:"Ahmed",age:26}];
// function createDataTable(data) {
//     // Step 1: Create a table
//     const table = document.createElement('table');
//     table.setAttribute('class', 'table')
//     table.style.border = '1px solid black';
//     document.body.appendChild(table)
//     console.log(table);


//     // Step 2: Create a table Header
//     const tableHeaderRow = document.createElement('tr');
//     tableHeaderRow.setAttribute('class', 'headerrow')
//     tableHeaderRow.style.border = '1px solid black';
//     const headers = ['Name', 'Age'];
//     headers.forEach((item) => {
//         const tableHeaderData = document.createElement('th');
//         tableHeaderData.style.border = '1px solid black';
//         tableHeaderData.textContent = item;
//         tableHeaderRow.appendChild(tableHeaderData)
//     })
//     table.appendChild(tableHeaderRow)
//     console.log(tableHeaderRow)


//     // Step 3: Create a data rows
//     data.forEach((item) => {
//         const tableDataRow = document.createElement('tr');
//         tableDataRow.setAttribute('class', 'rows')
//         // tableDataRow.style.border = '1px solid black';

//         // Column 1: Name
//         const nameData = document.createElement('td');
//         nameData.setAttribute('class', 'data');
//         nameData.style.border = '1px solid black';
//         nameData.textContent = item.name;
//         tableDataRow.appendChild(nameData)

//         // Column 2: Age
//         const ageData = document.createElement('td');
//         ageData.setAttribute('class', 'data');
//         ageData.style.border = '1px solid black';
//         ageData.textContent = item.age;
//         tableDataRow.appendChild(ageData)

//         // Append the complete row to the table
//         table.appendChild(tableDataRow)
//     })
//     table.appendChild(tableDataRow)
// }
// createDataTable(cards)


// 1. Select all <h2> elements
// const h2Elements = document.getElementsByTagName('h2');
// // 2. Helper function to generate a random hex color
// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // 3. Loop through each <h2> and apply a unique random color - .from converts an html to javascript array, so that we can use forEach and loop it.
// Array.from(h2Elements).forEach((element) => {
//   element.style.color = getRandomColor();
// });


// const languages = ['java', 'python', 'javascript', 'ruby', 'perl']
// const ul = document.createElement('ul');
// ul.setAttribute('class', 'languages')
// document.body.appendChild(ul)
// console.log(ul)

// const getLongestLang = getLargestLang(languages)
// languages.forEach((lang) => {
//     console.log(getLongestLang)
//     const li = document.createElement('li');
//     li.setAttribute('class', 'language')
//     li.textContent = lang;
//     if(getLongestLang === lang) {
//         li.style.color = "brown";
//         li.style.fontSize = '24px'
//         li.style.fontWeight = '900'
//     } 
//     ul.appendChild(li);
// })

// function getLargestLang(data) {
//     let largest = data[0]
//     data.forEach((lang) => {
//         if(lang.length > largest.length) {
//             largest = lang;
//         }
//     })
//     return largest;
// }



// const languages = ['java', 'python', 'javascript', 'ruby', 'perl', 'python', 'ruby']
// function removeDuplicateLang(data) {
//     // Step 1: Create UL
//     const ul = document.createElement('ul')
//     ul.setAttribute('class', 'languages')
//     document.body.appendChild(ul)
//     console.log(ul)
    
//     // Step 2: Loop through the languages and filter out the duplicate languages and list all the li items.
//     const newLanguages = data.filter((lang, index) => {
//         return languages.indexOf(lang) === index;
//     })
//     console.log(newLanguages)
    
//     newLanguages.forEach((lang) => {
//         const li = document.createElement('li');
//         li.setAttribute('class', 'language')
//         li.textContent = lang;
//         ul.appendChild(li)

//     })
//     return newLanguages

// }
// removeDuplicateLang(languages)



// let languages = ['java', 'python', 'react', 'java', 'ruby', 'python'];

// let uniqueLanguages = languages.filter((item, index) => {
//     console.log(item)
//     console.log(languages.indexOf(item))
//     console.log(index)
//   // Keeps the item ONLY if its current position matches its FIRST appearance
//   return languages.indexOf(item) === index;
// });

// console.log(uniqueLanguages); 
// Output: ['java', 'python', 'react', 'ruby']




let languages = ['java', 'python', 'react', 'ruby', 'javascript', 'c'];

const ul = document.createElement('ul');
ul.setAttribute('class', 'languages')
document.body.appendChild(ul)
console.log(ul)

languages.sort();
languages.forEach((lang) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'language')
    li.textContent = lang;
    // if(getLongestLang === lang) {
    //     li.style.color = "brown";
    //     li.style.fontSize = '24px'
    //     li.style.fontWeight = '900'
    // } 
    ul.appendChild(li);
})




