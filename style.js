userChoiceMsg='You have chosen Ball'
    randomNumber=Math.random()*3;
   // let computerChoice;
    if(randomNumber>0 && randomNumber <=1){
         computerChoice ='Bat';
       // console.log('computer choice is Bat');
    }else if(randomNumber >1 && randomNumber <=2){
         computerChoice='Ball';
        //console.log('computer choice is Ball');
    }else{
         computerChoice ='Stump'
      //  console.log('computer choice is Stump');
    }
    computerChoiceMsg='Computer Choice is ${computerChoice}';
   // let resultMsg;
    if(computerChoice ==='Ball'){
        resultMsg=`It's a tie`;
    }else if(computerChoice==='Bat'){
        resultMsg='Computer has Won';
    }else if(computerChoice==='Stump'){
        resultMsg='User won.';
    }
    alert(`You have chosen Ball. Computer choice is ${computerChoice} and ${resultMsg}`);
    