//Chapter#21 : Changing Case

//Q.1:
// var task1 = prompt("Enter a value");
// alert(task1 = task1.toUpperCase())

//Q.2:
// var task2 = prompt("Enter a value");
// alert(task2 = task2.toLowerCase())

//Chapter#22 : Strings Measuring length and extracting parts

//Q.1:
// var task3 = prompt("Enter a Word")
// document.write("<h1>"+"Your Word length is: "+task3.length+"</h1>")

//Q.2:
// var task4 = prompt("Enter a Word");
// var a = task4.length;
// document.write("<h1>"+"Your Last character is: " + task4.slice(a - 1) +"</h1>")

//Chapter#23 : Strings Finding segments

//Q.1:
// var task5 = "Pakistani"
// var b = task5.indexOf("n")
// alert(b)

//Q.2:
// var username = prompt("Enter your name");
// var store = username;
// if (username == "@" && "!" && "$" && "%"){
//     alert("Enter a valid name")
// }

//Q.3:
// var sent = "The quick brown fox jumps over the lazy dog";
// var len = sent.length;
// var c = sent.indexOf("The");
// var d = sent.lastIndexOf("the");
// alert(sent)
// alert("The find at location: " + c)
// alert("The find at location: " + d) 

//Chapter#24 : Strings finding a character at a location

//Q.1:
// var task6 = "Pakistani"
// alert(task6.charAt(3))

//Chapter#25 : Strings replacing characters

//Q.1:
// var word = "Hyderabad"
// var newWord = word.replace("Hyder","Islam")
// alert(word)
// alert(newWord)

//Q.2:
// var message = "Ali and Sami are best friends. They play cricket & football together.";
// alert(message.replace("and","&"))

//chapter#26 : Rounding numbers

//Q.1:
// var input = prompt("Enter a number")
// var round = Math.round(input)
// alert(round)
// var floor = Math.floor(input)
// alert(floor)
// var ceil = Math.ceil(input)
// alert(ceil)

//Q.2:
// var input = prompt("Enter a number")
// var round = Math.round(input)
// alert(round)
// var floor = Math.floor(input)
// alert(floor)
// var ceil = Math.ceil(input)
// alert(ceil)

//Chapter#27 : Generating random numbers

//Q.1:
// var disc = Math.random();
// var newDisc = (disc * 6);
// var floor = Math.ceil(newDisc)
// alert(floor)

//Q.2:
// var input1 = prompt("Enter Heads/Tails")
// var input2 = prompt("Enter Heads/Tails")
// var random = Math.random()*2;
// var floor = Math.floor(random)
// if (floor == 0){
//     alert("Heads is won")
// }
// else if (floor == 1){
//     alert("Tails is won")
// }

//Chapter#28 : Converting strings to integers and decimals

//Q.1:
// var weight = prompt("Enter your weight")
// var int = parseInt(weight)
// alert(int + "kgs")

//Chapter#29 : Converting strings to numbers, numbers to strings

//Q.1:
// var int = "472"
// var newInt = Number(int)
// document.write("I convert string to number: " + newInt)

//Q.2:
// var num = 35.36;
// var st = num.toString();
// alert(st.replace(35.36,3536))

//Chapter#30 : Controlling the length of decimals

//Q.1:
// var percentage = 30 / 45 * 100;
// var newPercentage = percentage.toFixed(2)
// alert(newPercentage)

//................Assignment#13 Completed................