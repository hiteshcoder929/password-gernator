let inputRange = document.querySelector("#inputRange");
let rangeValue = document.querySelector("#rangeValue");
let inputText = document.querySelector("#inputText");
let inputNum = document.querySelector("#inputNum");
let inputChar = document.querySelector("#inputChar");
let copyBtn = document.querySelector(".copy");

let pass = ""
let length = 8
let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let num = "01234567890123456789"
let char = "!@#$%^&*()_+!@#$%^&*()_+"

function passwordGenrator() {
    let str = letter
    if (inputChar.checked) str += char
    if (inputNum.checked) str += num
    pass = ""
    inputText.value = ""
    for (let i = 0; i < length; i++) {
        pass += str[Math.floor(Math.random() * str.length)]
    }
    inputText.value = pass
}

passwordGenrator()

inputNum.addEventListener("change", passwordGenrator)
inputChar.addEventListener("change", passwordGenrator)

inputRange.addEventListener("input", () => {
    length =+ inputRange.value
    rangeValue.innerText = length
    passwordGenrator()
})

copyBtn.addEventListener('click', () => {
    inputText.select()
    window.navigator.clipboard.writeText(inputText.value)
        .then(() => {
            alert("pass copy")
        })
        .catch(() => {
            alert("pass not copy")
        })
})