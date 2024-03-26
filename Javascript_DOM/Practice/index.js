let currentOperator =''
let previousOperator=''
let operation=''

function appendToResult(value)
{
    currentOperator+=value
    document.getElementById('result').value=currentOperator
}
function clearResult(value)
{
    currentOperator=''
    document.getElementById('result').value=''
}
function performOperation(op)
{
    operation=op
    previousOperator=currentOperator;
    currentOperator=''
}
function calculateResult()
{
    let result
    let prev = parseFloat(previousOperator)
    let curr = parseFloat(currentOperator)

    switch (operation)
    {
        case '+':
        result=curr+prev
        break;
        case '-':
            result=prev-curr;
            break;
        case '/':
            result=prev/curr;
            break
        case '*':
            result=prev*curr;
            break
        default:
            return
    }
    document.getElementById('result').value=result
    currentOperator=result.toString()
    previousOperator=''
}