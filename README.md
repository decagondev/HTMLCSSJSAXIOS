# HTML/CSS/JS/AXIOS

## HTML
Let's start to build out an HTML structure. The HTML page is where be put the general structural content of the application. HTML uses TAGs enclosed in `<` and `>` to open the TAG. then `</` and `>` to close it. For example...

```HTML
<h1>Some Heading</h1> would be for a heading the "Some Heading" enclosed in the tags will be rendered by a web browser as a heading. In HTML there are many TAGS. Some TAGs are semantic (With Meaning) and others are non semantic (For Presentational markup)
```

## CSS
Now for CSS. The CSS is used to style the markup that you have made in the HTML file. Think of this as positional and decorative styles. So you can decide on things such as color and position using CSS markup. CSS has a specific syntax and structure for example...
```CSS
.someclass {
    color: red;
}

#someid {
    width: 20px;
}

h2 {
    color: green;
    font-size: 40px;
}
```

## JS
Now on to the JS (JavaScript). The JS is used to control actions of the application this can be used to trigger events and change behaviour of the application. The JS is considered an actual programming language where as the HTML and CSS were more of a markup language. For instance you can make a function in JS in several ways...

```JavaScript
function add(a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
}
```

Both of these functions do very similar things but the first one is a little older syntax. and the second is used in class based prototypes to bind the object to the function turning it in to more of a method than a function.


## AXIOS
Here we have a module / library that can be imported in JS called AXIOS. AXIOS is used to send requests to RESTful web services and HTML endpoints. This will be vital when making a front end to used for your application.
AXIOS is written in JS so it will have similar syntax to any JS that you may write. For example...

### GET Request
```JavaScript
const axios = require("axios");

async function getCats() {
	const response = await axios ({
        url: "http://workshop-dev.us-west-2.elasticbeanstalk.com/cats",
        method: "GET"
    })

    console.log(response.data);
}

getCats();
```

### POST Request
```JavaScript
const axios = require("axios");

async function getCats() {
	const response = await axios ({
        url: "http://workshop-dev.us-west-2.elasticbeanstalk.com/cats",
        method: "POST",
        body: {
            "name": "purfect",
            "color": "Gray",
            "imageUrl": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B640%2C613%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F10%2F21%2Fchartreux-lying-on-floor-673148239-2000.jpg" 
        }
    })

    console.log(response.data);
}

postNewCat();
```


