describe('this', function () {
  it('setTimeout', function (done) {
    var obj = {
      say: function () {
        setTimeout(() => {
          // this 是什么？想想为什么？
          this.should.equal(obj)
          done()
        }, 0)
      }
    }
    obj.say()
  })

  it('global', function () {
    function test() {
      // this 是什么？想想为什么？
      this.should.equal(global)
    }
    test()
  })

  it('bind undefined', function () {
    var obj = {
      say: function () {
        function _say() {
          // this 是什么？想想为什么？
          this.should.equal(global)
        }
        return _say.bind(obj)
      }()
    }
    obj.say()
  })

  it('pointing to a new object', function () {
    var obj ={};
    var temp = obj; 
    obj = {
      say: function () {
        function _say() {
          // this 是什么？想想为什么？
          this.should.equal(temp)
        }
        return _say.bind(obj)
      }()
    }
    obj.say()
  })

  it('bind normal', function () {
    var obj = {}
    obj.say = function () {
      function _say() {
        // this 是什么？想想为什么？
        this.should.equal(obj)
      }
      return _say.bind(obj)
    }()
    obj.say()
  })
})