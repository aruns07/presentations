import React, {Component} from 'react';
import './navigation.css'

class Nav extends Component {
    constructor() {
        super();
        console.log(this.props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><button onClick={()=> {this.props.navButtonClicked('pages/first.html')}}>First</button></li>
                    <li><button onClick={()=> {this.props.navButtonClicked('pages/second.html')}}>Second</button></li>
                    <li><button onClick={()=> {this.props.navButtonClicked('data/data-first.html')}}>Data Page</button></li>
                </ul>
            </nav>
        );
    }
}
 export default Nav;