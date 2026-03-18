// let i=10;
// let j=10;
// let result ="";
// for (let i= 1;i<=10;i++) {
//     let  result ="";
//     for (let j = i; j>=1; j--) {
//         result=+j;
//         // console.log(j) ;
//         // result+=i;
        
//     }
//     console.log(result);
    
// }
for (let i = 5; i>=1; i--) {
    let number="";
    for (let j = i; j>=1; j--) {
        number+=j;
    }
    //print space + Numbers
    console.log("".repeat(5+i)+number);
    let Reverse= "";
    Reverse+=number;
    
}
