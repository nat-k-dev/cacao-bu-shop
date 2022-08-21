import React, { Component } from 'react';

export default class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="mt-3 mb-3 text-center">
                    If you are interested in my production, please, write me via this form 👇
                </p>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Your email:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your message:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                

            </React.Fragment>
                //<Product />
        )
    }
}
