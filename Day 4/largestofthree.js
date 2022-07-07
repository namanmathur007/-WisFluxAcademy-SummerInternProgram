function largestofthree(a, b, c) 
{
  maxx = 0;
  if (a > b)
  {
    maxx = a;
  } 
  else
  {
    maxx = b;
  }
  if (c > maxx) 
  {
    maxx = c;
  }
  return maxx;
}

console.log(largestofthree(7,89,111));
