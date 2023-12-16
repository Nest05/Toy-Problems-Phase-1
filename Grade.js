// Student Grade Generator

function studentMark(mark){
    if (mark > 79){
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
    else {
        return 'E';
    }
} 
console.log(studentMark(53));  