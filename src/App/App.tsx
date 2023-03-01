import QueryClientProvider from "./api/QueryClientProvider";
import { ToastProvider } from "react-toast-notifications";
import Parent from "../pages/family/Parent";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <QueryClientProvider>
          <Parent />
        </QueryClientProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
