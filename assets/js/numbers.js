function compute(expression) {
    // TODO - write method definition here
     var operations = ["-","+","*", "/"];
     var tempString = "";
     for (var i = 0; i < expression.length;i++){
        if (operations.includes(expression.charAt(i))){
            tempString = "0";
        }
     }
     return eval(expression);
}



