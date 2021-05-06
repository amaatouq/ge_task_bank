export const num2stringdecimals = (num, decimals = 2) => {
    let strNum = num.toString()

    if (strNum.includes(".")) {
        const parts = strNum.split(".")
        if (parts[1].length < decimals) {
            for (let missingDecimals = 0; missingDecimals < Math.abs([1].length - decimals); missingDecimals++) {
                strNum = strNum + "0"
            }
        }
    }

    return strNum
}

export const instructionsInfo = {
    pay: num2stringdecimals(1.60),
    bonus: num2stringdecimals(1.60),
    isForecasting: false,
    time: 12,
}

