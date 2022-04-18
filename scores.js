const play_again = document.getElementsByTagName('input')[0];
const force_u_OR_start_u = document.getElementsByTagName('input')[1];
const stop_u = document.getElementsByTagName('input')[2];
let timeoutID = null;
let last = null;

window.onload = function() {
  playAgain();
  force_start();
  stop();
  print();
};

function playAgain() {
  play_again.addEventListener('click', function() {
    window.location.href = "welcome.php";
  });
}

function force_start() {
  force_u_OR_start_u.addEventListener('click', function() {
    stop();
    print();
  });
}

function print() {
  timeoutID = setTimeout(print, 8000);
  const text = document.getElementsByTagName('p')[1];
  const request = new XMLHttpRequest();
  request.onload = function() {
    if (this.status === 200) {
        for(let i of this.responseText.split('\n')){
            if(!text.innerHTML.includes(i)){
                text.innerHTML +=  `${i}<br>`;
            }
        }
    }
  };
  request.open('GET', "scores.txt" + '?v=' + Math.random());
  request.send();
}

function stop() {
  stop_u.addEventListener('click', function() {
    clearTimeout(timeoutID);
  });

}
