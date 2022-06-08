function setAlert(msg, type ="danger"){
    return `<h5 class='alert alert-${type}'>${msg}</h5>`

}

function testPattern(hex_code){
    let pattern = /^(#){1}[a-f0-9]{6}$/;
   return pattern.test(hex_code);
}