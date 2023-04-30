// Write your code here!
document.getElementById('main').remove();

const newHeader = document.createElement('H1');
newHeader.id = "victory";

const YOUR_NAME = "Savannah Kruse";
newHeader.innerHTML = `${YOUR_NAME} is the champion`