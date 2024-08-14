import React from "react";

export type CountButtonProps = {
    counter: number;
    onClick?: () => void;
}

export default function CountButton({counter, onClick} : CountButtonProps){
    const handleClick = () => {
        if(onClick) onClick();
    }

    return (
        <>
            <div>Counter: {counter}</div>
            <button type="button" onClick={handleClick}>click to increase</button>
        </>
    )
}