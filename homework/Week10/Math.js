class Math {
    constructor(array) {
      this.a = array
    }
    add(y) {
      var r = []
      var x = this
      for (var i=0; i<x.a.length; i++) {
        r[i] = x.a[i]+y.a[i]
      }
      return new Math(r)
    }
    sub(y) {
      var r = []
      var x = this
      for (var i=0; i<x.a.length; i++) {
          r[i] = x.a[i]+y.a[i]
      }
      return new Math(r)
    }
    neg() {
      var r = []
      var x = this
      for (var i=0; i<x.a.length; i++) {
          r[i] = -(x.a[i])
      }
      return new Math(r)
    }
    dot(y){
      var r = []
      var sum = 0
      var x = this
      for (var i=0; i<x.a.length; i++) {
          r[i] = x.a[i]*y.a[i]
          sum = sum + r[i]
      }
      return sum
    }
  }
var x=new Math([1,2,3]);
var nx = x.neg()
var b = x.add(nx)
var t = x.dot(x)
var y=new Math([4,5,6]);
console.log(nx);
console.log(b);
console.log(t);
console.log('x.add(y).add(y).add(x)=', x.add(y).add(y).add(x));