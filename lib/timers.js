
;(function(){
  
  var timers = [], ms = 0
  
  setTimeout = function(callback, n) {
    var id
  	return id = setInterval(function(){
  	  callback()
  	  clearInterval(id)
  	}, n)
  }

  setInterval = function(callback, n) {
    callback.n = n, callback.last = null
    return timers[timers.length] = callback, timers.length
  }

  clearInterval = function(id) {
    if (timers[id])
      delete timers[id]
  }
  
  tick = function(n) {
    ms += n
    for (var i = 0, len = timers.length; i < len; ++i) {
      if (timers[i] && (!timers[i] || ms - timers[i].last >= timers[i].n)) {
        timers[i].last = ms
        timers[i]()
      }
    }
  }
  
})()