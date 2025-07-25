function setTitle(){
var src=document.getElementById('framed');
  document.title=src;
  alert(src);
  setTimeout(setTitle, 250);
};
setTitle();
