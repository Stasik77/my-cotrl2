import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';


function App() {

    const [maxValues, setMaxValues] = useState<number>(0);
    const [minValues, setMinValues] = useState<number>(0);
    const [results, setResults] = useState<number | null>(null);



    useEffect(()=>{
        let valuesString = localStorage.getItem('CounterMaxValue')

        if (valuesString) {
            let newValue = JSON.parse(valuesString)
            setMaxValues(newValue)
        }
    },[])

 useEffect(()=>{
        let valuesString = localStorage.getItem('CounterMinValue')

        if (valuesString) {
            let newValue = JSON.parse(valuesString)
            setMinValues(newValue)
        }
    },[])

 useEffect(()=>{
        let valuesString = localStorage.getItem('CounterResValue')

        if (valuesString) {
            let newValue = JSON.parse(valuesString)
            setResults(newValue)
        }
    },[])



    useEffect(() => {
        localStorage.setItem('CounterMaxValue', JSON.stringify(maxValues));
    },[maxValues])
  useEffect(() => {
        localStorage.setItem('CounterMinValue', JSON.stringify(minValues));
    },[minValues])
  useEffect(() => {
        localStorage.setItem('CounterResValue', JSON.stringify(results));
    },[results])



    console.log('LocalStorage size:', JSON.stringify(localStorage).length);


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValues(parseFloat(e.currentTarget.value))
    }
    const changeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValues(parseFloat(e.currentTarget.value))

    }
    const changeHandlerResult = () => {

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
                                        callBack={changeHandlerResult}
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
