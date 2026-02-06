import React from "react";

function InvestmentOption(){
    return(
        <div className="container text-center">
            <h4>Investment options with Zerodha demat account</h4>
            <div className="row">
                <div className="col-6 p-3">
                    {/* <img src="media/images/stocks-acop.svg" /> */}
                    <div className="row p-5">
                        <div className="col-auto ">
                            <img src="media/images/stocks-acop.svg" />
                        </div>
                         <div className="col-auto text-start">
                            <h4 className="m-0">Stocks</h4>
                            <p className="text-muted mt-2">Invest in all exchange-listed<br/>securities</p>
                            
                        </div>
                    </div>
                      <div className="row p-5">
                        <div className="col-auto ">
                            <img src="media/images/stocks-acop.svg" />
                        </div>
                         <div className="col-auto text-start">
                            <h4 className="m-0">Stocks</h4>
                            <p className="text-muted mt-2">Invest in all exchange-listed<br/>securities</p>
                            
                        </div>
                    </div>
                  
                </div> 
                <div className="col-6 p-3">
                    <div className="row p-5">
                        <div className="col-auto ">
                            <img src="media/images/stocks-acop.svg" />
                        </div>
                         <div className="col-auto text-start">
                            <h4 className="m-0">Stocks</h4>
                            <p className="text-muted mt-2">Invest in all exchange-listed<br/>securities</p>
                            
                        </div>
                    </div>
                      <div className="row p-5">
                        <div className="col-auto ">
                            <img src="media/images/stocks-acop.svg" />
                        </div>
                         <div className="col-auto text-start">
                            <h4 className="m-0">Stocks</h4>
                            <p className="text-muted mt-2">Invest in all exchange-listed<br/>securities</p>
                            
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default InvestmentOption;