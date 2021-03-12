module.exports = function toReadable (number) {
    const units = {
        
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    }
    const ten = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    const num = number;
    const numStr = num.toString();
    const numArr = numStr.split('');
    function getTens(arr) {
        let result = tens[arr[0]];
        if (arr[1] > 0) {
            result = result.concat(' ').concat(units[arr[1]]);
        }
        return result;
    }  
    if (numArr.length === 2 && numArr[0] === '1') {
        return ten[num];
    }
    if (numArr.length === 2 && numArr[0] > '1') {
       const result = getTens(numArr);  
       return result;
    }
    if (numArr.length === 3) {
        const hundred = units[numArr[0]];
        let result = `${hundred} hundred`;

        if (numArr[1] === '0' && numArr[2] > 0 ){
            result = result.concat(' ').concat(units[numArr[2]]);
        }
        if (numArr.length === 3 && numArr[1] === '1') {
            const arrTen = numArr.slice(1);
            const strTen = arrTen.join('');
            result = result.concat(' ').concat(ten[strTen]);
            return result;
        }
        if (numArr[1] > 1) {
            const arrTens = numArr.slice(1);
            const strTens = getTens(arrTens);
            result = result.concat(' ').concat(strTens);
            return result;
        }
        return result;
    }
    return units[num]; 
}
