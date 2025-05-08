import React from 'react';
import { VscTrash, VscEdit } from 'react-icons/vsc';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.toLocaleString("en-US").slice(0,10)}</td>
            <td class="iconTable"><VscTrash onClick={() => onDelete(exercise._id)} /></td>
            <td class="iconTable"><VscEdit onClick={() => onEdit(exercise)} /></td>
        </tr>
    );
}

export default Exercise;
