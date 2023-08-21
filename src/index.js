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