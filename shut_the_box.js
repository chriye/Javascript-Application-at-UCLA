// "Roll dice" button
const roll = document.getElementsByTagName('input')[0];
// "Submit box selection" button
const submit = document.getElementById("submit");
// all inputs
const inputs = document.getElementsByTagName('input');
// quit button
const quit = document.getElementById('quit');
// span
const span = document.getElementsByTagName('span')[0];
// numbers correspond to checkboxes
const check_num = document.getElementsByTagName('td');
// roll a die
let die = false;
// sum up 1 to 9 (1+2+3+...+9 = 45)
const sum1to9 = 45;


window.onload = function() {
	// check/uncheck checkboxes by number
  func1();

  // roll dice
  addDiceRollEvent();

  // enable/disable Submit and Roll buttons
  func3();

  // check sum of box if match sum
  func4();
  
  // quit
  func7();
}


// check/uncheck boxes by clicking corresponding number
function func1() {
  for (let i = 0; i <= 8; ++i) {
    	check_num[i].addEventListener('click', function() {
        // if box is disabled, can't check/uncheck by clicking number
      	if(!inputs[i + 1].disabled){
        	inputs[i + 1].checked = !inputs[i + 1].checked;
        }
    	});
  }
}


// roll dice
function func2() {
  // 2 dice outcomes
  let dice_1 = Math.floor(Math.random() * 6) + 1;
  let dice_2 = Math.floor(Math.random() * 6) + 1;
  // sum of 2 dice
  let sum = dice_1 + dice_2;
  // show after 'Result:'
  let result;
  if (die){ // roll a die
  	result = `${dice_1}`;
  } else{ // roll 2 dice
  	result = `${dice_1} + ${dice_2} = ${sum}`;
  }
  return result;
}

// either 'Roll dice' or 'Submit box selection' is disabled
function func3() {
  // default
  roll.disabled = false;
  submit.disabled = true;

  // disable Roll if Submit is clicked
  roll.addEventListener('click', function() {
    submit.disabled = !submit.disabled;
    roll.disabled = !roll.disabled;
  });

  // disable Submit if Roll is clicked
  submit.addEventListener('click', function() {
    roll.disabled = !roll.disabled;
    submit.disabled = !submit.disabled;
  });
}


// get the result of die/dice
function addDiceRollEvent() {
  roll.addEventListener('click', function() {
    // check if use a die/ dice
  	func6();
    // set the Result
    span.innerHTML = func2();
  });
  return span.innerHTML;
}


// get sum from Result in Number type
function sum_dice() {
  // assign the result from addDiceRollEvent()
  const result = addDiceRollEvent();
  // sum of dice/die
  let sum_d;
  if(die){ // roll a die
  	sum_d = result;
  } else{ // roll dice
  	sum_d = result.split('= ')[1];
  }
  // string to number
  return Number(sum_d);
}


// get sum of checked box number
function sum_boxes() {
  // sum up checked box number
  let sum_b = 0;
  for (let i = 1; i <= 9; ++i) {
    if (inputs[i].checked) {
      sum_b += i;
    }
  }
  return sum_b;
}


// submit click: alert if sum of check box num doesn't match to sum of Result
//               else then disabled check box and empty Result
function func4() {
  submit.addEventListener('click', function() {
    if (sum_dice() !== sum_boxes()) {
      notMatch();
    } else if (sum_dice() === sum_boxes()) {// success
      func5();
      // empty the result
      span.innerHTML = "";
    }
  });
}


//show dice sum deos not match box num and reset buttons disablity
function notMatch() {
  alert("The total of the boxes you selected does not match the dice roll." +
        "Please make another selection and try again.");
  // reset Roll and Submit button
  roll.disabled = true;
  submit.disabled = false;
}


// uncheck and disabled used checkboxes
function func5() {
  for (let i = 1; i <= 9; ++i) {
  	// uncheck and disable used boxes
    if (inputs[i].checked) {
      // uncheck box
      inputs[i].checked = false;
      // disabled bpx
      inputs[i].disabled = true;
    }
   }
}


// sum of used box number
function sum_dis_box(){
  // sum of disabled box number
	let sdb = 0;
	for (let i = 1; i <= 9; ++i){
  	if(inputs[i].disabled){
    	sdb += i;
    }
  }
  return sdb;
}


// decide wether use a die
function func6(){
  // sum of unused check box nnum
  let uncheckSum = sum1to9 - sum_dis_box();
  if(uncheckSum <= 6){
    // use a die
  	die = true;
  }
}


// give up
function func7(){
	quit.addEventListener('click', disAll);
}


// disable all buttons and show score
function disAll(){
	roll.disabled = true;
  submit.disabled = true;
  quit.disabled = true;
  let score = sum1to9 - sum_dis_box();
  alert(`Your score is ${score}`);

  const request = new XMLHttpRequest();
  request.onload = function(){
    if(this.status === 200){
      window.location.href = "scores.php";
    }
  };

  request.open('POST', 'score.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(`username=${get_username()}&score=${score}`);

}


