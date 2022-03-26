console.log('LOGIC');
var element = document.getElementById('image');
console.log('elemento', element);


var paragraphList = document.getElementsByTagName('p');
console.log('getElementsByTagName', paragraphList);

var paragraphListByClass = document.getElementsByClassName('paragraph');
console.log('getElementByClassName');

//como agregar css a un elemento
element.classList.add('title');