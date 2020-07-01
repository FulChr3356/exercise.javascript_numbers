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
        while(operators.includes("*") || operators.includes("/")){
            console.log(i);
            if(operators[i] == "*"){
                tempNum = (parseInt(numbers[i],10)) * (parseInt(numbers[i+1],10));
                numbers = creatNewArray(numbers, i,i+1,tempNum);
                operators.splice(i,1);
                continue;
            }
            else if(operators[i] == "/"){
                tempNum = (parseInt(numbers[i],10)) / (parseInt(numbers[i+1],10));
                numbers = creatNewArray(numbers, i,i+1,tempNum);
                operators.splice(i,1);
                continue;
            }
            i++;
        }
        i = 0;
        while(operators.includes("+") || operators.includes("-")){
            if(operators[i] == "+"){
                tempNum = (parseInt(numbers[i],10)) + (parseInt(numbers[i+1],10));
                numbers = creatNewArray(numbers, i,i+1,tempNum);
                operators.splice(i,1);
                continue;
            }
            else if(operators[i] == "-"){
                tempNum = (parseInt(numbers[i],10)) - (parseInt(numbers[i+1],10));
                numbers = creatNewArray(numbers, i,i+1,tempNum);
                operators.splice(i,1);
                continue;
            }
            i++;

    }
     return parseInt(numbers);
}
function creatNewArray(numbers, left,right, newValue){
    var numbers2 = [];
    for (var i = 0; i< numbers.length;i++){
        if (i == left)
            numbers[i] = newValue;
        if(i == right)
            continue;
        numbers2.push(numbers[i]);
    }
    return numbers2;
}






