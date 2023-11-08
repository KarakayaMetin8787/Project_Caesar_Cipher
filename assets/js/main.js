const codeOrder = [
    "a" ,"b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// ==========================================================
//                         Encoder
// ==========================================================

encode.addEventListener("click", () => {
    document.body.querySelector("main p").textContent = "";

    const inputValue = inputRaw.value;
    const keyValue = Number(inputKey.value);
    const inputSplit = inputValue.toLowerCase().split("");

    inputSplit.map((elt) => {
        const indexPos = codeOrder.indexOf(elt);
        if (indexPos !== -1) {
            const indexValue = (indexPos + keyValue) % codeOrder.length;
            document.body.querySelector("main p").textContent += `${codeOrder[indexValue]}`;
        } else {
            document.body.querySelector("main p").textContent += elt;
        }
    });
});

// ==========================================================
//                         Decoder
// ==========================================================

decode.addEventListener("click", () => {
    document.body.querySelector("main p").textContent = "";

    const inputValue = inputRaw.value;
    const keyValue = Number(inputKey.value);
    const inputSplit = inputValue.toLowerCase().split("");

    inputSplit.map((elt) => {
        const indexPos = codeOrder.indexOf(elt);
        if (indexPos !== -1) {
            const indexValue = (indexPos - keyValue + codeOrder.length) % codeOrder.length;
            document.body.querySelector("main p").textContent += `${codeOrder[indexValue]}`;
        } else {
            document.body.querySelector("main p").textContent += elt;
        }
    });
});