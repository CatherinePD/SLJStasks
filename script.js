//1. Array Processing Tool

var ArrayTools = {
    getMaxSubSum1: function (array){ //сложность O(n^2); cуммы с каждого элемента по очереди
        let maxSum = 0;

        for(let i=0; i < array.length; i++){
            let sum = 0;
            for(let j=i; j < array.length; j++){
                sum += array[j];
                if(sum > maxSum) maxSum = sum;
            }
        }
        return maxSum;
    },

    getMaxSubSum2: function (array) { //сложность O(n)
        let maxSum = 0;
        let sum = 0; 
        for (let i=0; i < array.length; i++) { 
            sum += array[i]; 
            if(sum > maxSum) maxSum = sum;
            if (sum < 0) sum = 0; 
        }
        return maxSum;
    },

    getMinValue: function (array) {
        let min = array[0];
        for (let i=1; i<array.length; i++) {
            if (array[i] < min) min = array [i];
        }
        return min;
    },

    getMaxValue: function (array) {
        let max = array[0];
        for (let i=1; i<array.length; i++) {
            if (array[i] > max) max = array [i];
        }
        return max;
    },

    getMedianValue: function (array) {
        array.sort((a,b) => a-b ); //сортировка по возрастанию
        let median = 0;
        if (array.length % 2 == 0) {
            median = (array[array.length/2] + array[array.length/2 - 1])/2
        }
        else median = array[Math.floor(array.length/2)];
        return median;
    },


    getMaxIncreasingSub: function (array) { //непрерывная подпоследовательность максимальной длины (первая найденная, если таких несколько)
        let maxLength = 0;
        let subArray = [];
        for (let i=0; i<array.length; i++) {
            let tempArray = [];
            tempArray.push(array[i]);
            let lastValue = array[i];
                for(j=i+1; j<array.length; j++) {
                    if (array[j] > lastValue) {
                        tempArray.push(array[j]);
                        lastValue = array[j];
                    }
                else break;
            }
            if (tempArray.length > maxLength) {
                maxLength = tempArray.length;
                subArray = tempArray.slice();
            }
        }
        return subArray;
    }
}

console.log(ArrayTools.getMaxSubSum1( [-1, 2, 3, -9] ));
console.log(ArrayTools.getMaxSubSum1( [2, -1, 2, 3, -9] ));
console.log(ArrayTools.getMaxSubSum1( [-1, 2, 3, -9, 11] ));
console.log(ArrayTools.getMaxSubSum1( [-2, -1, 1, 2]));
console.log(ArrayTools.getMaxSubSum1( [100, -9, 2, -3, 5] ));
console.log(ArrayTools.getMaxSubSum1( [1, 2, 3] ));
console.log(ArrayTools.getMaxSubSum1( [-1, -2, -3] ));
console.log(ArrayTools.getMaxSubSum2( [-1, 2, 3, -9] ));
console.log(ArrayTools.getMaxSubSum2( [2, -1, 2, 3, -9] ));
console.log(ArrayTools.getMaxSubSum2( [-1, 2, 3, -9, 11] ));
console.log(ArrayTools.getMaxSubSum2( [-2, -1, 1, 2]));
console.log(ArrayTools.getMaxSubSum2( [100, -9, 2, -3, 5] ));
console.log(ArrayTools.getMaxSubSum2( [1, 2, 3] ));
console.log(ArrayTools.getMaxSubSum2( [-1, -2, -3] ));
console.log(ArrayTools.getMinValue([1,2,3,4,5]));
console.log(ArrayTools.getMinValue([5,10,6,12,3,24,7,8,9,5,-2,3,4]));
console.log(ArrayTools.getMaxValue([1,2,3,4,5]));
console.log(ArrayTools.getMaxValue([5,10,6,12,3,24,7,8,9,5,-2,3,4]));
console.log(ArrayTools.getMedianValue([1,2,3,4,5]));
console.log(ArrayTools.getMedianValue([1,2,3,4,5,6,7,8]));
console.log(ArrayTools.getMedianValue([9,7,1,8]));
console.log(ArrayTools.getMaxIncreasingSub([1,3,7,4,6,7,8,1,2,5,7,8,90,1]));
console.log(ArrayTools.getMaxIncreasingSub([5,10,6,12,3,24,7,8,9,5,2,3,4])); 

//2. Date Display Formatter

