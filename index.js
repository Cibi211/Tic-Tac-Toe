let btnRef = document.querySelectorAll(".xo");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("newgame");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("msg");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//player X plays first
let xturn = true;
let count = 0;

//Display all buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enables popup
  popupRef.classList.remove("hide");
};
//enables all the buttons
const enableButtons=()=>{
    btnRef.forEach((element)=>{
        element.innerText="";
        element.disabled=false;
    });
    //disabled popup
    popupRef.classList.add("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
      msgRef.innerHTML = " 'X' Wins";
    } else {
      msgRef.innerHTML = " 'O' Wins";
    }
  };

  const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
  };

newgameBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});
restartBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});



//Win logic
const winChecker = () => {
  //loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];

    //Check if elements are filled
    //if 3 empty elements are same and would give win as would

    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    
    if (xturn) {
      xturn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } 
    
    else {
      xturn = true;
      //Display O
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});
window.onload = enableButtons;