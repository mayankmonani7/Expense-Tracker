import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/incomeExpenses";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
