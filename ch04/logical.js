console.log(true&&true);
console.log(false&&true);
console.log(true&&false);
console.log(false&&false);

console.log(true||true);
console.log(false||true);
console.log(true||false);
console.log(false||false);

console.log(!true);
console.log(!false);

const age =17;
const result = age>=8 && age<=19 ? "학생입니다.":"학생이 아닙니다";
console.log(result);

let nickname=null;
console.log(nickname ?? "익명 사용자");
nickname=undefined;
console.log(nickname ?? "익명 사용자");
nickname="최태민"
console.log(nickname ?? "익명 사용자");