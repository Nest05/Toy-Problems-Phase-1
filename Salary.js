// Net salary calculation
// Net salary = Gross pay - TAX
// PAYE function
// NHIF function
// NSSF function
// Net Salary function


function knowPaye(salary){
  if (salary <= 24000){
    return salary * 0.1;
  }
  else if(salary => 24001){
    return salary * 0.25;
  }
  else if(salary => 32334){
    return salary * 0.3;
  }
  else if(salary => 500001){
    return salary * 0.325;
  }
  else{
    return salary * 0.35;
  }

}

function knowNssf(salary){
    return salary * 0.06;
}

function knowNhif(salary){
    if (salary <= 5999){
        return 150;
    }
    else if (salary <= 7999){
       return 300;
    }
    else if (salary <= 11999){
        return 400;
    }else if (salary <= 14999){
        return 500;
    }else if (salary <= 19999){
        return 600;
    }else if (salary <= 24999){
        return 750;
    }else if (salary <= 29999){
        return 850;
    }else if (salary <= 34999){
        return 900;
    }else if (salary <= 39999){
        return 950;
    }else if (salary <= 44999){
        return 1000;
    }else if (salary <= 49999){
        return 1100;
    }else if (salary <= 59999){
        return 1200;
    }else if (salary <= 69999){
        return 1300;
    }else if (salary <= 79999){
        return 1400;
    }else if (salary <= 89999){
        return 1500;
    }else if (salary <= 99999){
        return 1600;
    }else{
        return 1700;
    }

}


function netSalaryReceived(){
    const baseSalary = prompt ('Key in your Base Salary',);
    const benefits = prompt ('Key in your benefits',);
    const grossSalary = parseInt(baseSalary) + parseInt(benefits);
    const nestSalary = grossSalary - (knowPaye(grossSalary) + knowNhif(grossSalary) + knowNssf(grossSalary));
    alert (`Your Net Salary is: ${nestSalary}`);
}

