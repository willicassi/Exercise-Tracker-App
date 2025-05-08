import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreatePage = () => {

    const [name, setName]      = useState('');
    const [reps, setReps]      = useState('');
    const [weight, setWeight]  = useState('');
    const [unit, setUnit]      = useState('');
    const [date, setDate]      = useState('');
    
    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };

        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add Exercises</h2>
            <p>Use this page to add exercises to your exercise tracker</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <label for="name">Exercise Name</label>
                    <input
                        type="text"
                        placeholder="Exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="Number of reps"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        placeholder="Weight used"
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <select 
                        type="text" 
                        name= "unit" 
                        id="unit"
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
                        placeholder="Date of exercise"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={createExercise}
                        id="submit"
                    >Add Exercise</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;
