const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');
const myLabel2 = document.getElementById('myLabel2');


myButton.addEventListener('click', () => {
    let randomNR = Math.floor(Math.random() *6)+1;
  myLabel.textContent = `You rolled a ${randomNR}.`;
  myLabel2.textContent = `You rolled a ${randomNR}.`;

});