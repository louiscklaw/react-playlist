import React from 'react';

import {Car, Model} from './support-class'

function App() {
  let mycar = new Car('toyota')
  let myAnotherCar = new Model("Ford","Mustang")

  // Methods
  console.log(mycar.present('hello'))

  // Static Methods
  console.log(Car.hello(mycar))

  // Inheritance
  console.log(myAnotherCar.show())
  console.log(myAnotherCar.present("blablabla"))

  // getters and setters
  console.log(mycar.cnam)
  mycar.cnam = 'new toyota'
  console.log(mycar.carname)

  return (
    <div className="App">
      helloworld

    </div>
  );
}

export default App;
