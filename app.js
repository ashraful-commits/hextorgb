const colorForm =document.getElementById('colorForm');
const invalidAlert = document.querySelector('.msg');
const resultAlert = document.querySelector('.result');

    // input hex color 
let hexCode = colorForm.querySelector('input[name="hex"]');
    // label text 
let hexText = document.querySelector('.hexLabelText');
let rgbText = document.querySelector('.rgbLabelText');

hexCode.oninput=()=>{
     hexText.style.borderBottom ='1px solid gray'
     hexText.style.backgroundColor =hexCode.value;
     hexText.style.borderRadius = "5px";
    
}


// form submit 

colorForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // input rgb color 
    let rgbCode = colorForm.querySelector('input[name="rgb"]');
     
    // form validation or result 

   if(hexCode.value == ''){
        invalidAlert.innerHTML = setAlert('Hex color field is requird')
   }else if(testPattern(hexCode.value) == false){
        invalidAlert.innerHTML = setAlert('Invalid HEX COLOR code [exm:#0af0fe]','danger')
    }else{
        invalidAlert.innerHTML = '';
        let hex_value = hexCode.value;
        let r =parseInt(hex_value.slice(1,3),16);
        let g =parseInt(hex_value.slice(3,5),16);
        let b =parseInt(hex_value.slice(5,7),16);
        resultAlert.value = `rgb(${r},${g},${b})`;
        rgbText.style.borderBottom = '1px solid gray';
        rgbText.style.backgroundColor = hexCode.value;
        rgbText.style.borderRadius = "5px";
    }

})

