function carLoanPayment(years,loanAmount,interestRate){
  return (loanAmount*interestRate)/(years*12)
  }
function homeLoanPayment(years,loanAmount,interestRate){
  return (loanAmount*interestRate)/(years*12)
  }
  

//main program
let i=0
let times=''
let amount=''
let interest=''
do {
  times = prompt('To calculate a car loan enter the number of years. For a house loan, enter either 15 or 30 years.')
  amount = prompt('Enter the loan amount.')
  interest = prompt('Enter the interest rate.')
  alert(`A home loan for ${amount} over ${times} years at ${interest} percent interest would have a monthly payment of ${Math.round(homeLoanPayment(times,amount,interest))}. OR A car loan for ${amount} over ${times} years at ${interest} interest would have a monthly payment of ${Math.round(carLoanPayment(times,amount,interest))}.`)
}
while {
  times === null && amount === null && interest === null
  }