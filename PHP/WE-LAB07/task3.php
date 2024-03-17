<?php

function factorial($n) {
    if ($n < 0) {
        exit("Error: Cannot calculate factorial of a negative number.\n");
    }
    
    if ($n == 0) {
        return 1;
    }
    
    return $n * factorial($n - 1);
}

$number = 5; 
$result = factorial($number);
echo "Factorial of $number is: $result\n";

?>
