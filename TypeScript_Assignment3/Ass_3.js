var numArray = [1, 4, 5, 6, 3, 77, 89];
var sortNumber = numArray.sort();
console.log("_________________________Number Sort_________________________");
console.log("Ascending Order Sorting Number =", sortNumber);
var sortNumberDesc = numArray.sort(function (n1, n2) { return n2 - n1; });
console.log("Descending Order Sorting Number =", sortNumberDesc);
console.log("_________________________String Sort_________________________");
var stringArray = ["apple", "cherry", "orange", "kiwi", "mango", "banana"];
var sortString = stringArray.sort();
console.log("Ascending Order Sorting String =", sortString);
var sortStringDesc = stringArray.sort(function (n1, n2) { return (n2 > n1 ? 1 : -1); });
console.log("Descending Order Sorting String =", sortStringDesc);
var bankAccounts = [
    {
        "accountBalance": 23000,
        "accountType": "Savings Account",
        "customerName": "Kurade",
        "id": 1,
        "customerId": 123,
        "accountNumber": 8655273048,
        "accountOpenDate": new Date(2019, 10, 10)
    }, {
        "accountBalance": 98767,
        "accountType": "Savings Account",
        "customerName": "Amol",
        "id": 2,
        "customerId": 123,
        "accountNumber": 8655232537,
        "accountOpenDate": new Date(2024, 3, 12)
    }, {
        "accountBalance": 56432,
        "accountType": "Savings Account",
        "customerName": "Anil",
        "id": 3,
        "customerId": 123,
        "accountNumber": 9869373048,
        "accountOpenDate": new Date(2020, 8, 26)
    }
];
console.log("bankAccounts", bankAccounts);
// bank account array on the basis of acc num, customername, balance, account date, 
console.log("_________________________Sort By AccountNumber_________________________");
console.log("Sort By AccountNumber Ascending =", bankAccounts.sort(function (a, b) { return a.accountNumber > b.accountNumber ? 1 : -1; }));
console.log("Sort By AccountNumber Descending =", bankAccounts.sort(function (a, b) { return a.accountNumber > b.accountNumber ? -1 : 1; }));
console.log("_________________________Sort By CustomerName_________________________");
console.log("Sort By CustomerName Ascending =", bankAccounts.sort(function (a, b) { return a.customerName > b.customerName ? 1 : -1; }));
console.log("Sort By CustomerName Descending =", bankAccounts.sort(function (a, b) { return a.customerName > b.customerName ? -1 : 1; }));
console.log("_________________________Sort By Balance_________________________");
console.log("Sort By Balance Ascending =", bankAccounts.sort(function (a, b) { return a.accountBalance > b.accountBalance ? 1 : -1; }));
console.log("Sort By Balance Descending =", bankAccounts.sort(function (a, b) { return a.accountBalance > b.accountBalance ? -1 : 1; }));
console.log("_________________________Sort By Date_________________________");
console.log("Sort By Date Ascending =", bankAccounts.sort(function (a, b) { return a.accountOpenDate > b.accountOpenDate ? 1 : -1; }));
console.log("Sort By Date Descending =", bankAccounts.sort(function (a, b) { return a.accountOpenDate > b.accountOpenDate ? -1 : 1; }));
