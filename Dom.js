document.addEventListener('DOMContentLoaded',function() {
let M=document.getElementById('colorbox');
let N=document.getElementById('changecolorbtn');
function getRandomColor() {
    
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
N.addEventListener('click', function() {
  let newColor = getRandomColor();
  M.style.backgroundColor= newColor;
});
});