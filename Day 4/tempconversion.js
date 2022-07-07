function farCel(fahrenheit) 
{
  var far = fahrenheit;
  var fc = (far - 32) * 5 / 9;
  var ans = far+'\xB0F is ' + fc + '\xB0C.';
    console.log(ans);
} 
function celFar(celsius)
  {
    var cel = celsius;
    var cf = cel * 9 / 5 + 32;
    var ans = cel+'\xB0C is ' + cf + ' \xB0F.';
      console.log(ans);
  }
  

  celFar(9);
  farCel(65);