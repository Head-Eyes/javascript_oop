function Student(nev)
{
    this.name = nev
    this.askedQuestionNum = 0
}
Student.prototype.askedQuestion = function(){
    console.log('???')
    this.askedQuestionNum ++
}

const stu1 = new Student('Bálint')
const stu2 = new Student('Lakatos')
console.log(stu1)
console.log(stu2)


stu1.askedQuestion()
console.log(stu1)

function StudentWithWork(nev)
{
    Student.call(this, nev)   
    this.workDone =0
}

StudentWithWork.prototype.doWork= function()
{
    this.workDone ++
}

Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype)

const stu3 = new StudentWithWork('Umbreon')
stu3.askedQuestion()
stu3.doWork()
console.log(stu3)