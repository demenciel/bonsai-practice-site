var monthly="19 ";
var yearly="220 ";

var month = " /month"
var year = " /year"

$("label.switch input[type=checkbox]").change(function() {
    $(".price").text(this.checked?yearly:monthly);
    $(".month-to-year").text(this.checked?year:month);
});

var monthlyPlus="29 ";
var yearlyPlus="340 ";

var monthPlus = " /month"
var yearPlus = " /year"

$("label.switch input[type=checkbox]").change(function() {
    $(".price-plus").text(this.checked?yearlyPlus : monthlyPlus);
    $(".month-to-year-plus").text( this.checked?yearPlus:monthPlus);
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

