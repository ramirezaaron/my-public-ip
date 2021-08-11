window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  
    var btn = document.getElementById("copy-address"); 
    btn.addEventListener("click", (evt) => {
        var input = document.querySelector("#hidden-ip-address");
        input.select();
        input.setSelectionRange(0, 99999)
        document.execCommand("copy");
        console.log(input.value);

        btn.innerText = "Copied";
        setTimeout(() => { btn.innerText = "Copy"; }, 3000); 
    });

    fetch("https://publicip.pielusa.fun/")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("ip-address").innerHTML = data.ip;
      document.querySelector("#hidden-ip-address").value = data.ip;
    });
  }
