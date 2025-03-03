import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';


function App() {

    const [maxValues, setMaxvalues] = useState<number>(0);
    const [minValues, setMinValues] = useState<number>(0);
    const [results, setResults] = useState<number | null>(null);


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxvalues(parseFloat(e.currentTarget.value))

    }
    const changeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValues(parseFloat(e.currentTarget.value))

    }
        const changeH = () => {

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


        return (
            <div className="App">
                <div className="counter_app">
                    <div className="counter_border">
                        <div><span>max value : </span>
                            <input className={isNumberDone ? 'error' : ''}
                                   type="number"
                                   value={maxValues}
                                   onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <span>start value : </span>
                            <input className={isNumberDone ? 'error' : ''}
                                   type="number"
                                   value={minValues}
                                   onChange={changeHandler2}
                            /></div>

                    </div>
                    <div>
                        <div>
                            <div className="btn_set">
                                <Button title="Set"
                                        callBack={changeH}
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