function MyDate(input, inputFormat = "DDMMYYYY", outputFormat = "DD-MM-YYYY") { //для строк и чисел в ms
 
    this.monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

    this.date = buildDate(input, inputFormat);

    this.getDate = function() {
        let result = outputFormat;
        result = result.replace("DD", this.date.getDate())
                       .replace("MM", this.date.getMonth() + 1)
                       .replace("YYYY", this.date.getFullYear());
        
        return result;
    };

    this.getLongDate = function() {
        var monthIndex = Number.parseInt(this.date.getMonth());
        return this.date.getDate() + " " + this.monthNames[monthIndex] + " " + this.date.getFullYear();
    };

    this.fromNow = function() {
        let now = new Date(), then = this.date;
        let timeResult = now.getTime() > then.getTime() ? "ago" : "later";

        let years = Math.abs(now.getFullYear() - then.getFullYear());
        let month = Math.abs(now.getMonth() - then.getMonth());
        let days = Math.abs(now.getDate() - then.getDate());

        if (years != 0)
            return years + " years " + timeResult;
        if (month != 0)
            return month + " months " + timeResult;
        if (days != 0)
            return days + " days " + timeResult;

        return "today";
    }
}


function buildDate(input, inputFormat){
    if (typeof input === "number"){
        return new Date(input);
    } 
    else if (typeof input === "string"){
        return parse(input, inputFormat);
    }
    return undefined;
};

function parse(input, inputFormat) {
    let dayIndex = inputFormat.search("DD");
    let day = input.slice(dayIndex, dayIndex + 2);

    let monthIndex = inputFormat.search("MM")
    let month = input.slice(monthIndex, monthIndex + 2);

    let yearIndex = inputFormat.search("YYYY");
    let year = input.slice(yearIndex, yearIndex + 4);

    return new Date(year + "-" + month + "-" + day);
};



//3.	Text Formatter

function textFormatter(str, maxlength, maxnumoflines, format) {
    let maxLength = maxlength ? maxlength : 3;
    let maxNumOfLines = maxnumoflines ? maxnumoflines : 2;
    if(maxLength < 3 || maxNumOfLines < 2) return null;
    
    let typeOfFormat = "перенос по символу";
    if (format == "перенос по слову" || format == "перенос по предложению" || format == "переносов нет") { typeOfFormat = format; }
    let inputStr = "";
    if (typeof str === 'string'){ 
        inputStr = String(str); 
    }
    else return null;
    let strLength = str.length > maxLength*maxNumOfLines ? maxLength*maxNumOfLines : str.length;
    if (typeOfFormat == "перенос по символу") {
        return wrapBySymbol(inputStr, strLength, maxLength);
    }
    if(typeOfFormat == "перенос по слову") {
      return wrapByWord(inputStr, maxLength, maxNumOfLines);
    }
  if(typeOfFormat == "перенос по предложению") {
       return wrapBySentence(inputStr, maxLength, maxNumOfLines);
   }
   if(typeOfFormat == "переносов нет") {
      return noWrap(inputStr, maxLength)
   }
}

function wrapBySymbol(inputStr, strLength, maxLength) {
    let resultStr = "";
    for(let i = 0; i<strLength; i++) {
        if (i!=0 && i % maxLength == 0) {
            resultStr += '\n';
        }
        resultStr += inputStr[i];
    }
    return resultStr;
}

function wrapByWord(inputStr, maxLength, maxNumOfLines) {
    let resultStr = "";
    let tempLength = 0;
    let tempLines = 1;
    let arrayOfStrings = [];
    let tempString = "";
    for (let i = 0; i<inputStr.length; i++) {
        if(inputStr[i].match(/[a-z]/i) || inputStr[i].match(/[а-я]/i) || inputStr[i].match(/\d/g) || inputStr[i].match(/ё/i)) {
            tempString += inputStr[i];
        }
        else {
            if (tempString.length > maxLength)
            {
                tempString = tempString.substr(0,maxLength);
            }
            if(tempString != "") {
                arrayOfStrings.push(tempString);
                arrayOfStrings.push(inputStr[i]);
                tempString = "";
            }
            else arrayOfStrings.push(inputStr[i]);
        }
    }
    for(let i = 0; i<arrayOfStrings.length; i++) {
        tempLength += arrayOfStrings[i].length;
        if (tempLength <= maxLength) {
            resultStr += arrayOfStrings[i];
        }
        else {
            if(tempLines == maxNumOfLines) break;
            if (arrayOfStrings[i] == " ") continue;
            resultStr += "\n";
            tempLines++;
            resultStr +=arrayOfStrings[i];
            tempLength = arrayOfStrings[i].length;
        }
    }
    return resultStr;
}

function wrapBySentence(inputStr, maxLength, maxNumOfLines) {
    let resultStr = "";
    let arrayOfStrings = inputStr.split(/[!?.]/gm);
    let tempLines = 1;
    for (item of arrayOfStrings) {
        if(tempLines > maxNumOfLines) break;
        if(item == "") continue;
        let index = inputStr.search(item);
        index = index + item.length; //добавление знака препинания
        if(index <= inputStr.length-1) { //если в последнем предложении нет знака препинания
            item += inputStr[index]; 
        }
        item = item.trimLeft(); //удаление лишних пробелов вначале предложения
        if(item.length > maxLength) {
            item = item.substr(0,maxLength);
        }
        resultStr += item;
        resultStr += "\n";
        tempLines++;
    }
    return resultStr;
}

