function fn1() {
  var input = 
  document.getElementById("userInput").value;
  document.getElementById("output").innerHTML  = input;
}
<script>
function fn1()
{
var newInput = document.getElementById("userInput").value;
if (newInput == null || newInput == "") {
alert("Please request a song");
}else{
    alert("Thank you!");
}

</script>







