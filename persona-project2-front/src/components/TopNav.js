import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo} from '../ducks/reducer';
import Avatar from 'material-ui/Avatar';


class TopNav extends Component{
    componentDidMount(){
        this.props.getUserInfo()
    }


    render(){

      

        return(
            <div className="top-nav-bar">
            <div className ="left-nav-links" >
                
                <Link to="/newevent">Request Help</Link>
                <Link to="/viewevents">Help Someone</Link>
                
                
            </div>
            <div className="main-logo">

                <Link to="/">Lend A Hand</Link>

            </div>
            <div className="login-div">

                <Link to="/about">About</Link>
                   <div className="ternary"> 
                        {this.props.user ? 
                        <div className="logged-in"> 
                                <Avatar src={this.props.user.picture} 
                                size={75}
                                margin={5}/> 
                            
                                <a href="http://localhost:3001/logout">Log Out</a>

                        </div> 
                        : 
                        <div className="login-button" >
                            <a href="http://localhost:3001/login" class="btn btn-success">Log in</a>
                        </div>
                        }
                   </div> 
                

            </div> 
        </div>        
    )
        
    }

}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

let outputActions = {
    getUserInfo: getUserInfo
}

export default connect(mapStateToProps, outputActions)(TopNav);