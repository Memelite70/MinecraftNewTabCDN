function setTitle(){
var src=document.getElementById('framed').src;
  document.title=document.getElementById('framed').contentDocument.title;
  setTimeout(setTitle, 250);
};
setTitle();
