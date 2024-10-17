function myFirstFunction(){
    console.log("Hello World");
}

myFirstFunction()

function functionB(){
    return 6
}

function functionC(){
   var valueofB = functionB()
    return valueofB+9;
}

function functionD(){
   var valueofB = functionB()
    var valueofC = functionC()
    console.log("final result",valueofB+valueofC);
}

functionD()

