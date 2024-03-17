<?php

function operatorDemo() {
    // Assignment operators
    $a = 10;
    $b = 5;
    
    // Comparison operators
    $result1 = ($a == $b); // false
    $result2 = ($a != $b); // true
    $result3 = ($a < $b);  // false
    $result4 = ($a > $b);  // true
    $result5 = ($a <= $b); // false
    $result6 = ($a >= $b); // true
    
    // Increment/Decrement operators
    $c = 10;
    $c++; // Increment
    $d = 5;
    $d--; // Decrement
    
    // Logical operators
    $bool1 = true;
    $bool2 = false;
    $logicalAnd = $bool1 && $bool2; // false
    $logicalOr = $bool1 || $bool2;   // true
    $logicalNot = !$bool1;           // false
    
    // String operators
    $str1 = "Hello";
    $str2 = "World";
    $concatenatedStr = $str1 . $str2; // "HelloWorld"
    
    // Array operators
    $arr1 = array(1, 2, 3);
    $arr2 = array(4, 5, 6);
    $concatenatedArr = $arr1 + $arr2; // [1, 2, 3, 4, 5, 6]
    
    // Conditional assignment operators
    $x = 10;
    $y = ($x > 5) ? "greater than 5" : "less than or equal to 5"; // "greater than 5"
    
    // Arithmetic operators
    $operand1 = 10;
    $operand2 = 3;
    $addition = $operand1 + $operand2;     // 13
    $subtraction = $operand1 - $operand2;  // 7
    $multiplication = $operand1 * $operand2;  // 30
    $division = $operand1 / $operand2;  // 3.333...
    $modulus = $operand1 % $operand2;   // 1
    
    echo "Comparison operators:\n";
    echo "\$result1: $result1, \$result2: $result2, \$result3: $result3, \$result4: $result4, \$result5: $result5, \$result6: $result6\n";
    
    echo "\nIncrement/Decrement operators:\n";
    echo "\$c: $c, \$d: $d\n";
    
    echo "\nLogical operators:\n";
    echo "\$logicalAnd: $logicalAnd, \$logicalOr: $logicalOr, \$logicalNot: $logicalNot\n";
    
    echo "\nString operators:\n";
    echo "\$concatenatedStr: $concatenatedStr\n";
    
    echo "\nArray operators:\n";
    print_r($concatenatedArr);
    
    echo "\nConditional assignment operators:\n";
    echo "\$y: $y\n";
    
    echo "\nArithmetic operators:\n";
    echo "\$addition: $addition, \$subtraction: $subtraction, \$multiplication: $multiplication, \$division: $division, \$modulus: $modulus\n";
}

operatorDemo();
?>
