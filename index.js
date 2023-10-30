let form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    let height=parseInt(document.querySelector('#height').value);
    // console.log(typeof(height));
    let weight=parseInt(document.querySelector('#weight').value);
    let result=document.querySelector('#result');

    if(height==='' || height<=0 || isNaN(height)){
    result.innerHTML='Please provide valid height';
}


else if(weight==='' || weight<=0 || isNaN(weight)){
    result.innerHTML='Please provide valid weight';
}

else{
let bmi=(weight/((height*height)/10000)).toFixed(2);
//Show the Result
result.innerHTML=`<span>${bmi}</span>`;
}

})