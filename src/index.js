// import 'bootstrap/dist/js/bootstrap';
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js'

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })
// ToolTip boostrap 

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => {
    new bootstrap.Tooltip(item)
});

// Add To Cart 

document.querySelectorAll(".add-to-cart-btn").forEach(item =>{
    item.addEventListener("click", () =>{
        alert("Your Product is added");
    })
})

// Select color 

document.querySelectorAll('.size-option input[type="radio"]').forEach( item =>{
    item.addEventListener("change", ()=>{
        document.querySelectorAll('.size-option').forEach( elm =>{
            elm.classList.remove("active")
        })
        item.parentNode.parentNode.classList.add("active")
    })
})

// get Year

document.getElementById("fullYear").innerHTML = new Date ().getFullYear();
