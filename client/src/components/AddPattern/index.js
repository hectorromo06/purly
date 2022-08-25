import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
// import Auth from '../../utils/auth';
import { ADD_PATTERN } from '../../utils/mutations';
import {
    QUERY_YARN,
    QUERY_NEEDLES
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
            needle: '',
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
        needle,
        username,
        description,
        instructions
    } = formState

    // const fibers = [{ value: 'acrylic' }, { value: 'cotton' }, { value: 'wool' }];
    // const weights = [{ value: 'bulky' }, { value: 'sport' }, { value: 'fine' }, { value: 'medium' }];
    // const colors = [{ value: 'blue' }, { value: 'black' }, { value: 'brown' }, { value: 'red' }, { value: 'purple' }];
    // const needleData = [{ size: '2.25mm' }, { size: '2.75mm' }, { size: '3mm' }, { size: '3.25mm' }, 
    // { size: '5mm' }, { size: '6mm' }];

    // Skill List
    const skills = [{value: 'beginner'}, {value: 'intermediate'}, {value: 'advanced'}];


    // Getting Fiber Data
    const fiberQuery = useQuery(QUERY_YARN, {
        variables: { type: "fiber" }
    });
    const fibers = fiberQuery.data?.yarnCharacteristic || [];
    //   console.log(fiberQuery.data?.yarnCharacteristic);

    // Getting Weight Data
    const weightQuery = useQuery(QUERY_YARN, {
        variables: { type: "weight" }
    });
    const weights = weightQuery.data?.yarnCharacteristic || [];

    // Getting Color Data
    const colorQuery = useQuery(QUERY_YARN, {
        variables: { type: "color" }
    });
    const colors = colorQuery.data?.yarnCharacteristic || [];

    // Getting Needle Data
    const needleQuery = useQuery(QUERY_NEEDLES);
    const needles = needleQuery.data?.needle || [];
    console.log('Needle Query' + needleQuery);


    const [addPattern, { data, error }] = useMutation(ADD_PATTERN)

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPattern({
                variables: { input },
            });

        } catch (e) {
            console.error(e);
        }
    };


    return (

        <section>
            <h1>Add a Pattern</h1>

            <form id='add-pattern-form' onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                </div>
                <div>
                    {<input type="text" value={formState.name}
                    /*onChange={(e) => setFormState({formState, name: e.target.value})} 
                    onBlur={handleChange}*/ name="name" />}
                </div>

                <div>
                    <label htmlFor='project'>Project</label>
                </div>
                <div>
                    {<input type="text" value={formState.project}
                    /*onChange={(e) => setFormState({formState, project: e.target.value})} 
                    onBlur={handleChange}*/ name="project" />}
                </div>

                <div>
                    <label htmlFor='madeFor'>Made For</label>
                </div>
                <div>
                    {<input type="text" value={formState.madeFor}
                    /*onChange={(e) => setFormState({formState, madeFor: e.target.value})} 
                    onBlur={handleChange}*/ name="madeFor" />}
                </div>

                <div>
                    <label htmlFor='skill'>Skill</label>
                </div>
                <div>
                    <select>
                        <option value='Select a skill level'>Select a skill level</option>
                        {skills.map((skill) => (
                            <option key={skill.value} value={skill.value}>
                                {skill.value}
                            </option>))};
                    </select>
                </div>

                {/* fiber, weight, color, needle */}
                <div>
                    <select>
                        <option value='Select a fiber'>Select a fiber</option>
                        {fibers.map((fiber) => (
                            <option key={fiber._id} value={fiber._id}>
                                {fiber.name}
                            </option>))};
                    </select>
                </div>

                <div>
                    <select>
                        <option value='Select a weight'>Select a weight</option>
                        {weights.map((weight) => (
                            <option key={weight._id} value={weight._id}>
                                {weight.name}
                            </option>))};
                    </select>
                </div>

                <select>
                    <option value='Select a color'>Select a color</option>
                    {colors.map((color) => (
                        <option key={color._id} value={color._id}>
                            {color.name}
                        </option>))};
                </select>

                <div>
                    <select>
                        <option value='Select a needle size'>Select a needle size</option>
                        {needles.map((needle) => (
                            <option key={needle._id} value={needle._id}>
                                {needle.size}
                            </option>))};
                    </select>
                </div>


                <div>
                    <label htmlFor='description'>Description</label>
                </div>
                <div>
                    <textarea name='description' value={formState.description}
                    /*onChange={(e) => setFormState({formState, description: e.target.value})} onBlur={handleChange}*/ rows="5" cols='23' />
                </div>

                <div>
                    <label htmlFor='instructions'>Instructions</label>
                </div>
                <div>
                    <textarea name='instructions' value={formState.instructions}
                    /*onChange={(e) => setFormState({formState, instructions: e.target.value})} onBlur={handleChange}*/ rows="5" cols='23' />
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </section>
    );

}

export default AddPattern;