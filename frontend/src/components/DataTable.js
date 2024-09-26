
import React from "react";
import Header from "../mixins/Header";
import Navigation from "../mixins/Navigation";
import Panel from "../mixins/Panel";

function DataTable({ content }) {
    return (
        <div className="app">
            <Header tagline="Fresh Seafood Market" />
            <Navigation />
            <Panel name={{ value: "dashboard test" }} />
            {content}
        </div>
    );
}
export default DataTable;