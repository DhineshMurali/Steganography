var imageURI;
var decodedValue;
function readURL(input){
    var reader = new FileReader();
    reader.onload = function(e){
        //console.log(e.target.result);
        imageURI = e.target.result;
        document.getElementById('image1').src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}

function hideText(){
   // console.log(steg.encode(document.getElementById('text').value, imageURI ));
    document.getElementById('image2').src = steg.encode(document.getElementById('text').value, imageURI );
}

function decodeURL(input){
    var reader = new FileReader();
    reader.onload = function(e){
        decodedValue = steg.decode(e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
 }

 function showMessage(){
     document.getElementById('show').innerHTML = decodedValue;
 }