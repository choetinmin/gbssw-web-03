const readline=require("readline")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("단축키를 입력하세요:", function (number){
    switch (parseInt(number)) {
        case 1:
            console.log("엄마 전화번호로 전화걸겠습니다.");
            break;
        case 2:
            console.log("아빠 전화번호로 전화걸겠습니다.");
            break;
        case 3:
            console.log("동생 전화번호로 전화걸겠습니다.");
            break;
        default: 
            console.log("해당 단축키가 없습니다. 단축키를 추가하시겠습니까?");
    }
    rl.close();
});