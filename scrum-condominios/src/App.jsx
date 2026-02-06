import Home from "./Home";
import Payments from "./Payments";
import History from "./History";
import Notifications from "./Notifications";

function App() {
  return (
    <div>
      <h1>Sistema de Gestión de Condóminos</h1>
      <Home />
      <Payments />
      <History />
      <Notifications />
    </div>
  );
}

export default App;
