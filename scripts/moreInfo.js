function moreInfo(object) {
  if(document.getElementById('moreInfo').innerHTML == object.title) {
    return true;
  }
  else {
    document.getElementById('moreInfo').innerHTML = object.title;
    return false;
  }
}