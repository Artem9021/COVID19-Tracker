window.onload = async function() {
window.onscroll=function() {myFunction()};

    const res = await fetch('https://covid19.mathdro.id/api');
    const data = await res.json();
    // get data using an API
    confirmed  = document.getElementById("confirmed");
    confirmed.innerHTML=(data.confirmed.value);
   // console.log(data.confirmed.value)
    active = document.getElementById("active")
    active.innerHTML=(parseInt(data.confirmed.value)-parseInt(data.deaths.value)-parseInt(data.recovered.value))

    deaths  = document.getElementById("deaths");
    deaths.innerHTML=(data.deaths.value);
    
    recovered  = document.getElementById("recovered");
    recovered.innerHTML=(data.recovered.value);

     
}


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var myBar = document.getElementById ("myBar")

myBar.style.width = scrolled + "%";
}




