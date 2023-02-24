import { useSelector } from 'react-redux';
import React from 'react';
import './AppOutput.css'

const AppOutput = (props) => {
    let nominalVarsState = useSelector(state => state.nominalVars.variant);
    if (props.valOut === "") return null;
    let outputValue = props.valOut;
    let index = outputValue.indexOf(",");
    let outputValueWithFraction = Math.trunc(outputValue.replaceAt(index, "."));
    let outputNominalAndQuantities = outputAlgorithm(outputValue, nominalVarsState);
    let outputNominalAndQuantitiesFractional = outputAlgorithm(outputValueWithFraction, nominalVarsState);
    if (outputValue.includes(",")) {
        if (outputValue === "0") {
            return <div className="app-output-form">
                <p className="app-output-sum"> Введите корректное значение. </p>
            </div>
        } else {
            let fractionalValue = outputValue.slice(index + 1);
            return (
                <div className="app-output-form">
                    <p className="app-output-sum">Введенная
                        сумма: {outputValueWithFraction} руб., {fractionalValue} коп. </p>
                    <p className="app-output-remains">Остаток: {outputNominalAndQuantitiesFractional.remains}р. {fractionalValue} копеек</p>
                    <p className="app-final-output">Вывод:
                        {outputNominalAndQuantitiesFractional.finalVarsArr.map(nominalquantities => <p key={nominalquantities.key}>Купюра номиналом в {nominalquantities.key}р. в количестве {nominalquantities.value} </p>)}</p>
                </div>
            )
        }
    } else {
        if (outputValue === "0") {
            return <div className="app-output-form">
                <p className="app-output-sum"> Введите корректное значение. </p>
            </div>
        } else {
            return (
                <div className="app-output-form">
                    <p className="app-output-sum">Введенная сумма: {outputValue} руб.</p>
                    <p className="app-output-remains">Остаток: {outputNominalAndQuantities.remains}р.</p>
                    <p className="app-final-output">Вывод:
                        {outputNominalAndQuantities.finalVarsArr.map(nominalquantities => <p key={nominalquantities.key}>Купюра номиналом в {nominalquantities.key}р. в количестве {nominalquantities.value} </p>)} </p>
                </div>
            )
        }
    }
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}//функция для замены чего-либо по индексу в строке

const outputAlgorithm = (num, vars) => {
    let remains = num;
    let result = vars.sort((a,b)=> b.quantities - a.quantities).map(({nominalValues, quantities})=>{
        const neededNotes = Math.floor(remains / nominalValues);
        let finalQuantitiesOfNotes = neededNotes >= quantities ? quantities : neededNotes
        remains -= finalQuantitiesOfNotes * nominalValues;
        return {
            key: nominalValues,
            value: finalQuantitiesOfNotes
        }
    })
    return {
        finalVarsArr:result, remains
    }
}

export default AppOutput;