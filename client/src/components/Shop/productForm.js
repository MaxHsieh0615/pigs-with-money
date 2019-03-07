/* ProductForm */
class ProductForm extends Component {
    submit(e) {
      e.preventDefault();
      var product = {
        name: this.refs.name.value,
        price: Number(this.refs.price.value),
        info: this.refs.info.value
      };
      console.log(this.refs.name.value, this.refs.price.value);
      this.props.handleProduct(product);
      this.refs.name.value = "";
      this.refs.price.value = 0;
      this.refs.info.value = "";
    }
  
    render() {
      return (
        <div className="container">
        <form onSubmit={this.submit.bind(this)}>
          <h3>add item</h3>
          <div className="row form-group">
            <label className="col-sm-2  col-sm-form-label">item name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                ref="name"
                placeholder="Museum Visit"
                required
              />
            </div>
          </div>
  
          <div className="row form-group">
            <label className="col-sm-2  col-sm-form-label">price:</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                ref="price"
                placeholder="10"
                required
              />
            </div>
          </div>
  
          <div className="row form-group">
            <label className="col-sm-2  col-sm-form-label">info:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                ref="info"
                placeholder="Let's go to the museum!"
              />
            </div>
          </div>
  
          <div className="row form-group">
            <div className="offset-2 col-10">
              <button className="btn btn-outline-primary">create item</button>
            </div>
          </div>
  
          <hr />
        </form>
        </div>
      );
    }
  }
  
  