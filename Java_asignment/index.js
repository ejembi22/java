if (4>3){
    result=true;
} else{
    result=false;
}
console.log(result);


if (4 >= 3){
    result=true;
}else{
    result=false;
}
console.log(result);

if (4<3){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4<=3){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4 == 4){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4 === 4){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4 != 4){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4 !== 4){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4 != '4'){
    result=true;
}else{
    result=false;
}
console.log(result);

if(4 == '4'){
    result=true;
}else{
    result=false;
}
console.log(result);

if (4 === '4'){
    result=true;
} else{
    result=false;
}
console.log(result);


// Part B 

let myDate =new Date()
console.log(myDate.getFullYear())
console.log(myDate.getMonth())
console.log(myDate)
console.log(myDate.getDay())
console.log(myDate.getHours())
console.log(myDate.getMinutes())



let myNewMonth =new Date ()
let myMonth=myNewMonth.getMonth();
console.log(myMonth)

switch(myMonth){
case 0:
    console.log("August has 31 day")
    break;

    case 1:
        console.log("February has 28 days")
        break;

        case "august":
            days = 31;
            break

        default:
        console.log("It can be any month")
}

 