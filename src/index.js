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
//  Select Product Price 
document.querySelectorAll('[data-product-quantity]').forEach( item =>{
    item.addEventListener('change', ()=>{
        const newquantity = item.value;
        const parent = item.closest('[data-product-info]');
        const priceperunite = parent.getAttribute('data-product-price');
        const total = newquantity * priceperunite;
        parent.querySelector('.total-price-for-product').innerHTML = total + "$";
        let totatPrice = 0;
        document.querySelectorAll('[data-product-info]').forEach( product =>{
            const pricePer = product.getAttribute('data-product-price')
            const quantity = product.querySelector('[data-product-quantity]').value;
            const totalProdu = pricePer * quantity;
            totalProdu = totalProdu + totatPrice;
        })
    })
})
// Total Price 

// Rmove cart 
document.querySelectorAll('[data-remove-from-crad]').forEach( item=>{
    item.addEventListener("click", (e)=>{
        e.preventDefault()
        item.closest('[data-product-info]').remove();
        console.log("Product Removed")
        // Calcule Price 
    })
})
 // Choose City 
const citiesbyCountry = {
    sa: ['Maka', 'Reyadh'],
    mr: ['Nouakcoutt', 'Nouadhbou'],
    al: ['Algeria', 'Adrar'],
    pl: ['Qudse', 'Ramela']
}
document.querySelectorAll('select[name="country"]').forEach( item =>{
    item.addEventListener('change', ()=>{
        const country = item.value;
        const cities = citiesbyCountry[country]
        document.querySelectorAll("paymentcities option").forEach( option =>{
            option.remove()
        })
        const firstOption = document.createElement("option")
        const optionText = document.createTextNode("Choose a City")
        firstOption.appendChild(optionText)
        firstOption.setAttribute('value', '')
        firstOption.setAttribute('disabled', true)
        firstOption.setAttribute('selected', true)
        const cityOption = document.getElementById("paymentcities")
        cityOption.appendChild(firstOption)
        
        cities.forEach( city =>{
            const newOption = document.createElement("option");
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value', city)
            cityOption.appendChild(newOption)
        })
    })
})
//  Card Credit 
document.querySelectorAll("#form-checkout input[name='paymentmethod']").forEach( item=>{
    item.addEventListener("change", ()=>{
        const paymentMethod = item.value
        const carditCardInput = document.querySelectorAll("#cardit_card_info input");
        if(paymentMethod === 'delivery'){
            carditCardInput.forEach( input =>{
                input.style.display = 'none';
            })
        }else{
            carditCardInput.forEach(input =>{
                input.style.display = 'block';
            })
        }
       
    })
})
console.log()

// get Year

document.getElementById("fullYear").innerHTML = new Date ().getFullYear();
