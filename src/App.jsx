import { useEffect } from "react";
import Layout from "./Layout/layout";

function App() {
  useEffect(() => {
    const oneHourInMs = 60 * 60 * 1000;

    // Define a function to remove data after one hour
    const removeLocalStorageAfterOneHour = () => {
      localStorage.removeItem("token");
    };

    // Set a timer to call the removal function after one hour
    const timer = setTimeout(removeLocalStorageAfterOneHour, oneHourInMs);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <Layout />
    </div>
  );
}

export default App;
