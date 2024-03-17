<?php

function generateFibonacciForLoop($limit) {
    $fibonacciSeries = array(1, 1);
    for ($i = 2; ; $i++) {
        $nextFibonacci = $fibonacciSeries[$i - 1] + $fibonacciSeries[$i - 2];
        if ($nextFibonacci > $limit) {
            break;
        }
        $fibonacciSeries[] = $nextFibonacci;
    }
    return $fibonacciSeries;
}

function generateFibonacciWhileLoop($limit) {
    $fibonacciSeries = array(1, 1);
    $i = 2;
    while (true) {
        $nextFibonacci = $fibonacciSeries[$i - 1] + $fibonacciSeries[$i - 2];
        if ($nextFibonacci > $limit) {
            break;
        }
        $fibonacciSeries[] = $nextFibonacci;
        $i++;
    }
    return $fibonacciSeries;
}

function sumDivisibleBy357($series) {
    $sum = 0;
    foreach ($series as $num) {
        if ($num % 3 === 0 && $num % 5 === 0 && $num % 7 === 0) {
            $sum += $num;
        }
    }
    return $sum;
}

// Generate Fibonacci series using for loop
$fibonacciSeriesForLoop = generateFibonacciForLoop(1000);
$sumForLoop = sumDivisibleBy357($fibonacciSeriesForLoop);

// Generate Fibonacci series using while loop
$fibonacciSeriesWhileLoop = generateFibonacciWhileLoop(1000);
$sumWhileLoop = sumDivisibleBy357($fibonacciSeriesWhileLoop);

// Output the result
echo "Fibonacci series generated using for loop: " . implode(", ", $fibonacciSeriesForLoop) . "\n";
echo "Sum of Fibonacci numbers divisible by 3, 5, and 7 only (for loop): $sumForLoop\n";
echo "\n";
echo "Fibonacci series generated using while loop: " . implode(", ", $fibonacciSeriesWhileLoop) . "\n";
echo "Sum of Fibonacci numbers divisible by 3, 5, and 7 only (while loop): $sumWhileLoop\n";

?>
