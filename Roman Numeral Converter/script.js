
const numberInput = document.getElementById("input");
const convertBtn = document.getElementById("submit");
const result = document.getElementById("output");

    function toRoman(num) {
      const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
      ];


     let roman = "";
      for (const { value, numeral } of romanMap) {
        while (num >= value) {
          roman += numeral;
          num -= value;
        }
      }
      return roman;
    }


convertBtn.addEventListener("click", () => {
  const element = numberInput.value;
  if (element === ""){
    result.innerText =  "Please enter a valid number.";
  } else if (element < 0){
result.innerText =  "Please enter a number greater than or equal to 1"
  } else if (element >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999"
  } else {
    result.innerText = toRoman(element);
  }
  
});