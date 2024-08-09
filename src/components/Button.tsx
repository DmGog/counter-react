import React, {memo} from "react";

type ButtonType = {
    title: string
    onClick: () => void
    disabled?: boolean

}

export const Button = memo( (props: ButtonType) => {
    const {title, onClick, disabled} = props
    return (
        <button onClick={onClick} disabled={disabled}>{title} </button>
    );
});


