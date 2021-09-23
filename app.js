const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");


function checkLucky(sum,luckyNumber){
        if (sum%luckyNumber===0){
            output.innerText="Your Birthday is Lucky😍"  
        }else{
            output.innerText="Your Birthday is Not lucky😢"
        }
    }


function isLucky() {
  const dob = dateOfBirth.value;
  const sum = sumOfDob(dob);
  if(luckyNumber.value < 0){
    output.innerText="Negative value is not accepted"
}
else if(dob&&luckyNumber.value){
checkLucky(sum, luckyNumber.value)
}
else{
    output.innerText="Input both the values"
}
}





function sumOfDob(dob) {
  dob = dob.replaceAll("-","");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkBtn.addEventListener("click", isLucky);