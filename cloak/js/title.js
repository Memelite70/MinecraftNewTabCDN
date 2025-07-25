function setTitle(){
var src=document.getElementById('framed').src;
  document.title=src;
  alert(src);
  setTimeout(setTitle, 250);
};
setTitle();
