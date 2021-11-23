import React from "react";
import "./TodoLoading.css"

function TodoLoading() {
    return (
        <section className="TodoLoading">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export { TodoLoading }