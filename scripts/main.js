var legz = [
  { x: -170, y: -200, z: 11, sz: 1, url: 'https://c676132.ssl.cf0.rackcdn.com/sunsoutgunsoutrrr2014-56de3e0b4c0a4.jpeg?574874356fe13' },
  { x: 350, y: -30, z: 5, sz: 1, url: 'https://i.ytimg.com/vi/gPAC8sUqOTk/maxresdefault.jpg' },
  { x: 400, y: -25, z: 3, sz: 1, url: 'https://i.ytimg.com/vi/SKGrxQ3kmRU/maxresdefault.jpg' },
  { x: 800, y: -150, z: 2, sz: 0.25, url: './images/desk.jpg' },
  { x: 308, y: 912, z: 5, sz: 0.1, url: './images/jolicoeur.jpg' }
]

var leg = legz[Math.floor(Math.random()*legz.length)]
var img = document.getElementById('image')

img.setAttribute('style', 'transform: scale(' + leg.sz +') translate(' + leg.x / 2 + 'px, ' + leg.y / 2 + 'px)')

setTimeout(function() {
  img.src = leg.url
  img.setAttribute('style', 'transform: scale(' + leg.z + ') translate(' + leg.x + 'px, ' + leg.y + 'px)')
}, 0)
