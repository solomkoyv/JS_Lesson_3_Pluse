let str = "урок-3-был слишком легким";
console.log(str);

str = str[0].toUpperCase() + str.slice(1);
console.log(str);

str = str.replace(new RegExp("-", 'g'), " ");
console.log(str);

let lastIndex = str.lastIndexOf(" ");

str = str.split(" ").pop();
// str = str.slice(str.lastIndexOf(' ') + 1);
str = str.replace('им', 'оо');
console.log(str);

let arr = [20, 33, 1, 'Человек', 2, 3];
let newArr = [];
arr.forEach(function (i) {
  if (!(isNaN(i))) {
    i = Math.sqrt(i *= i);
    newArr.push(i);
  }
});
console.log(newArr);

str = '   Этот java script очень сложная штука и как с ним справиться я не мойму   ';

console.log(str);

function myFunc(str) {
  if ((typeof (str)) !== 'string') {
    console.log(' Не строка');
  } else {
    srt = str.trim();
    let sliced = str.slice(0, 50);
    if (sliced.length < str.length) {
      return sliced += '...';
    }
  }
  console.log(sliced);
}
console.log(myFunc(str));