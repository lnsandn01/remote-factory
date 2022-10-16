var params = {on: "off", msg_consumed: true};
function refreshContent() { 
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      if(this.responseText){
        params = JSON.parse(this.responseText);
      }
      console.log(params.on);
      console.log(params.msg_consumed);
   }
  };
  xhttp.open("GET", "/api/params");
  xhttp.send(); 
}

function send_on_off() { 
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      console.log("sent on_off");
   }else{
     send_on_off();
   }
  };
  xhttp.open("GET", "https://actual-factory.glitch.me/api/on_off");
  xhttp.send(); 
}