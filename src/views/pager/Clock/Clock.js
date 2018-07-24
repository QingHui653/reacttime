import React,{component} from 'react';

class Clock extends component {


    render(){
        var toLocaleTimeString= this.props.toLocaleTimeString;

        return(
            <div className="clock">
                <h2>现在是 {toLocaleTimeString}</h2>
            </div>
        )
    }
}

export default Clock;