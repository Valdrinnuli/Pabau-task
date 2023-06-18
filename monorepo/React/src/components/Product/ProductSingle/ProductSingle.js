const ProductSingle = (props) => {
  return (
    <div className="ProductSingle container">
      <h1>{props.selectedOption}</h1>
      <button onClick={props.handleBack}>Back to the products</button>
    </div>
  );
};
export default ProductSingle;
