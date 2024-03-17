<?php

// Integer
$integerVariable = 10;

// Float
$floatVariable = 5.6;

$stringVariable = "Samad Amir";

$booleanVariable = true;

$arrayVariable = array(1, 2, 3, 4, 5);

echo "Looping through an integer:\n";
for ($i = 0; $i < $integerVariable; $i++) {
    echo "$i ";
}
echo "\n\n";

echo "Looping through a float:\n";
for ($i = 0; $i < $floatVariable; $i += 0.5) {
    echo "$i ";
}
echo "\n\n";
echo "Looping through a string :\n";
for ($i = 0; $i < strlen($stringVariable); $i++) {
    echo $stringVariable[$i] . " ";
}
echo "\n\n";

echo "Looping through a boolean:\n";
for ($i = 0; $i < 2; $i++) {
    echo $booleanVariable ? "true " : "false ";
}
echo "\n\n";

echo "Looping through an array:\n";
foreach ($arrayVariable as $value) {
    echo "$value ";
}
echo "\n\n";

?>
