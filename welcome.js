const textbox = document.getElementsByTagName('input')[0];
const submit = document.getElementsByTagName('input')[1];
let ok_1_2;
let qua_1_2 = true;
let qua_3 = true;
const allows = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "!@#$%^*()-_+[]{}:'|`~<.>/?";


window.onload = function() {
    ok_1_2 = false;
    textbox.value = get_username();
    submit.addEventListener('click', check_1_2);
    submit.addEventListener('click', check_3);
    submit.addEventListener('click', qualified_check);
    textbox.addEventListener('keypress', function (e){
        if(e.key === 'Enter'){
          check_1_2();
      }
    });
    textbox.addEventListener('keypress', function (e){
        if(e.key === 'Enter'){
          check_3();
      }
    });
    textbox.addEventListener('keypress', function (e){
      if(e.key === 'Enter'){
        qualified_check();
      }
    });
    
}
  
  
function check_1_2() {
    let text = textbox.value;
    qua_1_2 = true;
    let alert_m = "\n";
    if (text.length < 5) {
      alert_m += 'Username must be 5 characters or longer.\n';
      ok_1_2 = true;
    } else if (text.length > 40) {
      alert_m += 'Username cannot be longer than 40 chatacters.\n';
      ok_1_2 = true;
    }
  
    for (let i of text) {
      if (i === " ") {
          let m = 'Username cannot contain spaces.\n';
          if (!alert_m.includes(m)){
            alert_m += m;
        }
        ok_1_2 = true;
      } else if (i === ",") {
          let m = 'Username cannot contain commas.\n';
        if(!alert_m.includes(m)){
            alert_m += m;
        }
        ok_1_2 = true;
      } else if (i === ";") {
          let m = 'Username cannot contain semicolons.\n';
        if(!alert_m.includes(m)){
            alert_m += m;
        }
        ok_1_2 = true;
      } else if (i === "=") {
          let m = 'Username cannot contain =.\n';
        if(!alert_m.includes(m)){
            alert_m += m;
        }
        ok_1_2 = true;
      } else if (i ==="&") {
          let m = 'Username cannot contain &.\n';
        if(!alert_m.includes(m)){
            alert_m += m;
        }
        ok_1_2 = true;
      }
    }
      
    if(ok_1_2){
      alert(`${alert_m}`);
      qua_1_2 = false;
    }
}
  
function check_3() {
    qua_3 = true;
    if (!ok_1_2) {
      let error = false;
      let text = textbox.value;
      for (let i of text) {
        if (!allows.includes(i)) {
          error = true;
          qua_3 = false;
        }
      }
  
      if (error) {
        alert("Username can only use characters from the following string:" +
          "abcdefghijklmnopqrstuvwxyz" +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
          "0123456789" +
          "!@#$%^*()-_+[]{}:'|`~<.>/?"
        );
       
      }
    }
    ok_1_2=false;
}
  
function qualified_check(){
    if(qua_1_2 && qua_3){
        console.log('in');
        let text = textbox.value;
        console.log(textbox.value);
        document.cookie = `username=${text}; expires= ${hour_in_future()}`;
        window.location.href = "shut_the_box.php";
    }
}



function hour_in_future() {
    let hour_in_future = new Date();
    hour_in_future.setHours(hour_in_future.getHours() + 1);
    return hour_in_future.toUTCString();
}
  
