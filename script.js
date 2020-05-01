
function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent
inp.select();
document.execCommand('copy',false);
//alert(inp.value);
 window.getSelection().empty();
$('input').addClass('popclass').css({"background-color": inp.value, "color": "white"}).show();
setTimeout(function(){inp.remove();},1000);

}
