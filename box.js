let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction);

var oldValue = 0;
var i = 1;

function myFunction() {

    let c = document.getElementById("bgColor").value;
    let n = document.getElementById("number").value;
    n = parseInt(oldValue) + parseInt(n);



    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.style.backgroundColor = c;
        console.log(c);
        box.classList.add('myDiv');
        document.getElementById("box").appendChild(box);
        box.innerHTML = i;

        oldValue = document.getElementById("box").lastElementChild.innerHTML;
        console.log(oldValue);

    }
}