function setTitle(){
var src=document.getElementById('framed');
  document.title=src;
  alert(src);
  setTimeout(setTitle, 250);
};
document.addEventListener('DOMContentLoaded', function(){
  setTitle();
});
