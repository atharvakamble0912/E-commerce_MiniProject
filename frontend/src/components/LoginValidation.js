function Validation(values) {
    let error = {};
    const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/


    if (values.email === "") {
        error.email = "Enter a email!"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Enter a valid Email!"
    }
    else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Enter a password!"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Enter a valid password!"
    }
    else {
        error.password = "";
    }
    return error;


};



export default Validation