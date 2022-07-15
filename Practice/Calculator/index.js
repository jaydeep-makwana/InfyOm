$(document).ready(function () {

    let output = '';
    let operator = ['+', '-', '*', '/'];

    $(document).on('click', '.num-keys', function () {
        output += $(this).html();

        $('#output').val(output);
    });

    $(document).on('click', '.operation-btn', function () {
        output += $(this).html();
        let last2nd = output.charAt(output.length - 2);
        let checkOperator = operator.includes(last2nd);
        
        if (checkOperator === true) {
            let value  = $(this).html();
            let last2nd = output.charAt(output.length - 1);
            let rep = output.replace(last2nd,value);
            // $('#output').val(output);
              console.log(output);

            } else {
                
                $('#output').val(output);
            }
        });
        
        $(document).on('click', '.ce-btn', function () {
            output = '';
            $('#output').val(output);
        });
        
        $(document).on('click', '#equal-btn', function () {
            result = eval(output);
            $('#output').val(result);
    });

    $(document).on('click', '#remove-btn', function () {
        value = output.substring(0,);
        $('#output').val(value);
    });
    
});


// str = 'i am best';
// let last2nd = str.charAt(str.length - 1);
// let rep = str.replace(last2nd,'i');
//  console.log(last2nd);
//  console.log(rep);
//  console.log(str.slice(0,-1));
 

// https://codepen.io/lalwanivikas/pen/eZxjqo