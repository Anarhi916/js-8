$(document).ready(function(){

$("button").on("click", getPassword);

function getPassword(){
    var url = $('input').val();    
    var pattern = /\w+(?=\.\w+$)/gi;
    var result = url.match(pattern);
    result = result.toString();    
    result = result.replace(/o/ig , "0");
    result = result.replace(/l/ig , "1");
    result = result.replace(/i/ig , "3");
    result = result.replace(/s/ig , "5");
    result = result + randWD(4);
    $('.password').text('Ваш пароль: ' +  result); 
    
   
}

function randWD(n){  
  return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 10)) );
}
});