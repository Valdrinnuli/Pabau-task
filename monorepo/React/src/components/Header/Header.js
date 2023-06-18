import "../../styles/components/header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h4>Choose Product</h4>
      <span>{props.currentStep} / 2</span>
    </header>
  );
};

export default Header;
