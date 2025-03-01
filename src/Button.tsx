import React from 'react';


type ButtonPropsType = {
    title: string,
    callBack: () => void,
    isDisabled?: boolean,

}


const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <button
            className={!props.isDisabled ? 'btn' : 'btnDisabled'}
            onClick={onClickHandler}
            disabled={props.isDisabled}>{props.title}</button>
    );
};

export default Button;