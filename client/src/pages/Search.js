import React, { useState } from 'react';

import PatternList from '../components/PatternList';

import { useQuery } from '@apollo/client';

import { QUERY_PATTERNS,QUERY_SEARCH, QUERY_NEEDLES, QUERY_YARN } from '../utils/queries';

// Search Page
function Search() {
  const [skillText, setSkillText] = useState('Pick A Skill Level');
  const [fiberText, setFiberText] = useState('Pick Fiber');
  const [weightText, setWeightText] = useState('Pick Weight');
  const [colorText, setColorText] = useState('Pick Color');
  const [needleText, setNeedleText] = useState('Pick Needle Size')

  // Skill List
  const [skills] = useState(['beginner', 'intermediate', 'advance']);


  // Getting Needle Data
  const needleQuery = useQuery(QUERY_NEEDLES);
  const needles = needleQuery.data?.needle || {};

  // Getting Fiber Data
  const fiberQuery = useQuery(QUERY_YARN, {
    variables: { type: 'fiber' }
  });
  const fibers = fiberQuery.data?.yarn || {};

  // Getting Weight Data
  const weightQuery = useQuery(QUERY_YARN, {
    variables: { type: 'weight' }
  });
  const weights = weightQuery.data?.yarn || {};

  // Getting Color Data
  const colorQuery = useQuery(QUERY_YARN, {
    variables: { type: 'color' }
  });
  const colors = colorQuery.data?.yarn || {};

  // Getting all current Patterns
  const { loading, data } = useQuery(QUERY_PATTERNS);
  let patterns = data?.patterns || {};

  const { displayPatterns, setDisplayPatterns } = useState(patterns);

  // selectSkill
  const selectSkill = (skill) => {
    setSkillText(skill);
  }

  // selectFiber
  const selectFiber = (fiber) => {
    const fiberEle = document.getElementById('fiber-text');
    fiberEle.setAttribute('fiber-id', fiber._id);
    setFiberText(fiber.name);
  }

  // selectWeight
  const selectWeight = (weight) => {
    const weightEle = document.getElementById('weight-text');
    weightEle.setAttribute('weight-id', weight._id);
    setWeightText(weight.name);
  }

  // selectColor
  const selectColor = (color) => {
    const colorEle = document.getElementById('color-text');
    colorEle.setAttribute('color-id', color._id);
    setColorText(color.name);
  }

  // selectNeedle
  const selectNeedle = (needle) => {
    const needleEle = document.getElementById('needle-text');
    needleEle.setAttribute('needle-id', needle._id);
    setNeedleText(needle.size);
  }

  // handleSearch
  const handleSearch = async () => {
    const input = {};
    const skillEle = document.getElementById('skill-text');
    const fiberEle = document.getElementById('fiber-text');
    const weightEle = document.getElementById('weight-text');
    const colorEle = document.getElementById('color-text');
    const needleEle = document.getElementById('needle-text');
    if (skillEle.innerHTML !== 'Pick A Skill Level') input['skill'] = skillEle.innerHTML;
    if (fiberEle.innerHTML !== 'Pick Fiber') input['fiber'] = fiberEle.getAttribute('fiber-id');
    if (weightEle.innerHTML !== 'Pick Weight') input['weight'] = weightEle.getAttribute('weight-id');
    if (colorEle.innerHTML !== 'Pick Color') input['color'] = colorEle.getAttribute('color-id');
    if (needleEle.innerHTML !== 'Pick Needle Size') input['needle'] = needleEle.getAttribute('needle-id');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = await useQuery(QUERY_SEARCH, {
      variables: { input }
    });

    const searchPatterns = data?.patterns || {};
    
    setDisplayPatterns(searchPatterns);
    setSkillText('Pick A Skill Level');
    setFiberText('Pick Fiber');
    setWeightText('Pick Weight');
    setColorText('Pick Color');
    setNeedleText('Pick Needle Size');
  }

  if (needleQuery.loading || fiberQuery.loading || weightQuery.loading || colorQuery.loading || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="search">
      <div className="search-bar">
        <div className='dropdown' id='skill-dropdown'>
          <div id='skill-text'>{skillText}</div>
          <div className='dropdown-content'>
            {
              skills.map((skill) =>
                <div onClick={() => selectSkill(skill)}>{skill}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='fiber-dropdown'>
          <div id='fiber-text'>{fiberText}</div>
          <div className='dropdown-content'>
            {
              fibers.map((fiber) =>
                <div fiber-id={fiber._id} onClick={() => selectFiber(fiber)}>{fiber.name}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='weight-dropdown'>
          <div id='weight-text'>{weightText}</div>
          <div className='dropdown-content'>
            {
              weights.map((weight) =>
                <div weight-id={weight._id} onClick={() => selectWeight(weight)}>{weight.name}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='color-dropdown'>
          <div id='color-text'>{colorText}</div>
          <div className='dropdown-content'>
            {
              colors.map((color) =>
                <div color-id={color._id} onClick={() => selectColor(color)}>{color.name}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='needle-dropdown'>
          <div id='needle-text'>{needleText}</div>
          <div className='dropdown-content'>
            {
              needles.map((needle) =>
                <div needle-id={needle._id} onClick={() => selectNeedle(needle)}>{needle.size}</div>
              )
            }
          </div>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <PatternList patterns={displayPatterns}/>
    </div> 
  )

}

export default Search;