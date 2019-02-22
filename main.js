'use strict';

const speedometer = document.getElementById('speedometer')
const speedSpan = document.getElementById('speed')

// Check for API
if (!'geolocation' in navigator) {
  alert('No geolocation API available')
  speedometer.innerHTML = 'No API'
} else {
  const WID = navigator.geolocation.watchPosition( function(loc) {
    console.log(JSON.stringify(loc.coords.speed))
    //alert('speed:',loc.coords.speed)
    if (loc.coords.speed) speedSpan.innerHTML = loc.coords.speed
  })
}
