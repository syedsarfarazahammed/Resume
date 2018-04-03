function loadJSON(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readystate ===4 && xhr.status== "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text) {
  let data=json.parse(text);
  console.log(data);
})
