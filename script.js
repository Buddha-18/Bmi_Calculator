const form=document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const result=document.querySelector('#result');


    if(height===''|| height<0 || isNaN(height)){
        result.innerHTML=`Please Give a Valid Value..`;
    }
    else if(weight===''|| weight<0 || isNaN(weight)){
        result.innerHTML=`Please Give a Valid Value..`;
    }
    else{
        //result
       let bmi=(weight/(height**2)).toFixed(2);
       result.innerHTML=`<span>Your BMI : ${bmi}</span>`;
   
    const advice=document.querySelector('#advice');
    //advice
    if(bmi<18.6){
        advice.innerHTML=`You are Underweight...Eat Healthy..`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        advice.innerHTML=`Normal BMI..Keep maintain this..`;
    }
    else{
        advice.innerHTML=`You are Overweight...Try to normal it`
    }
     }

})