function noWrap(inputStr, maxLength) {
    let resultStr = "";
    inputStr = inputStr.replace(/\n/gm, " ");
    if(inputStr.length > maxLength) {
        inputStr = inputStr.substr(0, maxLength);
    }
    resultStr = inputStr;
    return resultStr;
}

console.log(textFormatter("ekaterina кусь кус лёшуууу. ", 10,2, "перенос по слову"));

//4. String calculator

var StringCalculator = {
    sum : function() {
        let result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += Number(arguments[i]);
        }
        return result;
    },
    subtract : function() {
        let result = 0;
        result = Number(arguments[0]);
        for (var i = 1; i < arguments.length; i++) {
            result -= Number(arguments[i]);
        }
        return result;
    },
    multiply : function() {
        let result = 0;
        result = Number(arguments[0]);
        for (var i = 1; i < arguments.length; i++) {
            result *= Number(arguments[i]);
        }
        return result;
    },
    divide : function() {
        let result = 0;
        result = Number(arguments[0]);
        for (var i = 1; i < arguments.length; i++) {
            result /= Number(arguments[i]);
        }
        return result;
    },
    sin : function(str) {
        return Math.sin(Number(str));
    },
    cos : function(str) {
        return Math.cos(Number(str));
    },
    tg : function(str) {
        return Math.tan(Number(str));
    },
    ctg : function(str) {
        return 1 / Math.tan(Number(str));
    },
    power : function(str1, str2) {
        return Math.pow(Number(str1), Number(str2));
    },
    squared : function(str) {
        return Math.pow(Number(str), 2);
    },
    sqrt : function(str) {
        return Math.sqrt(Number(str));
    },
    factorial : function(str) {
        let result = 1;
        let num = Number(str);
        while(num) {
            result *= num--;
        }
        return result;
    },
    log : function(str) {
        return Math.log(Number(str));
    },
    exp : function(str) {
        return Math.exp(Number(str));
    }

}

console.log(StringCalculator.sum("6", "9.9", "13", "-0.91"));
console.log(StringCalculator.divide("10", "2", "1.5"));
console.log(StringCalculator.factorial("5"));
console.log(StringCalculator.ctg("5"));


//5. Array Sorter

var ArraySorter = {
    bubbleSort : function(array) {
        for (let i = 0; i < array.length-1; i++) { 
            for (let j = 0; j < array.length-1-i; j++) { 
                if (array[j+1] < array[j]) { 
                    let temp = array[j+1]; 
                    array[j+1] = array[j]; 
                    array[j] = temp; 
                }
            }
        }                     
        return array;
    },
    selectionSort : function(array) {
        for (let i = 0; i < array.length-1; i++) { 
            let min = i;
            for (let j = i+1; j < array.length; j++) { 
                if (array[j] < array[min]) min = j; 
            } 
            let temp = array[min]; 
            array[min] = array[i]; 
            array[i] = temp;
         }                    
        return array;
    },
    insertionSort : function(array) {
        for (let i = 0; i < array.length; i++) { 
            let v = array[i], j = i-1;
            while (j >= 0 && array[j] > v) { 
                array[j+1] = array[j]; 
                j--; 
            }
            array[j+1] = v;
        }                    
        return array;
    },
    shellSort : function(array) {
        let i = Math.floor(array.length/2);
        while (i > 0) { 
            for (let j = 0; j < array.length; j++) { 
                let k = j, t = array[j];
                while (k >= i && array[k-i] > t) { 
                    array[k] = array[k-i]; 
                    k -= i; 
                }
                array[k] = t;
            }
            i = (i==2) ? 1 : Math.floor(i*5/11);
        }
        return array;
    },
    quickSort : function(array) {
        if (array.length == 0) return [];
        let a = [], b = [], p = array[0];
        for (let i = 1; i < array.length; i++) { 
            if (array[i] < p) {
                a[a.length] = array[i];
            }
            else {
                b[b.length] = array[i];
            }
        }
        return this.quickSort(a).concat(p, this.quickSort(b));
    }
}

console.log(ArraySorter.bubbleSort([5,7,3,12,9,1,2,16]));
console.log(ArraySorter.selectionSort([5,7,3,12,9,1,2,16]));
console.log(ArraySorter.quickSort([5,7,3,12,9,1,2,16]));
console.log(ArraySorter.shellSort([5,7,3,12,9,1,2,16]));
console.log(ArraySorter.insertionSort([5,7,3,12,9,1,2,16]));


