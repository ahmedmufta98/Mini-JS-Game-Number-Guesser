let min=1,max=10,winningNum=getWinningNum(min,max),guessesLeft=3;

const game=document.querySelector('#game'),
 minNum=document.querySelector('.min-num'),
 maxNum=document.querySelector('.max-num'),
 guessBtn=document.querySelector('#guess-btn'),
 guessInput=document.querySelector('#guess-input'),
 message=document.querySelector('.message');

 minNum.textContent=min;
 maxNum.textContent=max;
 game.addEventListener('mousedown',function(e){
     if(e.target.className==='play-again'){
         window.location.reload();
     }
 })
 guessBtn.addEventListener('click',function(){
    let guess=parseInt(guessInput.value);

    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please insert a number between ${min} and ${max}!`,'red');
    }

    if(guess===winningNum){
       gameOver(true,`${winningNum} is correct! You WIN!`);
       guessInput.disabled=true;

    }
    else{
        guessesLeft-=1;
        if(guessesLeft===0){
            gameOver(false,`GAME OVER, correct number is ${winningNum}!`);
            guessInput.disabled=true;

        }
        else{
            
            gameOver(false,`${guess} is not correct, ${guessesLeft} guesses left!`);
            guessInput.value='';
            guessInput.disabled=false;

        }
    }
 });
 function gameOver(won,msg){
     let color;
     won===true?color='green':color='red';

     guessInput.style.borderColor=color;
     message.style.color=color;
     setMessage(msg,color);
     guessBtn.value='PLAY AGAIN';
     guessBtn.className+='play-again';
 }
 function setMessage(textMsg,color){
    message.style.color=color;
    message.textContent=textMsg;
 }
 function getWinningNum(min,max){
 return Math.floor(Math.random()*(max-min+1)+min); 
}