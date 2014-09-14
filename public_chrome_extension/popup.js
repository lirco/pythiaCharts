( function() {

  var xmlhttp = new XMLHttpRequest;

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET","http://localhost:3000/chrome",true);
  xmlhttp.send();

}());

