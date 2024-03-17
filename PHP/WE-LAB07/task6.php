<?php

function quadraticRoots($a, $b, $c) {
    $discriminant = $b * $b - 4 * $a * $c;
    $roots = array();

    if ($discriminant > 0) {
        $roots[] = (-$b + sqrt($discriminant)) / (2 * $a);
        $roots[] = (-$b - sqrt($discriminant)) / (2 * $a);
    } elseif ($discriminant == 0) {
        $roots[] = -$b / (2 * $a);
    }

    return $roots;
}

function printRoots($roots) {
    switch (count($roots)) {
        case 0:
            echo "No real roots.\n";
            break;
        case 1:
            echo "One real root: {$roots[0]}\n";
            break;
        case 2:
            echo "Two real roots: {$roots[0]} and {$roots[1]}\n";
            break;
    }
}

// Quadratic coefficients
$a = 1;
$b = -3;
$c = 2;

// Calculate roots
$roots = quadraticRoots($a, $b, $c);

// Print roots
printRoots($roots);
?>
