function fun1() {
    var content = document.getElementById('input1')
    var c1 = content.value
    var content2 = document.getElementById('input2')
    var c2 = content2.value
    console.log(c1, c2);
    var check = [
        {
            user_name: "mano",
            Password: 123456
        },{user_name:"vasu",
            Password:4567}]

    let conf = false

    for (let i of check) {
        if (i.user_name == c1 && i.Password == c2) {
            conf = true
            break
        }
    }
    if (conf) {
        alert("login successful");
    }
    else if (conf == false) {
        alert("login unsuccewssful");
    }
}

