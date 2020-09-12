function submitreview() {
    const name = document.querySelector("#name").value;
    const review = document.querySelector("#review").value;
    if (name != "" && review != ""){
    const tablereviews = document.querySelector("#tablereviews");
    let row = tablereviews.insertRow(0);
    row.className = "userreview";
    let cell1 = row.insertCell(0);
    cell1.className = "user";
    let cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = review;
    document.querySelector("#name").value = "";
    document.querySelector("#review").value = "";
    }
    else {
        
    }
}
function startTime() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today = new Date();
    var d = today.getDate();
    month = month[today.getMonth()];
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        d + " " + month + ",  " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
function validate(e) {

    const username = "guest";
    const password = "passwd";
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#password").value;
    if (username == user && password == pass) {
        //alert("You are welcome");
        window.open("./home.html", "_self");
    } else {
        alert("Wrong username or password");
    }
    return false;
}
function registerr(){
    alert("User has been succesfully regestered. Check your email and verify your account ");
    window.open("./login.html", "_self");
}
function registerr(){
    alert("User has been succesfully regestered. Check your email and verify your account ");
    window.open("./login.html", "_self");
}