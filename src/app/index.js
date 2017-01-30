import React from "react";
import { render} from "react-dom";

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <a href="www.fb.com/jaouadel">my facebook</a>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));