
console.log("hi");

let item1 = $('#item1');
let item2 = $('#item2');
let item3 = $('#item3');
let item4 = $('#item4');
let item5 = $('#item5');
let item6 = $('#item6');
let item7 = $('#item7');
let item8 = $('#item8');
let item9 = $('#item9');

$('.add-button').click(function(event) {
	// console.log(event.target.parentElement)
	 // $('.modal-body').append(item1)
	 $('.modal-body').append(`<div>${event.target.parentElement}</div>`)	
});

