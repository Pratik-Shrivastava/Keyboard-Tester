console.log("Javascript working");
const body = document.body;
const box = document.querySelector("#box");
const h2 = document.querySelector("h2");
console.log(box);
window.addEventListener('keydown', function(e)
{
    let pressedKey = (e.key === " "? "Space": e.key)
    box.innerHTML = pressedKey;
    box.style.borderColor = "RED";
    h2.innerHTML = `You pressed [\t${pressedKey}\t]`

})
window.addEventListener('keyup', function(e)
{
    
    box.style.borderColor = "WHITE";    
})