const buttondesign = document.getElementById('buttondesign')
let elem= document.getElementById("board4players");

buttondesign.addEventListener('click', () => {
    if (elem.style.gridTemplateAreas === '"top" "right" "bottom" "left"') {

        elem.style.gridTemplateAreas = '". top top top ." "left left . right right" ".  bottom bottom bottom ."';

        ". top top top ."
                        "left left . right right"
                        ".  bottom bottom bottom ."

    } else {
        
        elem.style.gridTemplateAreas = '"top" "right" "bottom" "left"';

    }

})