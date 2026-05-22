function getMessage(){
    // const year = new Date().getFullYear();
    
    // return 'The year is ' + year;
    // The year is 2026

    // return `The year is ` + year;
    // The year is 2026

    // return `The year is ${year}`;
    // The year is 2026

    return `The year is ${new Date().getFullYear()}`;
    // The year is 2026
}

console.log(getMessage());