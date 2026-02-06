import React from "react";

function SignupNow(){
    return (
        <div className="container p-5">
            <div className="row">
            <div className="col-6">
                <img src="media/images/account_open.svg" />
            </div>
            <div className="col-6 text-muted ">
                <h2 className="mb-3">Signup now</h2>
                <p className="mt-3 mb-3">Or track your existing application</p>
               <div class="input-group flex-nowrap" id="numberenter">
                    <span class="input-group-text" id="addon-wrapping"><img src="media/images/india-flag.svg" />+91</span>
                    <input type="text" class="form-control" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="addon-wrapping"/>
               </div>
               <button type="button" class="btn btn-primary btn-lg" id="otp">Get Otp</button>
               <p className="mt-3 mb-3">By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a></p>
               <hr></hr>
               <p className="mt-3">Looking to open NRI account? <a href="#">Click here</a></p>
            </div>
            </div>
        </div>
    )
}

export default SignupNow;