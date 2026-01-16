class Student{
    constructor(name)
    {
        this.name = name
        this.askedQuestionNum = 0
    }
    askedQuestion()
    {
        this.askedQuestionNum ++
    }
}

const stu1 = new Student('Bálint')
stu1.askedQuestion()
console.log(stu1)

class StudentWithWork extends Student{
    constructor(name)
    {
        super(name)
        this.workDone = 0
    }
    doWork()
    {
        this.workDone++
    }
}

const stu2 = new StudentWithWork('aaa')
stu2.doWork()
console.log(stu2)