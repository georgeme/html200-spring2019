// const b = 'balance';
// const w = 'withdrawal';
// const d = 'deposit';
// const q = 'quit';
let quit = false;
let balance = 50000;

function banking() {
  while(quit === false) {
    let input = prompt("What transaction would you like?");

    if (input === 'q') {
    quit = true;
  } else if (input === 'b') {
    result = balance;
    alert('$' + result.toFixed(2));
  } else if (input === 'd') {
    let deposit = prompt('How much would you like to deposit?')
    result = Number(balance) + Number(deposit);
      if (deposit > 50000) {
        alert('You cannot deposit more than $50,000');
        { break; }
      }
    balance = balance + Number(deposit);
    alert('$' + result.toFixed(2));
  } else if (input === 'w') {
    let withdrawal = prompt("How much would you like to withdrawal?");
    result = Number(balance) - Number(withdrawal);
    balance = balance - Number(withdrawal);
    alert('$' + balance.toFixed(2));
  }

  }

}
