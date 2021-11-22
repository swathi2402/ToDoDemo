import React from "react";
import { connect } from "react-redux";

const My = (props) => {
    return (
        <div>
            <div>
                {console.log(props.todos)}
            </div>
            <div>
                {console.log(props.names)}
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        todos: store.todos,
        names: store.names,
    };
};

export default connect(mapStateToProps)(My);
