function loadJSON(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState ===4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

loadJSON("data.json",function(text) {
  let data=JSON.parse(text);
  console.log(data.education);
  career(data.career);
  edu(data.education);

})

var right= document.querySelector(".content");

function career(car){
  var h3=document.createElement("h3");
  h3.textContent="Career Objective";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  right.appendChild(p);
}

function edu(ed){
  var h3=document.createElement("h3");
  h3.textContent="Educational Details";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);

  var col = [];
          for (var i = 0; i < ed.length; i++) {
              for (var key in ed[i]) {
                  if (col.indexOf(key) === -1) {
                      col.push(key);
                  }
              }
          }
  var table = document.createElement("table");
  var tr = table.insertRow(-1);                   // TABLE ROW.
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      // TABLE HEADER.
    th.innerHTML = col[i];
    tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < ed.length; i++) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = ed[i][col[j]];
      }
    }
  right.appendChild(table);

}
