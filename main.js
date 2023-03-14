/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code

    Step 1: Iterate Applicants
    Step 2: Calculate Yearly Expenses
    Step 3: Calculate Expenses Percentage of Salary
    Step 4: Final Qualification Check
    Step 5: Output Messages
*/

// step 1 Step 1: Iterate Applicants
// Below the boilerplate array, you will see a comment that tells you where you should iterate the array. Write your code there and then once complete, move on to step 2. It is important that your for..of loop is in the modules scope, and not inside the functions themselves.

// calculate annual expense by mult input by 12
//functions needs access to mortgageAPp objects 
//return yearly expenses
const calculateYearlyExpenses = (mortgageApplicants) => {
    const applicantYearlyExpense = mortgageApplicants.monthlyExpenses * 12
       return applicantYearlyExpense
}

// It should divide the yearly expenses by the annual salary, and then take that sum and multiply it by 100. This is the percentage of expenses to salary.
// The function should return the calculated percentage.
const calculateExpensesPercentage = (applicant, yearlyExpense ) => {
    const percentage = (yearlyExpense / applicant.salary) * 100
    return percentage
}

// Step 2: Calculate Yearly Expenses
// The first function should calculate the total yearly expenses for each person. It should access the correct property on an mortgage application object that was input to the function, and perform a mathematical calculation to determine yearly expenses.


// *
//     Iterate the array of mortgage applicants and use your
//     functions to determine if they are qualified for a mortgage
//     for loop naming applicates
//     use dot to access salary vs monthly exp
//     pull yearly -
//     if 
// *
// Step 3: Calculate Expenses Percentage of Salary
// In order to qualify for a mortgage, a lender looks at at your yearly salary, and how much your expenses add up to for that year. If your yearly expenses are too high, it reduces your chance to get a mortgage approved.
// The second function should accept an application object, and the calculated yearly expenses as input. Remember that the previous function calculated the yearly expenses.
//  If the percentage is greater than 10, the value of the qualified property on the mortgage object should be false. The value of the amount property on the mortgage object should be 0.
//  The percentage of expenses to salary. Remember that the previous function calculated the percentage.If the percentage of expenses to salary is less than 10, then the applicant object's mortgage property - which is also an object - should have a new property added named qualified and its value should be true. It should have another property added to it named amount. The value should be the person's salary multiplied by 5.

const isQualified = (applicant, percentage) => {
    //for (const applicant of mortgageApplicants)
    if (percentage < 10)  {
        applicant.mortgage.qualified = true
        applicant.mortgage.amount = applicant.salary * 5
        console.log(`${applicant.name} is qualified for a maxium mortage of ${applicant.salary * 5}`)
    } else {
        applicant.mortgage.qualified = false
        applicant.mortgage.amount = 0
    }
    return applicant
}
  
const mortgageApplicants = [
    { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" },
    { id: 2, name: "Fannie Swaniawski", monthlyExpenses: 783.82, salary: 119255.48, mortgage: {}, address: "3350 McDermott Bridge", city: "Amaliaborough" },
    { id: 3, name: "Patsy Jaskolski", monthlyExpenses: 803.34, salary: 103376.76, mortgage: {}, address: "585 Kassulke River", city: "New Hattieport" },
    { id: 4, name: "Rufus Moore", monthlyExpenses: 845, salary: 88269.54, mortgage: {}, address: "46332 O'Hara Mountain", city: "North Idell" },
    { id: 5, name: "Philip Abshire", monthlyExpenses: 781.34, salary: 65333.78, mortgage: {}, address: "633 Thiel Ville", city: "Uliseston" },
    { id: 6, name: "Wendy Kiehn", monthlyExpenses: 537.32, salary: 59702.6, mortgage: {}, address: "82441 Mills Turnpike", city: "Port Libbieberg" },
    { id: 7, name: "Ray Lubowitz", monthlyExpenses: 550.15, salary: 181362.87, mortgage: {}, address: "855 Isabel Forge", city: "Hesseltown" },
    { id: 8, name: "Lawrence Hirthe MD", monthlyExpenses: 940.74, salary: 100269.15, mortgage: {}, address: "68459 Jordon Crossing", city: "Boview" },
    { id: 9, name: "Mario Beahan I", monthlyExpenses: 618.11, salary: 122226.79, mortgage: {}, address: "71521 Walter Drive", city: "Rosannaton" },
    { id: 10, name: "Rosa Hauck", monthlyExpenses: 763.82, salary: 89335.68, mortgage: {}, address: "33954 Reba Motorway", city: "Port Lesly" },
    { id: 11, name: "Becky Wiegand", monthlyExpenses: 212.27, salary: 76137.45, mortgage: {}, address: "3972 Stroman Parks", city: "West Clotildeport" },
]
//  Step 4: Final Qualification Check
//  The third function should accepts two inputs.
 
//  A mortgage applicant object.



const yearlyExpense = ( ) => {
    for(const applicant of mortgageApplicants) {
        const yearlyExpense = calculateYearlyExpenses(applicant)
        const percentage = calculateExpensesPercentage( applicant, yearlyExpense )
        const whoQualified = isQualified(applicant, percentage)
    }
    
    return yearlyExpense
}


yearlyExpense()































// **********  Do not touch this code  **********
module.exports = {
    calculateYearlyExpenses, calculateExpensesPercentage, isQualified
}
// **********  Do not touch this code  **********