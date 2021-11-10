import React from 'react';

function ExpenseItem() {
  const expenseDate = new Date(2021, 10, 11);
  const expenseItem = 'Car Insurance';
  const expenseCost = 2984.88;
  return (
    <div>
      <div>{expenseDate.toISOString()}</div>
      <div>
        <h2> {expenseItem}</h2>
        <div>${expenseCost} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
