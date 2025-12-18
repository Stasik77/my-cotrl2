import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';


const MIN_VALUE_DEFAULT = 0
const MAX_VALUE_DEFAULT = 0

function App() {
    const [settingStore, setSettingsStore] = useState({
        maxValue: 10,
        minValue: 0,
        isSettingsProcess: true,
    })
    const [maxValues, setMaxvalues] = useState<number>(MAX_VALUE_DEFAULT);
    const [minValues, setMinValues] = useState<number>(MIN_VALUE_DEFAULT);
    const [results, setResults] = useState<number | null>(null);


    useEffect(() => {
        const savedMax = localStorage.getItem('CounterMaxValue');
        const savedMin = localStorage.getItem('CounterMinValue');
        const savedRes = localStorage.getItem('CounterResValue');


        // if (savedMax) {
        //     let newValue = JSON.parse(savedMax);
        //     setMaxValues(newValue);
        // }
        //    if (savedMin) {
        //     let newValue = JSON.parse(savedMax);
        //     setMinValues(newValue);
        // }
        //    if (savedRes) {
        //     let newValue = JSON.parse(savedMax);
        //     setResults(newValue);
        // }
        //
        if (savedMax) setMaxvalues(JSON.parse(savedMax));
        if (savedMin) setMinValues(JSON.parse(savedMin));
        if (savedRes) setResults(JSON.parse(savedRes));
    }, []);


    useEffect(() => {
        localStorage.setItem('CounterResValue', JSON.stringify(results));
    }, [results]);

    const changeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = parseFloat(e.currentTarget.value)
        localStorage.setItem('CounterMaxValue', JSON.stringify(newMaxValue));
        setMaxvalues(newMaxValue)

    }
    const changeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = parseFloat(e.currentTarget.value)
        localStorage.setItem('CounterMinValue', JSON.stringify(newMinValue));
        setMinValues(newMinValue)

    }
    const changeHandlerRes = () => {

        setResults(minValues)
    }
    const onIncrement = () => {
        if (results !== null && results < maxValues) {
            setResults(results + 1);
        }
    }

    const onReset = () => {
        setResults(minValues);
    };

    const isNumberDone = minValues >= maxValues || minValues === maxValues || minValues < 0 || maxValues < 0;


    const errorClass = isNumberDone ? 'error' : ''

    return (
        <div className="App">
            <div className="counter_app">
                <div className="counter_border">
                    <div><span>max value : </span>
                        <input className={errorClass}
                               type="number"
                               value={maxValues}
                               onChange={changeHandlerMaxValue}
                        />
                    </div>
                    <div>
                        <span>start value : </span>
                        <input className={errorClass}
                               type="number"
                               value={minValues}
                               onChange={changeHandlerMinValue}
                        /></div>
                </div>
                <div>
                    <div>
                        <div className="btn_set">
                            <Button title="Set"
                                    callBack={changeHandlerRes}
                                    isDisabled={isNumberDone}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <Counter
                minValues={minValues}
                maxValues={maxValues}
                results={results}
                onIncrement={onIncrement}
                onReset={onReset}
                isNumberDone={isNumberDone}
            />
        </div>
    )
}


export default App;
