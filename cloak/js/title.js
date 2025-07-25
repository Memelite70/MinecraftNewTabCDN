function setTitle(){
var src=document.getElementById('framed').src;
  document.title=document.getElementById('framed').src;
  setTimeout(setTitle, 250);
};
setTitle();
