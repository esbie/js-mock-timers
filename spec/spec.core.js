
describe 'Timers'
  describe 'setTimeout()'
    it 'should return unique ids'
      id = setTimeout(function(){}, 200)
      id2 = setTimeout(function(){}, 200)
      id3 = setTimeout(function(){}, 200)
      id2.should.eql id + 1
      id3.should.eql id2 + 1
    end
    
    it 'should not be called when ticked below the duration'
      var called = false
      setTimeout(function(){ called = true }, 200)
      tick(100)
      called.should.be_false
    end
    
    it 'should be called when ticked passed the duration'
      var called = false
      setTimeout(function(){ called = true }, 200)
      tick(200)
      called.should.be_true
    end

    it 'should be called when ticked passed the duration, even if timeout duration is 0'
      var called = false
      setTimeout(function(){ called = true }, 0)
      tick(1)
      called.should.be_true
    end
    
    it 'should be destroyed once called'
      var called = false
      setTimeout(function(){ called = true }, 200)
      tick(200)
      called.should.be_true
      called = false
      tick(200)
      called.should.be_false
    end

    it 'should call timeout once with long ticks'
      var called = 0
      setTimeout(function(){ ++called }, 200)
      tick(1000)
      called.should.eql 1
    end
  end
  
  describe 'setInterval()'
    it 'should return unique ids'
      id = setInterval(function(){}, 200)
      id2 = setInterval(function(){}, 200)
      id3 = setInterval(function(){}, 200)
      id2.should.eql id + 1
      id3.should.eql id2 + 1
    end
    
    it 'should be called when ticked passed the interval'
      var called = false
      setInterval(function(){ called = true }, 200)
      tick(100)
      called.should.be_false
      tick(100)
      called.should.be_true
      called = false
      tick(100)
      called.should.be_false
      tick(200)
      called.should.be_true
    end
    
    it 'should be destroyed when id is passed to clearInterval()'
      var called = false
      id = setInterval(function(){ called = true }, 200)
      tick(200)
      called.should.be_true
      called = false
      clearInterval(id)
      tick(400)
      called.should.be_false
    end
    
    it 'should be called several times when a multiple of the interval is ticked'
      var called = 0
      setInterval(function(){ ++called }, 200)
      called.should.eql 0
      tick(200)
      called.should.eql 1
      tick(400)
      called.should.eql 3
      tick(800)
      called.should.eql 7
      tick(300)
      called.should.eql 8
      tick(100)
      called.should.eql 9
    end
  end
end