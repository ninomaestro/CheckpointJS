function gras() {
    var x = document.querySelector("p").style
    if (x.fontWeight === "bold")
        x.fontWeight = "normal"
    else
        x.fontWeight = "bold"
}

function italique() {
    var x = document.querySelector("p").style
    if (x.fontStyle === "italic")
        x.fontStyle = "normal"
    else
        x.fontStyle = "italic"
}
function souligne() {
    var x = document.querySelector("p").style
    if (x.textDecoration === "underline")
        x.textDecoration = "none"
    else
        x.textDecoration = "underline"
}

function changeSize() {
    var x = document.querySelector("p").style
    x.fontSize = document.querySelector("#size").value + "px"
}
function changeFamily() {
    var x = document.querySelector("p").style
    x.fontFamily = document.querySelector("#family").value
}