import './BanknoteVars.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import {  replaceArray } from '../redux/vars-reducer';

let varsStore = {
    variant1: [{nominalValues:5000, quantities: 100},
        {nominalValues:2000, quantities: 400},
        {nominalValues:1000, quantities: 1000},
        {nominalValues:500, quantities: 3000},
        {nominalValues:200, quantities: 5000},
        {nominalValues:100, quantities: 8000},
        {nominalValues:50, quantities: 10000}],
    variant2: [{nominalValues:5000, quantities: 476},
        {nominalValues:2000, quantities: 345},
        {nominalValues:1000, quantities: 6741},
        {nominalValues:500, quantities: 4362},
        {nominalValues:200, quantities: 234},
        {nominalValues:100, quantities: 1643},
        {nominalValues:50, quantities: 3450}],
    variant3: [{nominalValues:5000, quantities: 234},
        {nominalValues:2000, quantities: 678},
        {nominalValues:1000, quantities: 845},
        {nominalValues:500, quantities: 2451},
        {nominalValues:200, quantities: 9654},
        {nominalValues:100, quantities: 2345},
        {nominalValues:50, quantities: 234}],
    variant4: [{nominalValues:5000, quantities: 546},
        {nominalValues:2000, quantities: 562},
        {nominalValues:1000, quantities: 2543},
        {nominalValues:500, quantities: 4365},
        {nominalValues:200, quantities: 2154},
        {nominalValues:100, quantities: 124},
        {nominalValues:50, quantities: 342}],
    variant5: [{nominalValues:5000, quantities: 2732},
        {nominalValues:2000, quantities: 347},
        {nominalValues:1000, quantities: 479},
        {nominalValues:500, quantities: 7556},
        {nominalValues:200, quantities: 3296},
        {nominalValues:100, quantities: 1257},
        {nominalValues:50, quantities: 3854}],
    variant6: [{nominalValues:5000, quantities: 73},
        {nominalValues:2000, quantities: 147},
        {nominalValues:1000, quantities: 279},
        {nominalValues:500, quantities: 356},
        {nominalValues:200, quantities: 696},
        {nominalValues:100, quantities: 857},
        {nominalValues:50, quantities: 854}],
}

let BanknoteVars = () => {
    const dispatch = useDispatch()
    const varsChange = (varArr) => {
        dispatch(replaceArray(varArr))
    }
    return (
        <div className="var-buttons">
            <button onClick={()=>varsChange(varsStore.variant1)}>
                1. Купюры 5000 = 100; 2000 = 400; 1000 = 1000; 500 = 3000; 200 = 5000; 100 = 8000; 50 = 10000
            </button>
            <button onClick={()=>varsChange(varsStore.variant2)}>
                2. Купюры 5000 = 476; 2000 = 345; 1000 = 6741; 500 = 4362; 200 = 234; 100 = 1643; 50 = 3450
            </button>
            <button onClick={()=>varsChange(varsStore.variant3)}>
                3. Купюры 5000 = 234; 2000 = 678; 1000 = 845; 500 = 2451; 200 = 9654; 100 = 2345; 50 = 234
            </button>
            <button onClick={()=>varsChange(varsStore.variant4)}>
                4. Купюры 5000 = 546; 2000 = 562; 1000 = 2543; 500 = 4365; 200 = 2154; 100 = 124; 50 = 342
            </button>
            <button onClick={()=>varsChange(varsStore.variant5)}>
                5. Купюры 5000 = 2732; 2000 = 347; 1000 = 479; 500 = 7556; 200 = 3296; 100 = 1257; 50 = 3854
            </button>
            <button onClick={()=>varsChange(varsStore.variant6)}>
                6. Купюры 5000 = 73; 2000 = 147; 1000 = 279; 500 = 356; 200 = 696; 100 = 857; 50 = 854
            </button>
        </div>
    )
}

export default BanknoteVars;