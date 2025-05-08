import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditPage = ({ exercise }) => {
 
    const [name, setName]       = useState(exercise.name);
    const [reps, setReps]       = useState(exercise.reps);
    const [weight, setWeight]   = useState(exercise.weight);
    const [unit, setUnit]       = useState(exercise.unit);
    const [date, setDate]       = useState(exercise.date.slice(0,10));


    const history = useHistory();

    const editExercise = async () => { 
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert("Successfully edited exercise!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an Exercise</h2>
            <p>Use this page to edit an existing exercise entry in your exercise tracker</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you editing?</legend>
                    <label for="name">Exercise Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <select 
                        type="text" 
                        name= "unit" 
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        >
                        <option value="">- Select units -</option>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                        <option value="meters">meters</option>
                        <option value="seconds">seconds</option>
                        <option value="minutes">minutes</option>
                    </select>
                    
                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button> changes to the exercise</label>
                </fieldset>
                </form>
        </article>
        </>
    );
}
export default EditPage;