import { BrowserRouter } from "react-router-dom";
import RouterFlow from "./web/routes/RouterFlow";
import ErrorBoundary from "./web/utils/ErrorBoundary";
import Header from "./web/pages/header";

const App = () => {
  return (
    // <>
    // <Core>
    //   <Users/>
    // </Core>
    // </>
    // <>
    // <Users/>
    // </>
    <BrowserRouter>
      <ErrorBoundary>
        <Header/>
        <RouterFlow />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
