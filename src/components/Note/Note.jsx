import "./Note.css"
import React from 'react';
import { useSelector } from 'react-redux';

let Note = () => {
    let noteNominalVariants = useSelector(state => state.nominalVars.variant)
    return (
        <p className="note-text">
            {noteNominalVariants.map((nominalq)=><p>Купюра номиналом в {nominalq.nominalValues}р. в количестве: {nominalq.quantities}шт.</p>)}
        </p>
    )
}

export default Note;