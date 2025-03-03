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
    const changeH =()=>{
        setResults(minValues)
    }
    const onIncrement = ()=>{
        if (results !== null && results < maxValues) {
            setResults(results + 1);
        }
    }

    const onReset = () => {
        setResults(0);
    };
    return (
        <div className="App">
            <div>
                <span>max</span>
                <input
                    type="number"
                    value={maxValues}
                    onChange={changeHandler}
                /></div>

            <div>
                <span>min</span>
                <input
                type="number"
                value={minValues}
                onChange={changeHandler2}
            /></div>

            <div>
             <Button title="Set"
                     callBack={()=>changeH()}
             />
            </div>
            <Counter
                minValues={minValues}
                maxValues={maxValues}
                results={results}
                onIncrement={onIncrement}
                onReset={onReset}

            />
        </div>
    )

}


export default App;
