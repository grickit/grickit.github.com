function ajaxPostRequest(url,parameters) {
  //Not IE?
  try { var request = new XMLHttpRequest() }
  catch(e1) {
    //IE6+?
    try { request = new ActiveXObject("Msxml2.XMLHTTP") }
    catch(e2) {
      //IE5?
      try { request = new ActiveXObject("Microsoft.XMLHTTP") }
      catch(e3) {
	//No AJAX for you
	request = false
      }
    }
  }
  request.open("POST",url,true)
  request.send(parameters)
  return request
}

function parseData(data) {
  var items = data.getElementsByTagName('entry');

  for (var i = 0; i < 3; ++i) {
      var title = items[i].getElementsByTagName('title');
      var link = items[i].getElementsByTagName('link');
  }

  var output = output + '"' + title + '"<br>';
  return output;
}

request = new ajaxPostRequest("https://github.com/grickit/GambCiv/commits/master.atom","")

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.responseText != null) {
	if (window.ActiveXObject) {
	  var doc = new ActiveXObject("Microsoft.XMLDOM");
	  doc.async = "false";
	  doc.loadXML(this.responseText);
	}
	else {
	  var parser = new DOMParser();
	  var doc = parser.parseFromString(this.responseText,"text/xml");
	}

	var data = parseData(doc)
	document.getElementById("commits").innerHTML = data
      }
      else { document.getElementById("commits").innerHTML = "Loading of commits failed." }
    }
  }