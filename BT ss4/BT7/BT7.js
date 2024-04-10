let phoneBooks = [];
let addContract = (name,email,phoneNumbers,phoneBooks) => {
    let obj = {
        name: name,
        email: email,
        phoneNumbers: phoneNumbers,
        getName: addContract(),
        display: displayContact()
    };
    phoneBooks.push(obj)
}
let displayContact = (phoneBooks) => {
    return console.log(phoneBooks);
}