//6. Binary Converter

var Converter = {
    convertFromDecimal : function(number, base) { //знаковые функции работают для 32-битных значений(dword)
        switch (base) {  
            case 2:  
            return (number >>> 0).toString(2);
            break;  
            case 16:  
            return (number >>> 0).toString(16);
            break;  
            case 8:  
            return (number >>> 0).toString(8);
            break;  
            default:  
            return("Wrong input");  
        }  
    },
    convertFromBinary : function(bits,base, sign) { //для длинных значений в строку
            for(let i = 0; i < bits.length; i++) { 
            if (Number(bits[i]) != 0 && Number(bits[i]) != 1) {
                return "Wrong input"
            }
        }
        switch (base) {  
            case 10:
                if (sign == "signed") {
                    return uintToInt(parseInt(bits, 2), bits.length) ;
                }
                else return parseInt(bits, 2);
            break;  
            case 16:
                return convertBinaryToHexadecimal(bits);
            break;  
            case 8:  
            return parseInt(bits, 2).toString(8);
            break;  
            default:  
            return "Wrong input";  
        }  
    }, 
    convertFromHex : function(number, base) {
        switch (base) {  
            case 2:  
            return (parseInt(number, 16).toString(2)).padStart(8, '0');
            break;  
            case 10:  
            number = parseInt(number, 16);
            if ((number & 0x8000) > 0) {
                number = number - 0x10000;
            }
            return number;
            break;  
            case 8: 
            return parseInt(number, 16).toString(8);
            break;  
            default:  
            return("Wrong input");  
        }  
    },
    convertFromOctal : function(number, base, sign) {
        switch (base) {  
            case 2:  
            return parseInt(number, 8).toString(2);
            break;  
            case 10:  
            if (sign == "signed") {
                return uintToInt(parseInt(number, 8), number.length) ;
            }
            else return parseInt(number, 8).toString(10);
            break;  
            case 16: 
            return parseInt(number, 8).toString(16);
            break;  
            default:  
            return("Wrong input");  
        }  
    }
}
function uintToInt(uint, nbit) {
    if (nbit > 32) throw new RangeError('uintToInt only supports ints up to 32 bits');
    uint <<= 32 - nbit;
    uint >>= 32 - nbit;
    return uint;
}

function convertBinaryToHexadecimal(binaryString) {
    binaryString = binaryString.toString();
    var output = '';

        for (var i=0; i < binaryString.length; i+=4) //для каждых 4-ёх битов
        {
            var bytes = binaryString.substr(i, 4);
            var decimal = parseInt(bytes, 2);
            var hex = decimal.toString(16);
            output += hex.toUpperCase();
        }
        return output;  
}

console.log(Converter.convertFromDecimal(29,8));
console.log(Converter.convertFromDecimal(-1828128,16));
console.log(Converter.convertFromBinary("11111111111111111111111111111011", 10, "signed"));
console.log(Converter.convertFromHex("FFE3‬‬",10));
console.log(Converter.convertFromOctal("37777777504",10,"signed"));


function cachedCalculator(){
    this.cache = [];
    this.checkConfig = function(a,b, result, functionName) {
        if (this.config.includes(functionName)) {
            this.cache.push({
                func: functionName, 
                left: a, 
                right: b, 
                result: result}); 
        }
    }
    this.sum = function(a,b) {
        let cached = this.cache.filter(e => e.func == this.sum && (e.left == a && e.right == b) || (e.left == b && e.right == a));
        if (cached.length > 0){
            return cached[0].result;
        }
        let result = a + b;
        this.checkConfig(a, b, result, this.sum);
        return result;
    };
    this.sub = function(a,b) {
        let cached = this.cache.filter(e => e.func == this.sub && e.left == a && e.right == b);
        if (cached.length > 0){
            return cached[0].result;
        }
        let result = a - b;
        this.checkConfig(a, b, result, this.sub);
        return result;
    };
    this.multi = function(a,b) {
        let cached = this.cache.filter(e => e.func == this.multi && (e.left == a && e.right == b) || (e.left == b && e.right == a));
        if (cached.length > 0){
            return cached[0].result;
        }
        let result = a * b;
        this.checkConfig(a, b, result, this.multi);
        return result;
    };
    this.divide = function(a,b) {
        let cached = this.cache.filter(e => e.func == this.divide && e.left == a && e.right == b);
        if (cached.length > 0){
            return cached[0].result;
        }
        let result = a / b;
        this.checkConfig(a, b, result, this.divide);
        return result;
    };
    this.config = [];

}

var c = new cachedCalculator();
console.log(c.sum(5,9));
console.log(c.sum(5,9));



