/* Total */
class Total extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      let total = this.props.total.toFixed(2);
  
      return (
        <div className="container">
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#F6F6F6",
            padding: "10px"
          }}
        >
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">total price:</span>
            <span className="col-6 text-right">${total}</span>
          </h3>
        </div>
        </div>
      );
    }
  }
  // TODO: Create CHECKOUT btn to debit from piggy bank
  
  