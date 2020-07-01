function compute(expression) {
    // TODO - write method definition here
    var numbers = [];
    var operators = [];
    var ops = ["*","/","+","-"];
    length = expression.length;
    subIndex = 0;
    var tempNum;
    for (var i = 0; i<length; i++){
            if (ops.includes(expression[i])){
                numbers.push(expression.substring(subIndex,i));
                operators.push(expression[i]);
                subIndex = i+1;
            }
            else if(i == expression.length-1 ){
                numbers.push(expression.substring(subIndex,expression.length));
            }
        }
        var i = 0;
        for (var k = 0; k<numbers.length;k++)
            numbers[k] = Number(numbers[k]);
        while(operators.includes("*") || operators.includes("/")){
            if(operators[i] == "*"){
                numbers[i] = (numbers[i]) * (numbers[i+1]);
                numbers.splice(i+1,1);
                operators.splice(i,1);
                continue;
            }
            else if(operators[i] == "/"){
                numbers[i] = (numbers[i]) / (numbers[i+1]);
                numbers.splice(i+1,1);
                operators.splice(i,1);
                continue;
            }
            i++;
        }
        i = 0;
        while(operators.includes("+") || operators.includes("-")){
            if(operators[i] == "-"){
                numbers[i] = parseFloat((numbers[i]) - (numbers[i+1]));
                numbers.splice(i+1,1);
                operators.splice(i,1);
                continue;
            }
            else if(operators[i] == "+"){
                numbers[i] = (numbers[i]) + (numbers[i+1]);
                numbers.splice(i+1,1);
                operators.splice(i,1);
                continue;
            }
            i++;

    }
     return parseFloat(numbers);
}







