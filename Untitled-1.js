// function g(t) {
//   this.name = t;
// }
// let obj1 = new g("hamda");
// let obj2 = new g("hamda");
// g.prototype.valueOf = function () {
//   return this.name;
// };
// console.log(obj1);
// if (obj1.valueOf() == obj2.valueOf()) {
//   console.log("dddddddddddddddddddd");
// } else {
//   console.log("not equal");
// }

// // Old
// function rectangle(h, w) {
//   this.width = w;
//   this.height = h;
//   rectangle.count++;
// }
// rectangle.count = 0;
// rectangle.prototype.area = function () {
//   return this.width * this.height;
// };

// rectangle.prototype.perimeter = function () {
//   return (this.width + this.height) * 2;
// };

// rectangle.prototype.tostring = function () {
//   document.write(
//     `<br> the area is
//         ${this.area()}
//         <br>
//         the perimeter is
//         ${this.perimeter()}
//         `
//   );
// };
// rectangle.prototype.getcount = function () {
//   return rectangle.count;
// };
// let rec = new rectangle(12, 4);
// rec.tostring();
// console.log(rec.getcount());

// let rec3 = new rectangle(122, 3);
// rec3.tostring();
// console.log(rec3.getcount());

// let rec2 = new rectangle(1442, 3);
// rec2.tostring();

// console.log(rec2.getcount());

// // console.log(rec.getcount());

// //new

// class rectangle {
//   constructor(W, H) {
//     this.width = W;
//     this.height = H;
//     rectangle.count++;
//   }
//   static count = 0;
//   area() {
//     return this.width * this.height;
//   }
//   perimeter() {
//     return (this.width + this.height) * 2;
//   }
//   getcount() {
//     return rectangle.count;
//   }
// }
