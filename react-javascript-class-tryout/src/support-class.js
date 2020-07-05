class Car {
  constructor( brand ) {
    this.carname = brand;
  }

  static hello(x) {
    return "Hello!!" + x.carname;
  }

  present( x ) {
    return x + ", I have a " + this.carname;
  }

  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }

  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

export {
  Car, Model
}