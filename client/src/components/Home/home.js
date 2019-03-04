import React, { Component } from 'react'

class Home extends Component {

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                
                  <div class="container">
                    <h1 class="header center">Lorem Ipsum</h1>
                    <div class="row center">
                    <h5 class="header col s12 light">Aenean posuere justo ex, sit amet fringilla nulla ullamcorper eget. Donec mi eros, tincidunt sed nisi id, malesuada volutpat felis. Cras posuere varius massa a suscipit. </h5>
                    <br />
                    <p>It's good to be home</p>
                    <img style={imageStyle} alt="test" src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
                    </div>
                  </div>

                
                
            </div>
        )

    }
}

export default Home
