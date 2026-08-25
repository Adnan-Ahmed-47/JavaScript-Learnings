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




// let languages = ['java', 'python', 'react', 'ruby', 'javascript', 'c'];
// let languages = ['java', 'Python', 'react', 'Ruby', 'javascript', 'c']; // use .localeCompare if the items are capital and small mixed.

// function itemSorting(data) {
//     const ul = document.createElement('ul');
//     ul.setAttribute('class', 'languages')
//     document.body.appendChild(ul)
//     // console.log(ul)
    
//     // data.sort();
//     data.sort((a,b) => a.localeCompare(b)) // if array has capital letters strings.
//     data.forEach((lang) => {
//         const li = document.createElement('li');
//         li.setAttribute('class', 'language')
//         li.textContent = lang;
//         ul.appendChild(li);
//     })
// }
// itemSorting(languages)



// let languages = ['java', 'python', 'react', 'ruby', 'javascript', 'c'];
// function reverseList(data) {
//     const ul = document.createElement('ul');
//     ul.setAttribute('class', 'languages')
//     document.body.appendChild(ul)
//     // console.log(ul)
    
//     // data.sort();
//     data.reverse();
//     data.forEach((lang) => {
//         const li = document.createElement('li');
//         li.setAttribute('class', 'language')
//         li.textContent = lang;
//         ul.appendChild(li);
//     })
// }
// reverseList(languages)


// function createButton(val) {
//     for(let i=1; i<=val; i++) {
//         const btn = document.createElement('button')
//         btn.textContent = "Submit"
//         btn.style.marginBottom = '10px'
//         document.body.appendChild(btn)
//         const br = document.createElement('br')
//         document.body.appendChild(br)
//     }
//     return true;
// }
// createButton(20)



// const profiles = [{name: 'Adnan', age: 25}, {name: "Ismail", age: 24}]
// function displayProfile(data) {
//     for(let i=0; i<data.length; i++) {
//         const div = document.createElement('div');
//         div.setAttribute('class', 'cards')
//         div.innerHTML = data[i].name + data[i].age
//         div.style.height = '100px'
//         div.style.width = '100px'
//         div.style.marginBottom = '5px'
//         div.style.border = '1px solid black'

//         document.body.appendChild(div)
//     }
// }
// displayProfile(profiles)

// const profiles = [{name: 'Adnan', age: 25}, {name: "Ismail", age: 24}];

// function createProfileCards(data) {
//   // 1. Create a container to hold all the cards
//   const container = document.createElement('div');
//   container.style.display = 'flex';
//   container.style.gap = '20px';
//   container.style.backgroundColor = 'pink'
//   container.style.padding = '20px';
//   document.body.appendChild(container);

//   // 2. Loop through each profile object
//   data.forEach((user) => {
//     // Create the main card box
//     const card = document.createElement('div');
//     card.style.border = '1px solid #ccc';
//     card.style.borderRadius = '8px';
//     card.style.padding = '16px';
//     card.style.width = '200px';
//     card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
//     card.style.backgroundColor = '#f9f9f9';

//     // Create and add the name heading
//     const nameHeading = document.createElement('h3');
//     nameHeading.textContent = user.name;
//     nameHeading.style.margin = '0 0 8px 0';
//     card.appendChild(nameHeading);

//     // Create and add the age text
//     const ageParagraph = document.createElement('p');
//     ageParagraph.textContent = `Age: ${user.age}`;
//     ageParagraph.style.margin = '0';
//     ageParagraph.style.color = '#555';
//     card.appendChild(ageParagraph);

//     // Append the completed card to the main container
//     container.appendChild(card);
//   });

//   return true;
// }

// createProfileCards(profiles);



// const shoppingProducts = [
//   {
//     id: 101,
//     title: "Wireless Noise-Canceling Headphones",
//     price: 89.99,
//     category: "Electronics",
//     inStock: true,
//     // image: "https://unsplash.com"
//     image: 'https://unsplash.com/photos/a-pair-of-headphones-sitting-on-top-of-each-other-A6hzRnwR3vM'
//   },
//   {
//     id: 102,
//     title: "Stainless Steel Water Bottle",
//     price: 24.50,
//     category: "Kitchen & Home",
//     inStock: false,
//     image: "https://unsplash.com/s/photos/headphone"
//   },
//   {
//     id: 103,
//     title: "Ergonomic Wireless Mouse",
//     price: 45.00,
//     category: "Electronics",
//     inStock: true,
//     image: "https://unsplash.com"
//   }
// ];

