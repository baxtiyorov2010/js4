// let a = prompt("string typedagi malunotni kiriting")
// let b = +prompt("number typedagi malunotni kiriting")
// let d = prompt("boolen typedagi malunotni kiriting")
// confirm("ishonchingiz komilmi")

// if (d === "true" || d === "false" && a === String && b == number) {
//     alert(`sizritgan ${a} string tyupga tegishli \n
//     sizritgan ${b} number tyupga tegishli \n
//     sizritgan ${d} boolen tyupga tegishli \n`)
// }else{
//     confirm("qaytadan urinib koring hato bor")
// }
const name = prompt('Ismingizni kiriting:');

// Foydalanuvchidan bir harf olish
const letter = prompt('Bir harf kiriting:');

// Ismingiz va harfni tekshirish
if (name.includes(letter)) {
    alert(`${letter} harf ismingizda bor.`);
} else {
    alert(`${letter} harf ismingizda yo'q.`);
}