const lamp = document.querySelector('.lamp')
 
function cleanColors() {
    lamp.classList.remove('red-lamp')
    lamp.classList.remove('blue-lamp')
    lamp.classList.remove('orange-lamp')
}
 
function paintRed() {
    cleanColors()
    lamp.classList.add('red-lamp')
}
 
function paintBlue() {
    cleanColors()
    lamp.classList.add('blue-lamp')
}
 
function paintOrange() {
    cleanColors()
    lamp.classList.add('orange-lamp')
}