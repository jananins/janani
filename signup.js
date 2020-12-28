import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Jumbotron,Button} from 'react-bootstrap';
//import ReactDOM from 'react-dom';
import Login from './login.js';
import { Link } from 'react-router-dom';
export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
     
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
         
            fields["emailid"] = "";
           
            fields["password"] = "";
            fields["number"]="";
            this.setState({fields:fields});
            this.props.register(fields);
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
  
       
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
       
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }

        if (!fields["number"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your number.";
        }
  
        
  
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
    render() {
        return (
      <div class="signup-form">
                     
                
                
        
        
                      <form onSubmit={this.submituserRegistrationForm}>
                     <p text-align="right"> member login</p> 
                
                <div className="form-group">
                    
                    <input type="email" text-align="right" className="form-control"  name="emailid" placeholder="Enter email" value={this.state.fields.emailid} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>

                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Enter password" name ="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>
                </div>
                <div className="form-group">
                    
                    <input type="number" className="form-control" placeholder="Enter mobile" name="number" value={this.state.fields.password} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.number}</div>
                </div>
               

                <button type="submit" className="btn btn-dark btn-lg btn-block">signin</button>
                <p className="forgot-password text-right">
                    already user <a href="login.js">logiin</a>
                </p>
               
                <p>
                    <Link to="./reduxform\src\login.js" component={Login}>Register</Link>
                    
                </p>
            </form>
            </div>
            
        );
    }
}
//ReactDOM.render(<Signup/>,document.getElementById("root"));

/*const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.fields
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: fields => dispatch(loginaction.register(fields))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);*/