Clicker Chaos
===

# Overview

Create a chaotic clicker game, where you can click to your heart's content.

## Table of Contents
- [Overview](#overview)
- [Project Installation](#project-installation)
- [Coding Tips and Tricks](#coding-tips-and-tricks)
- [Project Steps](#project-steps)
    - [TODO 0 - Where to Code](#todo-0---where-to-code)
    - [TODO 1 - Add HTML Attributes](#todo-1---add-attributes-to-your-game)
    - [TODO 2 - Add an Image](#todo-2---add-an-image-to-click)
    - [TODO 3 - Add an Event Listener](#todo-3---add-an-event-listener)
    - [TODO 4 - Increase RAM](#todo-4---increase-ram)
    - [TODO 5 - Add Autoclicker](#todo-5---add-an-autoclicker)
    - [TODO 6 - Gain RAM Every Second](#todo-6---gain-ram-every-second)
    - [TODO 7 - Add More Autoclickers](#todo-7---repeat-todo-5)

## Overview

In this project, you'll be creating a clicker game (sometimes also called idle or incremental games). There really is no purpose of this game, other than to click a button or image to get money (or some other currency), use that money to make more money, and get as much currency as possible.

If you've never played a clicker game before, see a couple examples:-

- [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/)
- [Canada Clikcer](http://www.canadaclicker.com/)
- [Universal Paperclips](https://www.decisionproblem.com/paperclips/index2.html)
- [Evolve Idle](https://pmotschmann.github.io/Evolve/)

As you'll notice from those examples, there are three main components to any clicker game

1. The clicker - You can click on an image or button to get currency

2. The autoclicker - Get enough currency and you can buy an auto-clicker, which clicks to generate currency for you!

3. Upgrades - Make your clicker and autoclickers generate more money

## Project Installation

To install this project, you'll want to have your gitpod workspace open with the terminal running. Enter the following commands one at a time:

* `git clone https://github.com/gregthompson27/clicker-chaos.git`
* `chmod +x ./clicker-chaos/setup.sh`
* `./clicker-chaos/setup.sh`
* `rm -rf ./clicker-chaos/setup.sh`

If you'd like to change the name of the project, you can right click on the folder name and select "Rename".

## Coding Tips and Tricks

### Clicking Buttons

In this project, we'll use jQuery to help give our website functionality by attaching buttons with actions. At a high level, jQuery allows us to select elements (think CSS selectors) from a web page and manipulate those elements. One way we can "manipulate" elements is by attaching functions to elements that will fire when they are clicked - this is a popular way to make buttons work! Learn more about jQuery selectors [here](https://www.w3schools.com/jquery/jquery_selectors.asp).

In general, this syntax to make buttons (or other elements) work when clicked is with the following code:

```js
// Choose an element(s), usually by an id or class
$("#idName").on("click", handlerFunction);

// this function can have any name, just make sure it matches the name of the function from the click event
function handlerFunction() {
    // code that you want to run when the corresponding element is clicked
}
```

### Math functions

We'll use a couple different Math functions in this project. Some will be for rounding purposes so that we can keep the amount of decimals in our program to a minimum - JavaScript is not super great with numbers in general. We'll also be dealing with exponents, and can use `Math` for that.

[w3school documentation on JavaScript's Math object](https://www.w3schools.com/js/js_math.asp)

`Math.round(x)` returns the nearest whole number to x, while `Math.floor(x)` returns the value of x rounded down to the nearest whole number.

`Math.pow(x, y)` returns the value of x raised to the power of y, so `Math.pow(3, 4)` returns 81, and `Math.pow(300, 0)` returns 1.

___

## Project Steps

### Todo 0 - Where to Code

The `index.html` file contains everything you'll need to get started. You'll be adding and updating some of the html, and also adding JS to make the app interactive. The `<script>` tags that are part of the `<body>` are where you will add the code to make this app work.

The `index.css` file contains some built in CSS properties that will be applied to the page. Feel free to add to, remove from, or edit this file to update the styles of your app.

___

### Todo 0.5 - Setup and Planning

Take some time to think about what theme you'd like to have for your clicker game. This README will be feature Halle Bot with the ultimate goal of gaining more and more RAM. Some of the id and class attribute names I choose will be unique to my game. Make sure to customize different parts for your game.

Next, think about the organization of your game. The html provided will create three vertical "panels" that hold the tree main elements of your game. Do you want the clicker item to be in the middle and the autoclickers to be on the right? The clicker item on the left and the autoclickers in the middle? That's the first big decision for your game that you'll want to make.

### Todo 1 - Add Attributes to Your Game

Find the `div` element that is nested in the `body` tags that has a `class="main-box"` attribute. This `div` holds three child divs, and these child `div`s will hold the three main gameplay elements - the clicker, the autoclickers, and the upgrades.

The topmost child `div` of the main-box `div` will appear on the left side of your screen. The middle `div` will appear in the middle of your screen, and the bottom `div` will appear on the right side.

Give each of these `div`s a class attribute that corresponds with which element it will hold.

- The attribute for the clicker `div` should be `clicker-box`
- The attribute for the autoclicker `div` should be `autoclicker-box`
- The attribute for the upgrades `div` should be `upgrade-box`

___

### Todo 2 - Add an Image to Click

Use Google to find an image that you like for your game. Right click on the image you've selected and choose the "Copy Image Address" option. This will copy a url that "points" at the image.

Find the `div` with the `class="clicker-box"` attribute that you added in TODO 1. In this div, add an `img` element with a source attribute that points at the image url you just copied. Also add an id attribute of `"clicker-image"` to the `img` tag.

> Can't remember how to create an image using html? Visit [w3schools](https://www.w3schools.com/tags/tag_img.asp) for some review.

Next, add a paragraph element either right above or right below your image. This paragraph will hold the text `RAM: 0 bytes`, and it will get an `id="ram-amount"` attribute. Make sure to update your text and id attribute value to match your theme.

Last, add a second paragraph that will keep track of the income per second that is earned through the autoclickers. This paragraph will the text `RAM per second: 0 bytes` 

___

### Todo 3 - Add an Event Listener

Now that we have an image to click, let's add a listener to make things happen when the image is clicked.

Add the following code to the script tag in the main logic section, but change the function names to match up with your theme:

```js
$("#clicker-image").on("click", downloadRAM);
```

And in the functions section:

```js
function downloadRAM() {
    console.log("you clicked the image!");
    console.log("if only we had a variable to keep track of the amount of RAM...");
}
```

Clicking on the image should now result in two lines being logged to the console. Next, let's add code to start making things happen.

___

### Todo 4 - Increase RAM

First, to keep track of RAM (or income), we'll need a variable. You'll see a reference to the variable `ram` throughout the rest of the README - this variable just keeps track of how much RAM we have.

**Code:** Go ahead and declare a variable in the Variables section of your script, and assign it a value of `0`.

In the function you created in Todo 3, remove the console log statements, and add code that will increase the value stored in the variable by 1. Now, you could console.log your variable to see if the value is increasing to make sure your code is working as intended. Don't forget to always remove console.log statements after using them, though.

The last step here is to update the paragraph's text so the player knows how much money is available. We'll do that with jQuery, by selecting the correct paragraph:

```js
$("#ram-amount").text("RAM: " + ram + " bytes");
```

Make sure to change the `"#ram-amount"` argument being passed to the `$` function to match the id of the paragraph you created to keep track of your income.

At this point, you should have an image that can be clicked that updates the amount of income you have available. You can click your image forever and ever and ever and ever and the amout of income you have will continue to increase. Next, you'll add some autoclickers that you'll be able to buy to do the clicking for you!

___

### Todo 5 - Add an Autoclicker

Autoclickers can seem pretty difficult to make since there's a lot going on with how they function. We'll break it down into simple steps and make it as easy as possible. The nice thing is that once you build one autoclicker and it works as you'd like it to, you can create many of them by following the same format.

First, create a variable that will store the income your autoclickers are earning every second. In this Readme, that variable will be referred to as `ramPerSecond`. Assign it a value of `0`.

Next, you'll add the autoclicker to your page by adding some html. Find the div with a `class="autoclicker-box` attribute, and add a child div element to it. It should be structured similarly to the one below, and the button and paragraphs should get unique id attributes.

```html
<div class="autoclicker" id="autoclicker1" title="One byte of RAM per second">
    <p>MicroSD Card</p>
    <p id="microSD-count">Owned: 0</p>
    <p id="microSD-cost">Cost: 50</p>
    <button id="purchase-microSD">BUY ONE</button>
    <!-- w3schools button styling below: -->
    <!-- https://www.w3schools.com/css/css3_buttons.asp -->
</div>
```

There's a whole lot of information we'll want to store that are related to this html div. A good data type to use for this would be an object, since it allows you to store multiple key value pairs in the same variable.

You'll want to create keys for rps (ram per second) gained when buying a microSD, number of microSDs owned, and the base cost of the microSD. An example object is below, and yours will likely look slightly different. Add this variable to the variables section of your code.

```js
var microSD = {
    rps: 0.5, // each net helps us catch one butterfly per second
    numberOwned: 0, // we don't have any nets at the beginning of the game
    basePrice: 50, // the first one costs 50
};
```

___ 

### TODO 5.5 - Purchase an Autoclicker

To purchase an autoclicker, we'll add an event listener for the button in the div we just created, and we'll decide on a function name that will be called when we click on that button. The event listener for buying a microSD card will look like this

```js
$("#purchase-microSD").on('click', purchaseMicroSD);
```

Add the listener to the event listeners section of your code.

The value passed in to the `$` function is the name of the id attribute we gave to the button in the previous step. The second argument passed to the `.on()` method, or function, is the name of the function that will automatically be called when the corresponding button is clicked.

Next, go ahead and create that function in the functions section of your code. Generally, we want the function to first check if enough RAM is available to make the purchase. If there is enough RAM, then you'll decrease the amout of RAM you have by the cost, but increase the RAM per second that you are earning. The function is demonstrated below.

```js
function purchaseMicroSD() {
    /*
        To calculate the cost, you'll have to do some math. Clicker games typically make you advance slower
        if you just stick with purchasing one item to encourage you to get deeper and deeper into the game. 
        The math behind this involves exponential growth. You'll use the Math.pow() function to help calculate the cost.
    */
    var cost = Math.ceil(microSD.baseCost * Math.pow(1.1, microSD.numberOwned));
    // The number 1.1 means that each microSD will be 10% more expensive than the previous one.
    // You'll want to tinker with this number to make sure it gives you the gameplay experience you want (it should probably be greater than 1 and less than 2)
    // In this example, the first will cost 50, the second 55, and the 50th will cost around 5500.

    if (ram >= cost) {
        // write a line of code that decreases the ram by the cost
        // write a second line of code that increases the ramPerSecond variable by microSD's rps value
        // write another line that increases the microSD variable's numberOwned property by one

        // Add code that updates the text of the div that you're working on. Here's an example of updating the number owned text:
        $("#microSD-count").text("Owned: " + microSD.numberOwned); // Update the text based on the updated numberOwned property

        // Now we'll calculate the cost of the next microsd
        var newCost = Math.ceil(microSD.baseCost * Math.pow(1.1, microSD.numberOwned));
        $('#microSD-cost').text("Cost: " + newCost);
    }
}
```

___

### TODO 6 - Gain RAM Every Second

Now that you have an autoclicker that will buy RAM for you every second, you'll add functionality to make that happen. In the core functionality section of your code, you'll add a timer function that will call a function every second, or multiple times per second if you'd rather using the `setInterval()` function:

```js
setInterval(addAutoRAM, 1000);
```

addAutoRAM is a function that will be demonstrated below that is called, in this case, every 1000 milliseconds, or every second. You can change that number to 250 to call the function every fourth of a second, or another factor of 1000 to create an even break. Add this code to your functions section

```js
function addAutoRAM() {
    /*
        Write a line of code that increases the ram variable by the value stored in the ramPerSecond variable
        
        If you chose a number different than 1000 above for your setInterval timer, you'll have to divide the ramPerSecond value before adding it to the ram.
        For example, if you chose 250, you'll update the ram variable by adding one fourth of the ramPerSecond value.
    */

    // update the text that displays the ram available
    $("#ram-amount").text("RAM: " + Math.floor(ram) + " bytes"); 
}
```

___

### TODO 7 - Repeat TODO 5

You'll want to repeat step 5 at least 5 or 6 times so that the people playing your game have more items to buy. You'll want to bump up the money that the items cost, and also bump up the amount or RAM per second you get when you buy them.# clicker-chaos
