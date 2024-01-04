let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newbtn = document.querySelector("#new_btn");
let msgcon = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0=true;
let cnt =0;
const win_pat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText = "O";
            box.style.color = "blue";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;
        cnt++;
        let iswin = checkwinner();

        if(cnt === 9 && !iswin){
            drawgm();
        }
    });
});

const drawgm=()=>{
    msg.innerText = "Game is Drawn";
    msgcon.classList.remove("hide");
    disbtn();
}

const checkwinner=()=>{
    for(patt of win_pat){
        let pos1 = boxes[patt[0]].innerText;
        let pos2 = boxes[patt[1]].innerText;
        let pos3 = boxes[patt[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disbtn();
            }
        }
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disbtn();
};

const disbtn = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}



const resetgame = ()=>{
    turn0 = true;
    enbbtn();
    msgcon.classList.add("hide");
}

const enbbtn = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

