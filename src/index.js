// template
// {
/* <div>
  <input [(ngModel)]=""/>
</div> */
// }

// component class
// class UIComponent {
//   @Input() test;

//   focusInput(){
//     this.input.focus();
//   }
// }

function xtends(A, B) {
  // 1. new class's prototype inherits from A
  const tmp = Object.create(A.prototype);

  // 2. 'A' constructor applied whenever creating an instance of the nwe class
  tmp.constructor = function () {
    A.apply(this, arguments);
    B.constructor.apply(this, arguments);
  };

  tmp.constructor.prototype = tmp;

  // 3. we have all the methods from object on the new class
  for (let prop in B) {
    if (B.hasOwnProperty(prop)) {
      tmp[prop] = B[prop];
    }
  }

  return tmp.constructor;
}

function A() {
  this.name = "";
}
A.staticField = "someValue";
A.prototype.getName = function () {
  return this.name;
};
console.log("A: ", A.constructor === Object);
const B = xtends(A, {
  constructor() {},
  bMethod: function () {}
});

console.log(B.staticField);

const b = new B();
console.log(b instanceof A === true);
console.log(b instanceof B === true);
