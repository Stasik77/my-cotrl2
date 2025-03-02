import React from 'react';
import Button from './Button';


type CounterType = {
    minValues: number;
    maxValues: number;
    results: number | null;
    onIncrement: () => void;
    onReset: () => void;
    isNumberDone: boolean;
}


const Counter = (props: CounterType) => {

    // let [num, setNum] = React.useState<number>(props.results || props.minValues);
    const isNumberNon = props.results !== null && props.results <= props.minValues
    const isNumberMax = props.results !== null && props.results >= props.maxValues

    const onClickHandler = () => {
        props.onIncrement()

    }

    const onClickResetHandler = () => {
        props.onReset()
    }


    return (
        <div className="app-header">
            <div className="app">
                <div className="counter_title">
                    <h1 className={props.results === props.maxValues ? 'num_isDon' : 'num'}>

                        {props.results === null || props.results === undefined
                            ? 'enter value and press \'set\''
                            : props.isNumberDone
                                ? <span className="error_text">Incorrect value</span>
                                : props.results
                        }

                    </h1>

                </div>
                <div className="block_bnt">
                    <Button
                        title={'inc'} callBack={onClickHandler}
                        isDisabled={isNumberMax}
                    />
                    <Button
                        title={'reset'}
                        callBack={onClickResetHandler}
                        isDisabled={isNumberNon}
                    />
                </div>
            </div>
        </div>
    );
};

export default Counter;