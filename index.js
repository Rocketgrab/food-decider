var listFood = [
"Panfried Snapper and veggies.",
"Mashed chicken mayo with veggies.",
"Grilled Salmon and veggies.",
"Steak and veggies.",
"Carbonara with broccoli.",
"Subway 6 inch.",
"Chicken thigh stir fry.",
"Roast veggies.",
"Miso rice and egg soup",
];

var foodItem = listFood[Math.floor(Math.random() * listFood.length)];
$("#food").html(foodItem);

// document.getElementsByClassName("button1").addEventListener("click", function(){
//   document.getElementById("food").innerHTML = foodItem;
// })

$(".button1").click(function(event) {
  var foodItem = listFood[Math.floor(Math.random() * listFood.length)];
  $("#food").html(foodItem);
});
