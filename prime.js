// Problem 1 : Check whether a number is Prime or not

let check = 12;
let counter = 0;
for(let i=1; i<check; i++){
    if(check%i == 0){
        counter++;
    }
}
if(counter == 2){
    console.log("Prime Number");
}else{
    console.log("Not Prime Number");
}
