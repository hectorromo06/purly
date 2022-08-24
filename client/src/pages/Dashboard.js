import React from "react";
//import      from 

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

render(){
    return<>
    <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"></i>
              </div>
              <div className="mr-5">New Messages!</div>
            </div>
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-list"></i>
              </div>
              <div className="mr-5">New Patterns!</div>
            </div>
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-shopping-cart"></i>
              </div>
              <div className="mr-5">Placed Orders!</div>
            </div>
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-support"></i>
              </div>
              <div className="mr-5">New Sign Ups!</div>
            </div>
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
          </div>
        </div>
      </div>
      </>
}
}

//export default (DashboardPage);