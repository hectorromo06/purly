import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ADD_PATTERN } from '../../utils/mutations';
import {
    QUERY_NEEDLES,
    QUERY_YARN_WEIGHT,
    QUERY_YARN_COLOR,
    QUERY_YARN_FIBER
} from '../../utils/queries';

const AddPattern = () => {
    const [formState, setFormState] = useState(
        {
            name: '',
            project: '',
            madeFor: '',
            skill: '',
            fiber: '',
            weight: '',
            color: '',
            username: '',
            description: '',
            instructions: ''
        }
    )

const {
        name,
        project,
        madeFor,
        skill,
        fiber,
        weight,
        color,
        username,
        description,
        instructions
    } = formState

    return (

        <section>
            <h1>Add Pattern</h1>

            <form id='add-pattern-form'>
                <div>
                    <label htmlFor='name'>Name</label>
                </div>
                <div>
                { <input type="text" defaultValue={name} value={name} /*onChange={(e) => setFormState({formState, name: e.target.value})} 
                    onBlur={handleChange}*/ name="name" /> }
                </div>

            </form>
        </section>
    );

}

export default AddPattern;