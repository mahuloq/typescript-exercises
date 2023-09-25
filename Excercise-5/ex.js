var Student = /** @class */ (function () {
  function Student(firstName, lastName, studentAge, studentGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }
  Student.prototype.displayInfo = function () {
    console.log(
      ""
        .concat(this.firstName, " ")
        .concat(this.lastName, " is a ")
        .concat(this.studentAge, " year old student with a current grade of ")
        .concat(this.studentGrade, "%")
    );
  };
  Student.prototype.isPassing = function (grade) {
    if (this.studentGrade >= grade) {
      console.log("Passing");
    } else {
      console.log("Failing");
    }
  };
  return Student;
})();
var test = new Student("Matt", "Tucker", 18, 96);
