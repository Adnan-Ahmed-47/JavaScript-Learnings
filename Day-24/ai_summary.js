/*
-> Lets first understand what happens when you open a webpage.
-> Suppose you have this HTML:
    <html>
        <head>
            <title>My Website</title>
        </head>

        <body>
            <h1>Hello</h1>
            <p>Welcome</p>
        </body>
    </html>
-> When the browser reads this HTML, it doesn't keep it as plain text. Instead, it converts it into a tree of JavaScript objects. That's called the DOM.
Important: Every HTML tag becomes a JavaScript object (called a Node)
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Window vs Document:

-> Think of the browser as a house. 
    Browser -> Window -> Document -> HTML -> Elements

Q) What is Window?
A) The biggest object. It contains everything. Inside window there are things like
    document
    alert()
    console
    location
    history
    navigator
So, window.document means, Inside the window, give me the document. 
That's why both work: document and window.document
______________________________________________________________
Q) What is Document?
A) Document represents the webpage. If JavaScript wants to modify the webpage, it always starts here.
    document
    ↓
    Find element
    ↓
    Modify element
That's why almost every DOM program starts with document.
______________________________________________________________
Q) What is a Node?
A) Everything inside HTML is a Node.
    Example:
        <div>
            Hello
        </div>

-> There are actually three nodes.
    DIV Node
    ↓
    Text Node
    ↓
    Whitespace Node
-> Even spaces and line breaks become nodes. That's why parent.childNodes returns more nodes than expected.
-> You saw 9 Nodes even though there were only 4 divs. Reason? Because JavaScript also counts line breaks, spaces, comments.

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
- Selecting Elements: 
This is the most common thing you'll do.
Imagine the browser asks:
Which element do you want?
There are many ways.

1. getElementById()
     document.getElementById("title")
     Means
        Find element
        ↓
        whose id is title
    Returns
    Single element

2. getElementsByClassName()
     document.getElementsByClassName("heading")
     Returns
        HTMLCollection
     Because multiple elements can have the same class.

3. querySelector()
    Very powerful.
    document.querySelector("#title")
    document.querySelector(".heading")
    document.querySelector("h1")
    Always returns
     First matching element

4. querySelectorAll()
    Returns
     NodeList
    Example
     document.querySelectorAll("li")
    Returns
     NodeList(4)

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
- HTMLCollection vs NodeList vs Array

-> Array --> ✔ map() ✔ filter() ✔ reduce() ✔ forEach() Everything works.

-> HTMLCollection --> Returned by 
                        getElementsByClassName() 
                        children 
                      It looks like an array. But it isn't.
                      ❌ map()
                      ❌ filter()
                      ❌ reduce()
                      ❌ forEach()
                    Need
                    Array.from(collection)

-> NodeList --> Returned by
                        querySelectorAll()
                NodeList supports
                    ✔ forEach()
                But
                    ❌ map()
                    ❌ filter()
                    ❌ reduce()
                If needed
                    Array.from(nodeList)

** Memory Trick
    HTMLCollection
    ↓
    Old DOM API
    ↓
    Convert to Array
    ----------------------
    NodeList
    ↓
    Modern DOM API
    ↓
    forEach available

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
- innerText vs textContent vs innerHTML

-> This is extremely important.
    Suppose:
    <h1>
        Hello
        <span style="display:none">
            World
        </span>
    </h1>

- innerText
    Shows only visible text.
    Hello
- textContent
    Shows everything.
    Hello World
    Even hidden text.
- innerHTML
    Returns HTML itself.
    Hello
    <span>
        World
    </span>


- Memory Trick
    innerText
    ↓
    What user sees

    textContent
    ↓
    Everything

    innerHTML
    ↓
    HTML + Text

*/