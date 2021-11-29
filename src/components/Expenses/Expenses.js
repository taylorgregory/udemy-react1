import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterByYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredItemList = props.items.filter(
    (expense) => expense.date.getFullYear() == filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterByYear={filterByYearHandler}
        selected={filterYear}
      />
      {filteredItemList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
