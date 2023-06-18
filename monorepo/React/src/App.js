import { useState } from "react";
import "../src/styles/app.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import ProductSingle from "./components/Product/ProductSingle/ProductSingle";

function App() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStep(2);
  };

  const handleBack = () => {
    setSelectedOption("");
    setStep(1);
  };

  return (
    <main className="App">
      <Header currentStep={step} />
      {step === 1 ? (
        <Home handleOptionSelect={handleOptionSelect} />
      ) : (
        <ProductSingle
          selectedOption={selectedOption}
          handleBack={handleBack}
        />
      )}
      <Footer />
    </main>
  );
}

export default App;
