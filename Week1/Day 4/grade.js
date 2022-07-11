function grade(m,ex)
  {
  if (ex) {
    return m >= 90;
  }
 return (m >= 89 && m <= 100);
 }

console.log(grade("98", " "));