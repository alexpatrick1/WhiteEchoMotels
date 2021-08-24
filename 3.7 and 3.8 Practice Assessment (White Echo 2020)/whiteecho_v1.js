// JavaScript Document
alert("JS IS ATTACHED");
var totalCost;
var breakfastTotal = 0;
var checkedAddItems;
var price = 0;

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function updateRoom() {
	alert('Update Room');
	var room = this.dataset.name;
	alert(room);
	price = this.dataset.price;
	alert(price);
	roomOutput.innerHTML = room;
	priceOutput.innerHTML = price;
}

function updateBooking() {
	var addItems = document.getElementsByClassName('addCheck');
	var checkAddItems = [];
	var addCost = 0
	for (var i = 0; i < addItems.length; i++) {
		if (addItems[i].checked) {
			checkedAddItems.push(' ' + addItems[i].value);
			alert(checkAddItems);
			addCost += Number(addItems[i].dataset.price);
			alert(addCost);
		}
	}
	var checkIn = document.getElementById("checkInDate").value;
	var numberNights = document.getElementById("numberNights").value;
	alert("Number of Nights" + numberNights);
	alert("Check In" + checkIn);
	totalCost = addCost + price * numberNights;
	alert("Total Cost " + totalCost);
	document.getElementById("checkInDateOutput").innerHTML = checkIn;
	document.getElementById("totalPriceOutput").innerHTML = "$" + totalCost;
	document.getElementById("numberOfNightsOutput").innerHTML = numberNights;
	document.getElementById("extraOutput").innerHTML = checkAddItems;
}
var allInputs = document.querySelectorAll('input');
for (var i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('input', updateBooking);
}
var roomInputs = document.getElementsByClassName('roomCard');
for (i = 0; i < roomInputs.length; i++) {
	roomInputs[i].addEventListener('click', updateBooking);
}