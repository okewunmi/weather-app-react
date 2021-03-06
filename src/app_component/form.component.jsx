import React from "react"; 
import './form.style.css';

const Form = (props) => {
    return (
        <div className="container">
            <div>{props.error? error:null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" placeholder="city" autoCapitalize="off" onChange={props.onChange} />
                </div>
                <div className="col-md-3 ">
                    <input type="text" className="form-control" name="country" placeholder="country" autoCapitalize="off" onChange={props.onChange} />
                </div>
                <div className="col-md-3 mt-md-0 py-2 text-md-left">
                    <button className="btn btn-warning" onClick={props.onSubmit}>Get Weather</button>
                </div>
                </div>
            </form>
            </div>
      
    );
};
function error(){
    return (
        <div className="alert alert-danger mx-5" role='alert'>
            please Enter city and country
        </div>
    )

}
export default Form;