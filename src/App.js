import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const Expenses = [
    {
      Id: 'e1',
      Title: 'Insurance',
      Amount: 23.5,
      Date: new Date(23, 8, 16),
    },
    {
      Id: 'e2',
      Title: 'Buying Books',
      Amount: 22.3,
      Date: new Date(23, 8, 22),
    },
    {
      Id: 'e3',
      Title: 'Buying a car',
      Amount: 20000,
      Date: new Date(23, 8, 26)
    },

  ];
  return (
    <div>
      <h1>Lets get started</h1>
      <ExpenseItem
        Title={Expenses[0].Title}
        Amount={Expenses[0].Amount}
        Date={Expenses[0].Date}
      />
      <ExpenseItem
        Title={Expenses[1].Title}
        Amount={Expenses[1].Amount}
        Date={Expenses[1].Date} />
      <ExpenseItem
        Title={Expenses[2].Title}
        Amount={Expenses[2].Amount}
        Date={Expenses[2].Date} />
    </div>

  );
}

export default App;
