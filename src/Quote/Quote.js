import React from 'react'

const Quote = (props) => {

    let quoteControls = null;

    if (props.remove) {
        quoteControls = (
            <div>
                <button onClick={props.remove}><span role='img' aria-label="x">❌</span></button>
            </div>
        );
    }

    return (
        <div className="Quote">
            <h3>
                {props.children}
            </h3>
            {/* <small>-{props.author}, {props.date}.</small> */}
            <br />

            {quoteControls}

        </div>
    )
}

export default Quote;
