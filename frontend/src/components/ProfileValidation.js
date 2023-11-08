function Validation(values) {
    let error = {};
    const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/


    if (values.name == "") {
        error.name = "Enter your name!"
    }
    else {
        error.name = "";
    }

    if (values.email == "") {
        error.email = "Enter your email!"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Enter a valid Email!"
    }
    else {
        error.email = "";
    }
    console.log(values.phone[0].length > 10 || values.phone[0].length < 10)
    if (values.phone == '') {
        error.phone = "Enter your contact number!"
    }
    else if (!values.phone[0].length == 10) {
        error.phone = "Enter a 10 digit phone number!"
    }

    else {
        error.phone = "";
    }

    if (values.password == "") {
        error.password = "Enter a password!"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Enter a valid password!"
    }
    else {
        error.password = "";
    }


    if (!values.confirm_pass == values.password) {
        error.confirm_pass = "Password Doesn't match"
    }
    else {
        error.confirm_pass = ""
    }

    return error;
};



export default Validation