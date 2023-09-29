const getRandom = (min,max) => Math.round(Math.random() * (max - min) + min);

const compare = (num1,num2) => {
  num1 = getRandom(1,50);
  num2 = getRandom(1,50)
  if(num1 > num2){
    console.log(num1);
  }else{
    console.log(num2);
  }
};

getRandom(1,50);