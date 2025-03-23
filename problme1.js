

let student = [
    {
    student1: "keval",
    score   : 85,
    rollno : 12,
    subject : "commerce"
    },
    {
        student2:"Mahesh",
        score   : 75,
        rollno : 13,
        subject : "Maths" 
    },
    {
        student3 : "Kevin",
        score    : 85,
        rollno  : 11,
        subject  : "Science"

    
       }

]



let studentname = student.map((ele)=>{
    return ele.name
})


let studentscore = student.map((ele)=>{
      return ele.score
})

let average = studentscore.reduce((curr,acc)=>{
     return curr + acc /studentname
})


let newaverage = studentscore.filter((score)=>{
    if(score>85){
        return "top performer"
    }
    else if(score<35){
        return "You are failed"
    }
})

// let sorted = studentname.sort(a,b) => return a - b


console.log(studentname)
console.log(studentscore)
console.log(average)
console.log(newaverage)
// console.log(sorted)