let iron = document.querySelector(".history-table").innerHTML;
localStorage.setItem("tt",iron);
function ld(){
    if(localStorage.tt!=undefined)
    document.querySelector(".history-table").innerHTML = localStorage.tt;
}
function date(){
    var dt = new Date();
    var dt_date = dt.getDate();
    var dt_month = dt.getMonth();
    var dt_year = dt.getFullYear();
    var ft_date = dt_date +'-'+ (dt_month+1)+'-' + dt_year;
    return ft_date;
}
function time(){
    var dt = new Date();
    var dt_hours = dt.getHours();
    var dt_minutes = dt.getMinutes();
    var dt_seconds = dt.getSeconds();
    var ft_time = dt_hours+':' + dt_minutes+':'+ dt_seconds;
    return ft_time;
}
//using session storing history and then using it to help in search terms
function x(){
    let term = document.querySelector("#link").value;
    let a = document.createElement("a");
    if (term.indexOf('https://') > -1){
        a.href=term;
    }
    else{
        a.href="https://"+term;
    }
    a.target="_blank";
    if(term!=(""&&"https://")){
        a.click();
        document.querySelector(".history-table").innerHTML+="<tr><td>"+date()+"</td><td>"+time()+"</td><td>"+"Visited a link"+'</td><td><a href="'+a.href+'" target="_blank">&#128073;&#127995;</a></td></tr>';
        localStorage.tt = document.querySelector(".history-table").innerHTML;
    }
}
function a(){
    let term = document.querySelector("#x").value;
    let a = document.createElement("a");
    a.href="https://www.google.com/search?q="+term;
    a.target="_blank";
    if(term!=""){
        a.click();
        document.querySelector(".history-table").innerHTML+="<tr><td>"+date()+"</td><td>"+time()+"</td><td>"+term+'</td><td><a href="'+a.href+'" target="_blank">&#128073;&#127995;</a></td></tr>';
        localStorage.tt = document.querySelector(".history-table").innerHTML;
    }
}
function b(){
    let term = document.querySelector("#x").value;
    let a = document.createElement("a");
    a.href="https://www.youtube.com/results?search_query="+term;
    a.target="_blank";
    if(term!=""){
        a.click();
        document.querySelector(".history-table").innerHTML+="<tr><td>"+date()+"</td><td>"+time()+"</td><td>"+term+'</td><td><a href="'+a.href+'" target="_blank">&#128073;&#127995;</a></td></tr>';
        localStorage.tt = document.querySelector(".history-table").innerHTML;
    }
}
function c(){
    let term = document.querySelector("#x").value;
    let a = document.createElement("a");
    a.href="https://en.wikipedia.org/wiki/"+term;
    a.target="_blank";
    if(term!=""){
        a.click();
        document.querySelector(".history-table").innerHTML+="<tr><td>"+date()+"</td><td>"+time()+"</td><td>"+term+'</td><td><a href="'+a.href+'" target="_blank">&#128073;&#127995;</a></td></tr>';
        localStorage.tt = document.querySelector(".history-table").innerHTML;
    }
}
function d(){
    let term = document.querySelector("#x").value;
    let a = document.createElement("a");
    a.href="https://www.google.com/search?q="+term;
    a.target="_blank";
    let b = document.createElement("a");
    b.href="https://www.youtube.com/results?search_query="+term;
    b.target="_blank";
    let c = document.createElement("a");
    c.href="https://en.wikipedia.org/wiki/"+term;
    c.target="_blank";
    if(term!=""){
        a.click();
        b.click();
        c.click();
        document.querySelector(".history-table").innerHTML+="<tr><td>"+date()+"</td><td>"+time()+"</td><td>"+term+' (Search all)'+'</td><td><a href="'+a.href+'" target="_blank"><img src="img/g.jpg"></a> , <a href="'+b.href+'" target="_blank"><img src="img/yt.jpg"></a> , <a href="'+c.href+'" target="_blank"><img src="img/wiki.png"></a></td></tr>';
        localStorage.tt = document.querySelector(".history-table").innerHTML;
    }
}
function cl(){
    let z = confirm("Are you sure to clear your history?")
    if(z){
        document.querySelector(".history-table").innerHTML="<tr><th>Date</th><th>Time</th><th>Search History</th><th>Click to open link</th></tr>";
        localStorage.tt = document.querySelector(".history-table").innerHTML;
    }
}