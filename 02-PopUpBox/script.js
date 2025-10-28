// alert will show a box that only alert user
alert('Hello World!');

// prompt has a text box that allows user to input
var nama = prompt("Please Enter your name:");
alert('Hello ' + nama);

// confirm if asking user to confirm if the statement is true (ok) or false (cancel)
var test = confirm("Are you sure your name is " + nama);
if(test === true){
    alert("User is defintely " + nama);
}
else{
    alert("Who da heck are you!");
}
