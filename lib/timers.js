
;(function(){
  
  var timers = []
  
  setTimeout = function(callback, ms) {
    var id
  	return id = setInterval(function(){
  	  callback()
  	  clearInterval(id)
  	}, ms)
  }

  setInterval = function(callback, ms) {
    callback.step = ms, callback.current = callback.last = 0
    return timers[timers.length] = callback, timers.length
  }

  clearInterval = function(id) {
    delete timers[id]
  }
  
  resetTimers = function() {
    timers = [], ms = 0
  }
  
  tick = function(ms) {
    for (var i = 0, len = timers.length; i < len; ++i) {
      if (timers[i])
        if ((timers[i].current += ms) - timers[i].last >= timers[i].step) {
          var times = Math.floor((timers[i].current - timers[i].last) / timers[i].step)
          print(i, times)
          timers[i].last = timers[i].current
          while (--times+1) timers[i]()
        }
    }
  }
  
})()