var calc = new cachedCalculator();

function getArray(inputID) {
    var stringArray = document.getElementById(inputID).value;
    var array = stringArray.split(',').filter(s => !isNaN(s) && s !== "" && s!== " ").map(s => Number(s));
    return array;
}
function getArrayStrings(inputID) {
 var stringArray = document.getElementById(inputID).value;
 var array = stringArray.split(',').filter(s => !isNaN(s) && s !== "" && s!== " ");
 return array;
}
function getResultSumSub1() {
    var array = getArray("arrayA");
    document.getElementById("subSumResult").innerHTML = "Result: "+ ArrayTools.getMaxSubSum1(array);
}
function getResultSumSub2() {
     var array = getArray("arrayA");
    document.getElementById("subSumResult").innerHTML = "Result: "+ ArrayTools.getMaxSubSum2(array);
}
function getResultMinValue() {
 var array = getArray("arrayA");
 document.getElementById("subSumResult").innerHTML = "Result: "+ ArrayTools.getMinValue(array);
}
function getResultMaxValue() {
 var array = getArray("arrayA");
 document.getElementById("subSumResult").innerHTML = "Result: "+ ArrayTools.getMaxValue(array);
}
function getResultMedianValue() {
 var array = getArray("arrayA");
 document.getElementById("subSumResult").innerHTML = "Result: "+ ArrayTools.getMedianValue(array);
}
function getResultMaxIncreasingSub() {
 var array = getArray("arrayA");
 document.getElementById("subSumResult").innerHTML = "Result: "+ ArrayTools.getMaxIncreasingSub(array);
}
function GetResultFormatText() {
    var formatText = document.getElementById("text_to_format").value;
    var lineLength = document.getElementById("max_line_length").value;
    var linesNumber = document.getElementById("max_number_of_lines").value;
    var format = document.getElementById("format").value;
    document.getElementById("text_result").value = textFormatter(formatText, lineLength, linesNumber,format);
}
function GetResultSum() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.sum(...array);
}
function GetResultSubtract() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.subtract(...array);
}
function GetResultMultiply() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.multiply(...array);
}
function GetResultDivide() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.divide(...array);
}
function GetResultSin() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.sin(array[0]);
}
function GetResultCos() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.cos(array[0]);
}
function GetResultTg() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.tg(array[0]);
}
function GetResultCtg() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.ctg(array[0]);
}
function GetResultPower() {
 var array = getArrayStrings("arrayB");
 if (array.length >=2) {
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.power(array[0], array[1]);
}
else  document.getElementById("operationResult").innerHTML = "Result: Enter two numbers!";
}
function GetResultSquared() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.squared(array[0]);
}
function GetResultSqrt() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.sqrt(array[0]);
}
function GetResultFactorial() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.factorial(array[0]);
}
function GetResultLog() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.log(array[0]);
}
function GetResultExp() {
 var array = getArrayStrings("arrayB");
 document.getElementById("operationResult").innerHTML = "Result: "+ StringCalculator.exp(array[0]);
}
function GetBubbleSort() {
    var array = getArray("arrayC");
    document.getElementById("sortResult").innerHTML = "Result: "+ ArraySorter.bubbleSort(array);
}
function GetSelectionSort() {
    var array = getArray("arrayC");
    document.getElementById("sortResult").innerHTML = "Result: "+ ArraySorter.selectionSort(array);
}
function GetInsertionSort() {
    var array = getArray("arrayC");
    document.getElementById("sortResult").innerHTML = "Result: "+ ArraySorter.insertionSort(array);
}
function GetShellSort() {
    var array = getArray("arrayC");
    document.getElementById("sortResult").innerHTML = "Result: "+ ArraySorter.shellSort(array);
}
function GetQuickSort() {
    var array = getArray("arrayC");
    document.getElementById("sortResult").innerHTML = "Result: "+ ArraySorter.quickSort(array);
}
function ConvertFromBinary() {
    var num = document.getElementById("binary_value").value;
   var base = Number(document.querySelector('input[name="binary_base"]:checked').value);
    var result;
    if (document.getElementById("binary_sign").checked) {
       result = Converter.convertFromBinary(num, base, "signed");
    }
    else result = Converter.convertFromBinary(num, base);
    document.getElementById("binary_result").innerHTML = "Result: "+ result;
}
function ConvertFromOctal() {
    var num = document.getElementById("octal_value").value;
    var base = Number(document.querySelector('input[name="octal_base"]:checked').value);
    var result;
    if (document.getElementById("octal_sign").checked) {
       result = Converter.convertFromOctal(num, base, "signed");
    }
    else result = Converter.convertFromOctal(num, base);
    document.getElementById("octal_result").innerHTML = "Result: "+ result;
}
function ConvertFromDecimal() {
    var num = document.getElementById("dec_value").value;
    var base = Number(document.querySelector('input[name="dec_base"]:checked').value);
    var result = Converter.convertFromDecimal(num, base);
    document.getElementById("dec_result").innerHTML = "Result: "+ result;
}
function ConvertFromHexadecimal() {
    var num = document.getElementById("hex_value").value;
    var base = Number(document.querySelector('input[name="hex_base"]:checked').value);
    var result = Converter.convertFromHex(num, base);
    document.getElementById("hex_result").innerHTML = "Result: "+ result;
}
function getDate() {
    let result = document.getElementById("date_result");
    result.innerHTML = '';

    var input = document.getElementById("date_input").value;
    var inputFormat = document.getElementById("input_format").value || undefined;
    var outputFormat = document.getElementById("output_format").value || undefined;
    var inputType = document.querySelector('input[name="input_type"]:checked').value;

    if (inputType == 'ms'){
        input = Number.parseInt(input);
    }

    var date = new MyDate(input, inputFormat, outputFormat);

    if (document.getElementById("long_date").checked) {
        result.innerHTML += date.getLongDate();
    } else {
        result.innerHTML += date.getDate();
    } if (document.getElementById("from_now").checked) {
        result.innerHTML += ' (' + date.fromNow() + ')';
    }
}

function cachedCalculation() {
    var numbers = getArray("arrayD").slice(0,2);
    var operationType = document.querySelector('input[name="operation"]:checked').value;
    if (document.getElementById("isCached").checked) {
        if(!calc.config.includes(calc[operationType])) {
            calc.config.push(calc[operationType]);
        }
    }
    else if(calc.config.includes(calc[operationType])) {
        calc.config = calc.config.filter(s => s!=calc[operationType])
    }
    
    var result = calc[operationType](numbers[0],numbers[1]);
    document.getElementById("cachedResult").innerHTML = "Result " + result;

}
