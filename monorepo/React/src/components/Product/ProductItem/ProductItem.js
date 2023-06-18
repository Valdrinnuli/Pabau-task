const ProductItem = (props) => {
  return (
    <article
      className="ProductItem"
      onClick={() => props.handleOptionSelect(props.title)}
    >
      <img src={props.img} alt={props.title} />
      {props.title}
    </article>
  );
};

export default ProductItem;
