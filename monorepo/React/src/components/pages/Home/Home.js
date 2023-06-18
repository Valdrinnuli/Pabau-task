import "../../../styles/pages/home.css";
import ProductList from "../../Product/ProductList/ProductList";

const Home = (props) => {
  return (
    <div className="Home">
      <ProductList handleOptionSelect={props.handleOptionSelect} />
    </div>
  );
};

export default Home;
