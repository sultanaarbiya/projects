let inputbutton = document.getElementById('inputbtn');
let buttons = document.querySelectorAll('button');
let string = "";


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") 
        {
            string = eval(string);
            inputbutton.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            inputbutton.value = string;

        }
        else if (e.target.innerHTML == "DEL") {
            string = string.slice(0,string.length-1)
            inputbutton.value = string;

        }
        else {
            string +=e.target.innerHTML;
            inputbutton.value = string;

        }
    })
})



