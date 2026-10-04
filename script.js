// copy of PART 2 FUNCTIONS
function showText(text) {
  return text;
}

// FUNCTION RUN ONLY ONCE TIME 
function once(fn) {
  let done = false;
  let result;
  return function(){
    if (!done) {
      result = fn();
      done = true;
    }
    return result;
  };
}

// WHEN USER ENTER TEXT IT RETURN TEXT IF USER ENTER '' IT RETURNS PLEASE TYPE SOMETHING
// TRIM REMOVE SPACES FROM THE BEGINNING AND END
function showText(text) {
  if (text.trim() === '') {
    return 'Please type something';
  }
  return text;
}

//TOGGLE TAKE TRUE OR FALSE VALUE
function makeToggle() {
  let isOn = false;
  return function () {
    isOn = !isOn;
    return isOn;
  };
}

// ADD NEW ITEM TO ARRAY
function addItem(list, item) {
  return [...list, item];
}

//  CHECK THE GUESS NUMBER 
function check(secret, guess) {
  secret = 7 ;
    if (guess > secret) return 'Too high';
  if (guess < secret) return 'Too low';
  return 'Correct';
}



  //TASK 1
  // WHEN WE CLICK THE BUTTON THE TEXT IS CHANGE WITH NEW TEXT WHAT WE HAVE GIVEN.
  const Hello = document.getElementById("Hello");
  const changebtn = document.getElementById("changebtn");

  changebtn.addEventListener("click", () => {
    Hello.textContent = "Hi Deep";
  });



// TASK 2
//  WHEN WE CLICK THE BUTTON AND THE TEXT IS GIVEN SO IT PRINT OTHERWISE IT PRINT PLEASE TYPE SOMETHING
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

console.log(output);
console.log(button);
console.log(text);

        button.addEventListener("click", function () {
          output.textContent = showText(text.value);
       });


// TASK 3 
// WHEN WE CLICK THE  BUTTON AND THE TEXT IS NORMAL SO IT CONVERT INTO RED AND WHEN THE TEXT IS RED IT CONVERT INTO NORMAL TEXT .
const toggletext = document.querySelector("#toggletext");
const togglebutton = document.querySelector("#togglebutton");

console.log(toggletext);
console.log(togglebutton);

const toggle = makeToggle();

togglebutton.addEventListener("click", function () {
  const isRed = toggle();

  if (isRed) {
    toggletext.classList.add("red");
  } else {
    toggletext.classList.remove("red");
  }
});



// TASK 4
// WHEN CLICK THE BUTTON AND NOT GIVE THE INPUT TEXT SO RETURN LI(.) AND WHEN GIVE THE INPUT TEXT SO THAT PRINT. 
const addInput = document.querySelector("#input");
const addbutton = document.querySelector("#addbutton");
const list = document.querySelector("#list");

console.log(addInput);
console.log(addbutton);
console.log(list);

let items = [];

addbutton.addEventListener("click", function () {
  items = addItem(items, addInput.value);

  list.innerHTML = "";

  for (const item of items) {
    const li = document.createElement("li");

    li.textContent = item;

    list.appendChild(li);
  }

  addInput.value = "";
});



// TASK 5
// DO THE GUESS NUMBER. WHEN NUMBER > SECRET NUMBER THEN PRINT TOO HIGH . OR. NUMBER < SECRET NUMBER THEN PRINT TOO LOW. AND NUMBER = SECRET NUMBER THEN PRINT CORRECT
const secretinput = document.querySelector("#secretinput");
const checkbutton = document.querySelector("#check");
const show = document.querySelector("#show");

console.log(secretinput);
console.log(checkbutton);
console.log(show);

const secret = 7;

function check(secret, guess) {
  return guess === secret;
}

checkbutton.addEventListener("click", function () {
  const guess = Number(secretinput.value);

  show.textContent = check(secret, guess);
});