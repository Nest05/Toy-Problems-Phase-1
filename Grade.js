// Student Grade Generator

//Fucnction to implement correct grade 
function studentMark(mark){
// 1st 'if' condition ensures mark is within 0 and 100
    if (mark > 100 || mark < 0){
        return 'Please key in correct grade!'
    }
    else if (mark > 79){
        return 'A';
    }
    else if(mark >= 60){
        return 'B-';
    }

    else if(mark >= 49){
        return 'C-';
    }
    else if(mark >= 40)
        return 'D-';
    else if(mark < 40){
        return 'E';
    }
    
} 
console.log(studentMark(53));  
// This function is used for the prompt window on the browser
function showGrade(){
    const entGrade = parseInt( prompt ('Enter mark'));
    const studentGrade = studentMark(entGrade);
    alert(`The grade is: ${studentGrade}`);
}