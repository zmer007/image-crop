canvas = document.getElementById('myCanvas')
mImg = document.getElementById('myImage')

var x = 0, y = 0
var beginDraw = false

function mouseDown(obj, ev){
  console.log('ev'+ev.clientX);
  x = ev.clientX
  y = ev.clientY
  beginDraw = true
  ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function mouseMove(obj, ev){
  if(beginDraw){
    ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#ff0000'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(x, y, ev.clientX - x, ev.clientY - y);
  }
}

function mouseUp(){
  beginDraw = false
}

function listRawImage(){
  fs = require('fs')
  fs.readdir('/Users/lgd/Desktop/tmp_data/raw', function(err, files){
    if(err){
      console.error(err);
    }
    files.forEach(function(file){
      console.info(file);
    })
  })
}

function loadImage(){
  mImg.src = "file:///Users/lgd/Desktop/tmp_data/raw/695307.jpg";
}
