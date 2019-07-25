const constructionCost = 100;
const constructionPrice = 120;
const borrowedAmount = 60;
const interestRate = 0.01;
const discountRate = 0.04;
const year = 365;

/*
Pre-Installed Case
*/

const benefit1 = borrowedAmount + constructionPrice/(1+discountRate);
const cost1 = constructionCost + borrowedAmount*(1+interestRate)/(1+discountRate);

const NPV1 = benefit1 - cost1;

/*
Installed Case
*/

let incomeAmount = 0;
let debtAmount = 0;
let T = 0;
let reimbursement = 0;

for (let t=1; t<=year; t++) {
    const s = constructionPrice/year
    const r = (1+discountRate)**(t/year)
    const x = s/r;

    incomeAmount = incomeAmount + x;

    const d = borrowedAmount + (borrowedAmount*interestRate/year)*t
    const y = d/r;

    if (y - incomeAmount < 0 && T == 0) {
        T = t;
        reimbursement = d;
        console.log(`Debt is returned on: Day ${T} at the price of ${reimbursement}`)
    }
}

const benefit2 = borrowedAmount + incomeAmount;
const cost2 = constructionCost + reimbursement;

const NPV2 = benefit2 - cost2;

/*
Show Result 
*/
const gap = NPV2 - NPV1
console.log(`Pre-Installed Case: ${NPV1}`);
console.log(`Installed Case: ${NPV2}`);
console.log(`Gap: ${gap}`);

const increasedPercentage = gap/NPV1;
console.log(`Increased Percentage: ${increasedPercentage*100} %`)