let count = 0;

document.getElementById('Increase').onclick = function(){count++
  document.getElementById('counter').innerHTML= count
}
document.getElementById('decrease').onclick = function(){count--
  document.getElementById('counter').innerHTML= count
}
document.getElementById('reset').onclick = function(){count=0
  document.getElementById('counter').innerHTML= count
}