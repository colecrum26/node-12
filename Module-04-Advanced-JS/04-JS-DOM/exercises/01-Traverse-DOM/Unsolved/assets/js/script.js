// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
// You can also access the element(s) by creating another variable and tagging its ID
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';