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
  skills(data.skills);
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
  for (var i = ed.length-1; i >=0 ; i--) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = ed[i][col[j]];
      }
    }
  right.appendChild(table);
}
function skills(sk){
  var h3=document.createElement("h3");
  h3.textContent="Skills";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);

  var ul=document.createElement("ul");
  right.appendChild(ul);
  for(let i=0;i<sk.length;i++){
    console.log(sk[i]);
    var li=document.createElement("li");
    li.textContent=sk[i].name;
    ul.appendChild(li);
    var ul1=document.createElement("ul");
    ul.appendChild(ul1);
    for(let j=0;j<sk[i].info.length;j++){
      let li=document.createElement("li");
      li.textContent=sk[i].info[j];
      ul1.appendChild(li);
    }
  }
}
