function colorirDia(){
   let days = document.getElementById('day').value;
   let color = document.getElementById('color').value;
   let calendar = document.getElementById('calendar');
   let td = calendar.getElementsByTagName('td')[(parseInt(days))];

   td.style.backgroundColor = color;

   if (parseInt(days) > 30) {
      alert("Data indisponível.");
      return; 
  }
  if (parseInt(days) <= 0) {
   alert("Data indisponível.");
}
}
