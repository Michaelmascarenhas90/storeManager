import Header from "../Header"
import Main from "../Main"

function Budget({cliente}) {
  return (
    <div>
      <Header client={ cliente } />
      <Main client={ cliente } />
    </div>
  );
}

export default Budget;
