function Calculator() {
  this.read = () => {
    this.value1 = prompt("Write somethink", "0");
    this.value2 = prompt("again write something");
    this.sum = () => {
      return +this.value1 + +this.value2;
    };
    this.mul = () => {
      return this.value1 * this.value2;
    };
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
