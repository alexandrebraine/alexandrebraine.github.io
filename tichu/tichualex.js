/*
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
*/

const layoutrow = document.getElementById('buttonrow')
const layoutclock = document.getElementById('buttonclock')
const layoutanticlock = document.getElementById('buttonanticlock')

let tableplayers = document.getElementById("board4players")

layoutrow.addEventListener('click', () => { tableplayers.style.gridTemplateAreas = '"top" "right" "bottom" "left"' })
layoutclock.addEventListener('click', () => { tableplayers.style.gridTemplateAreas = '". top top top ." "left left . right right" ".  bottom bottom bottom ."' })
layoutanticlock.addEventListener('click', () => { tableplayers.style.gridTemplateAreas = '". top top top ." "right right . left left" ".  bottom bottom bottom ."' })