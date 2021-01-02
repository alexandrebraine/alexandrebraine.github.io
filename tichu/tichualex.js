const buttondesign = document.getElementsByClassName('buttondesign')

buttondesign.addEventListener('click', () => {

    document.getElementById("designid1").classList.remove("border");
    document.getElementById("designid1").classList.toggle("design2");

    if (buttondesign.textContent === 'design1') {
        buttondesign.textContent = 'design2'

    } else {
        buttondesign.textContent = 'design1'

    }

})




const buttonchangedesign = document.getElementById('buttonchangedesign')

buttonchangedesign.addEventListener('click', () => {

    document.getElementById("board4players").classList.remove("board4players");

    
    

    if (buttonchangedesign.textContent === 'round') {
        buttonchangedesign.textContent = 'colomn'

    } else {
        buttonchangedesign.textContent = 'round'

    }

})