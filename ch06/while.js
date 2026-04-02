let i =0;

while(i <= 4){
    console.log(i);
    i++;
}
let=0;
do{
    console.log(i);
    i++;
} while (i<=4);

labelName: while (true) {
    while (true){
        continue labelName;
        break labelName;
    }
}