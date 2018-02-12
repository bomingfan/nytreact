import React from 'react';
import "./Panel.css";

const Panel = props =>

    <div className="panel panel-default">
        <div className="panel-heading">
            <h3>{props.title}</h3>
        </div>
        <div className="panel-body">
            {props.children}
        </div>
    </div>;

export default Panel;