class Student {
  constructor(
    public firstName: string,
    private lastName: string,
    private studentAge: number,
    public studentGrade: number
  ) {}
  displayInfo() {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.studentAge} year old student with a current grade of ${this.studentGrade}%`
    );
  }
  isPassing(grade) {
    if (this.studentGrade >= grade) {
      console.log("Passing");
    } else {
      console.log("Failing");
    }
  }
}

let test = new Student("Matt", "Tucker", 18, 96);
