const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');

myButton.addEventListener('click', () => {
    let randomNR = Math.floor(Math.random() *6)+1;
  myLabel.textContent = `You rolled a ${randomNR}.`;
});