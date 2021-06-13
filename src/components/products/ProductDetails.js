function ProductDetails(props) {
  return (
    <p>product details: {props.match.params.id}</p>
  )
}

export default ProductDetails;