<?php

function recursiveSearch($arr, $element, $startIndex, $endIndex) {
    if ($startIndex > $endIndex) {
        return false;
    }

    $midIndex = (int)(($startIndex + $endIndex) / 2);

    if ($arr[$midIndex] === $element) {
        return true;
    }

    if ($element < $arr[$midIndex]) {
        return recursiveSearch($arr, $element, $startIndex, $midIndex - 1);
    }

    if ($element > $arr[$midIndex]) {
        return recursiveSearch($arr, $element, $midIndex + 1, $endIndex);
    }
}

$A = array(5, 4, 3, 2, 1, 6, 10, 9, 7, 8);
$searchElement = 11;

if (recursiveSearch($A, $searchElement, 0, count($A) - 1)) {
    echo "Element $searchElement found in the array.\n";
} else {
    echo "Element $searchElement not found in the array.\n";
}

?>
