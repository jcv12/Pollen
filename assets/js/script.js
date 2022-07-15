// need and want buttons
var needsButtonEl = document.querySelector("#save-need");
var wantsButtonEl = document.querySelector("#save-want");
// access to the list on html
var itemNeedsEl = document.querySelector("#item-needs");
var itemWantsEl = document.querySelector("#item-wants");

// creates the li and apppends to need
var createNeedItemHandler = function(event) {

  event.preventDefault();
  // GRAB THE DATA FROM THE INPUT
  var itemNameInput = document.querySelector("input[name='item-name']").value;
  var itemPriceInput = document.querySelector("input[name='item-price']").value;

  if(!itemNameInput || !itemPriceInput) {
    alert("Please fill out all of the form");
    return false;
  }

  var needsItemEl = document.createElement("li");
  needsItemEl.className = "task-item";
  
  var itemInfoEl = document.createElement("div");
  itemInfoEl.className = "task-item";
  itemInfoEl.innerHTML = "<h3 class='item-name'>" + itemNameInput + "</h3><span class='task-type'>" + itemPriceInput + "</span>";

  needsItemEl.appendChild(itemInfoEl);

  itemNeedsEl.appendChild(needsItemEl);
};


// creates the li and appens to the wants
var createWantItemHandler = function(event) {

  event.preventDefault();
  //GRAB THE DATA FROM THE INPUT
  var itemNameInput = document.querySelector("input[name='item-name']").value;
  var itemPriceInput = document.querySelector("input[name='item-price']").value;

  if (!itemNameInput || !itemPriceInput) {
    alert("Please fill out all of the form");
    return false;
  }

  var wantsItemEl = document.createElement("li");
  wantsItemEl.className = "task-item";

  var itemInfoEl = document.createElement("div");
  itemInfoEl.className = "task-item";
  itemInfoEl.innerHTML = "<h3 class='item-name'>" + itemNameInput + "</h3><span class='task-type'>" + itemPriceInput + "</span>";

  wantsItemEl.appendChild(itemInfoEl);

  itemWantsEl.appendChild(wantsItemEl);
};

// on click it creates the li and append
needsButtonEl.addEventListener("click", createNeedItemHandler);
wantsButtonEl.addEventListener("click", createWantItemHandler);