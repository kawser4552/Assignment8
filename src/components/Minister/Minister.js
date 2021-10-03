import React from 'react';
import "./Minister.css";

const Minister = (props) => {
    console.log(props.minister); 
    return (
        
            <div className="col-md-4 g-5 ps-3 pe-3">
                <div className="card box" >
                    <img src={props.minister.img} className="card-img-top img-size" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><span className="fw-bold">Name:</span> { props.minister.name}</h5>
                    <h6 className="card-title">Age: { props.minister.age}</h6>
                    <h6 className="card-title">From: { props.minister.region}</h6>
                    <h6 className="card-title"> Position: { props.minister.occupation}</h6>
                    <h6 className="card-title">Salary: { props.minister.salary}</h6>
                            <button className="btn btn-info col-md-5 offset-3"
                                onClick={()=>props.handlerCart(props.minister)}
                                >Click to Add
                            </button>
                    </div>
                </div>
            </div>
        
    );
};

export default Minister;