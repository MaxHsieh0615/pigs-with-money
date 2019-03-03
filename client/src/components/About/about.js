import React, { Component } from 'react'

class About extends Component {

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <div class="section center">
                <p>About Us</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ultrices ex eget dignissim. Donec sed molestie dolor. Nam nec nulla maximus, vestibulum mi non, sollicitudin orci. Integer auctor nulla non risus auctor aliquam sit amet quis nunc. Vivamus sit amet neque gravida, semper dui quis, tristique lacus. Pellentesque nec ipsum libero. Aenean id dapibus dui, et hendrerit purus.</p>
                </div>
                <br /><br />
                    <div class="row center">
                        <div class="col s12 m3">
                        <div class="card">
                            <div class="card-image">
                            <img src="images/sample-1.jpg"></img>
                            <span class="card-title">Card Title</span>
                            </div>
                            <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                        </div>

                        <div class="col s12 m3">
                        <div class="card">
                            <div class="card-image">
                            <img src="images/sample-1.jpg"></img>
                            <span class="card-title">Card Title</span>
                            </div>
                            <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
                            <a href="#">This is a link</a>
                            </div>
                        </div>
                        </div>

                        <div class="col s12 m3">
                            <div class="card">
                                <div class="card-image">
                                <img src="images/sample-1.jpg"></img>
                                <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m3">
                            <div class="card">
                                <div class="card-image">
                                <img src="images/sample-1.jpg"></img>
                                <span class="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        )

    }
}

export default About
