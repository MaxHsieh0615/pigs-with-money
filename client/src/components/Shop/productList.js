/* ProductList */
class ProductList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        total: 0,
        productList: ""
      };
  
      this.createProduct = this.createProduct.bind(this);
      this.calculateTotal = this.calculateTotal.bind(this);
      this.showProduct = this.showProduct.bind(this);
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ productList: productList });
      }, 1000);
    }
  
    createProduct(product) {
      this.setState({
        products: this.state.productList.push(product)
      });
    }
  
    calculateTotal(price) {
      this.setState({
        total: this.state.total + price
      });
      console.log(this.state.total);
    }
  
    showProduct(info) {
      console.log(info);
      alert(info);
    }
  
    render() {
      if (!this.state.productList) return <p>loading...!!!!</p>;
  
      var component = this;
      var products = this.state.productList.map(function(product) {
        return (
          <div className="container">
          <Product
            name={product.name}
            price={product.price}
            info={product.info}
            handleShow={component.showProduct}
            handleTotal={component.calculateTotal}
          />
          </div>
        );
      });
  
      return (
        <div className="container">
          <ProductForm handleProduct={this.createProduct} />
          {products}
          <Total total={this.state.total} />
        </div>
      );
    }
  }
  
  export default ProductList;
  