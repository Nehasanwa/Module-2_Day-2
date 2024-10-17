let month = "October"
let season;

switch (month) {
    case "December":
    case "January":
    case "February":
    case "March":
        season = "Winter";
        break;
    case "April":
    case "May":
    case "June":
        season = "Summer";
        break;
    case "July":
    case "August":
    case "September":
        season = "Monsoon";
        break;
    case "October":
    case "November":
        season = "Autumn";
}

console.log(season);

for(let i=0;i<10;i++){
    console.log(i);
}

let numValue = 0
while(numValue<=10){
    if (numValue % 2 == 0){
        console.log("Even Number", numValue);
        if(numValue == 7){
            break;
        }
    }else{
        console.log("Odd Number",numValue);   
    }
    console.log(numValue);
    numValue++;
}

for(let i=0;i<=10;i++){
    console.log(i);{
        if (i % 2 == 0){
            console.log("Even Number");
}else{
    console.log("Odd Number");
    if(i == 5){
        break;
}}}}

let x = 0
do{
    console.log(x);
    x++;
}while(x<=10)
 
for(let i=0;i<=10;i++){
    if (i % 2 == 0){
        continue;
    } console.log(i);
}
