function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here.
  //use the find() method to look through the object and look for specific id that matches the id that we need
  const foundIds = accounts.find((account) => account.id === id);
  //return it to get the object to the matching id
 return foundIds;
};

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
  //using the sort() method to organize the last names on the accounts
  accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1);
  return accounts; 
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
  // name:   { first: "Esther", last: "Tucker" }   trying to see how an object looks out the array
  const fullName = accounts.map(account => `${account.name.first} ${account.name.last}`);
  return fullName;
  //trying to see how my answer logged, thus the console.log below
 //console.log(fullName)
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};