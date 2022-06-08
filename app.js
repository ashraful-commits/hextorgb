const colorForm =document.getElementById('colorForm');
const invalidAlert = document.querySelector('.msg');
const resultAlert = document.querySelector('.result');



    // input hex color 
let hexCode = colorForm.querySelector('input[name="hex"]');

hexCode.oninput=()=>{
    hexText.style.borderBottom ='1px solid white';
    hexText.style.borderRadius = "5px"; 
}

    // label text 



let hexText = document.querySelector('.hexLabelText');
let rgbText = document.querySelector('.rgbLabelText');




// color input 


let color =colorForm.querySelector('input[name="color"]')
color.oninput=()=>{
    hexCode.value =color.value
}




// form submit 

colorForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // input rgb color 



    let rgbCode = colorForm.querySelector('input[name="rgb"]');
    let r_code =document.getElementById('r')
    let g_code =document.getElementById('g')
    let b_code =document.getElementById('b')
 
     
    // form validation or result 

   if(hexCode.value == ''){
        invalidAlert.innerHTML = setAlert('Hex color field is requird')
   }else if(testPattern(hexCode.value) == false){
        invalidAlert.innerHTML = setAlert('Invalid HEX COLOR code [exm:#0af0fe]','danger')
        

// final value 

    }else{
        invalidAlert.innerHTML = '';
        let hex_value = hexCode.value;
        let r =parseInt(hex_value.slice(1,3),16);
        let g =parseInt(hex_value.slice(3,5),16);
        let b =parseInt(hex_value.slice(5,7),16);
        resultAlert.value = `RGB(${r},${g},${b})`;
        rgbText.style.borderBottom = '1px solid gray';



// r/g/b code show here 


        r_code.value = r;
        g_code.value = g;
        b_code.value = b;
    }

})

