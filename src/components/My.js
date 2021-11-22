import React from "react";
import { connect } from "react-redux";

const My = (props) => {
    return (
        <div>
            {console.log(props.todos)}
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        todos: store.todos,
    };
};

export default connect(mapStateToProps)(My);
