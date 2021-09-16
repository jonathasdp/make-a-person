var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  /* Utilizando closure para limitar o escopo das váriaveis para o construtor, deste modo, as variáveis
     podem ser apenas acessadas e modificadas pelo construtor ou por funções dentro do construtor. */

  let firstName;
  let lastName;

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return firstName + " " + lastName;
  };
  this.setFirstName = function (first) {
    firstName = first;
  };
  this.setLastName = function (last) {
    lastName = last;
  };
  this.setFullName = function (firstAndLast) {
    let names = firstAndLast.split(/\s/);
    this.setFirstName(names[0]);
    this.setLastName(names[1]);
  };

  this.setFullName(firstAndLast);
};

var bob = new Person("Bob Ross");
bob.getFullName();