// function generateProdCards(data) {
//     // Create a parent container/component
//     const div = document.createElement('div')
//     div.style.display = 'flex'
//     div.style.backgroundColor = 'beige'
//     div.style.padding = '20px'
//     div.style.gap = '20px'
//     document.body.appendChild(div)
//     // console.log(div)


//     // Create cards
//     data.forEach((product) => {
//         // Create a card container
//         const card = document.createElement('div')
//         card.style.width = '500px'
//         card.style.border = '1px solid #ccc'
//         card.style.borderRadius = '8px'
//         card.style.padding = '16px'
//         card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
//         card.style.backgroundColor = '#f9f9f9'; 
//         div.appendChild(card)

//         // Display Product Details

//         // product name
//         const h3 = document.createElement('h3')
//         h3.textContent = product.title;
//         h3.style.margin = '0 0 8px 0'
//         card.appendChild(h3)

//         // Display Image
//         const imgDiv = document.createElement('div')
//         imgDiv.style.height = '100px'
//         imgDiv.style.width = '100px'
//         // imgDiv.style.backgroundColor = 'black'
//         imgDiv.style.marginBottom = '10px'
//         // imgDiv.innerHTML = product.image
//         card.appendChild(imgDiv)

//         const img = document.createElement('img')
//         // img.setAttribute('src', './img_unsplash.jpg')
//         img.setAttribute('src', product.image)
//         img.style.height = '100%'
//         img.style.width = '100%'
//         // img.textContent = product.image
//         imgDiv.appendChild(img)

//         // pricing
//         const para = document.createElement('p')
//         para.textContent = `Price: ${product.price}`
//         para.style.margin = '0'
//         card.appendChild(para)

//         // category
//         const prodCat = document.createElement('p')
//         prodCat.style.margin = '0'
//         prodCat.textContent = `Category: ${product.category}`
//         card.appendChild(prodCat)

//         // In stock
//         const prodStock = document.createElement('p')
//         prodStock.style.margin = '0'
//         prodStock.textContent = `Available: ${product.inStock ? 'Yes' : 'No'}`
//         card.appendChild(prodStock)

//     })
// }
// generateProdCards(shoppingProducts)



// const menuItems = [
//   { text: "Home", url: "/home" },
//   { text: "Products", url: "/products" },
//   { text: "About Us", url: "/about" },
//   { text: "Contact", url: "/contact" }
// ];

// function navBarItems(data) {
//     const nav = document.createElement('nav');
//     nav.setAttribute('class', 'navContainer')
//     nav.style.width = '500px'
//     nav.style.backgroundColor = '#f0f0f0'
//     nav.style.padding = '15px'
//     document.body.appendChild(nav)
//     console.log(nav)

//     const ulList = document.createElement('ul')
//     ulList.setAttribute('class', 'navbar-items')
//     ulList.style.display = 'flex';
//     ulList.style.justifyContent = 'space-around';
//     ulList.style.alignItems = 'center';
//     ulList.style.paddingLeft = '0';
//     ulList.style.listStyleType = 'none';
//     ulList.style.margin = '0';
//     nav.appendChild(ulList)
//     console.log(ulList)

//     data.forEach((item) => {
//         const li = document.createElement('li')
//         li.setAttribute('class', 'nav-items')
//         li.style.padding = '10px'
//         li.style.border = '1px solid blue'
//         li.style.borderRadius = '10px'

//         const anTag = document.createElement('a')
//         anTag.setAttribute('href', `${item.url}`)
//         console.log(anTag)
//         anTag.textContent = item.text;
//         anTag.style.textDecoration = 'none';
//         ulList.appendChild(li)
//         li.appendChild(anTag)
//     })

// } 
// navBarItems(menuItems)



function createElement(tag, text, className, backgroundColor) {
    const element = document.createElement(tag)
    element.textContent = text;
    element.setAttribute('class', className)
    element.style.backgroundColor = backgroundColor;

    document.body.appendChild(element)
}
createElement('h3', 'Heading 3', 'heading', 'pink')
createElement('p', 'This is a paragraph', 'para', 'blue')