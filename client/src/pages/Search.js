import React, { useState } from 'react';

import PatternList from '../components/PatternList';

import { useQuery, useLazyQuery } from '@apollo/client';

import { QUERY_SEARCH, QUERY_NEEDLES, QUERY_YARN } from '../utils/queries';

// Search Page
function Search() {
  const [searchInfo, setSearchInfo] = useState(null);
  
  const [skillText, setSkillText] = useState('Pick A Skill Level');
  const [fiberText, setFiberText] = useState('Pick Fiber');
  const [weightText, setWeightText] = useState('Pick Weight');
  const [colorText, setColorText] = useState('Pick Color');
  const [needleText, setNeedleText] = useState('Pick Needle Size')

  // Skill List
  const [skills] = useState(['beginner', 'intermediate', 'advance']);


  // Getting Needle Data
  const needleQuery = useQuery(QUERY_NEEDLES);
  const needles = needleQuery.data?.needle || [];

  // Getting Fiber Data
  const fiberQuery = useQuery(QUERY_YARN, {
    variables: { type: "fiber" }
  });
  const fibers = fiberQuery.data?.yarnCharacteristic || [];

  // Getting Weight Data
  const weightQuery = useQuery(QUERY_YARN, {
    variables: { type: "weight" }
  });
  const weights = weightQuery.data?.yarnCharacteristic  || [];

  // Getting Color Data
  const colorQuery = useQuery(QUERY_YARN, {
    variables: { type: "color" }
  });
  const colors = colorQuery.data?.yarnCharacteristic || [];


  // selectSkill
  const selectSkill = (skill) => {
    setSkillText(skill);
    setSearchInfo({ ...searchInfo, skill });
  }

  // selectFiber
  const selectFiber = (fiber) => {
    setFiberText(fiber.name);
    setSearchInfo({ ...searchInfo, fiber: fiber._id });
  }

  // selectWeight
  const selectWeight = (weight) => {
    setWeightText(weight.name);
    setSearchInfo({ ...searchInfo, weight: weight._id });
  }

  // selectColor
  const selectColor = (color) => {
    setColorText(color.name);
    setSearchInfo({ ...searchInfo, color: color._id });
  }

  // selectNeedle
  const selectNeedle = (needle) => {
    setNeedleText(needle.size);
    setSearchInfo({ ...searchInfo, needle: needle._id });
  }

  const [getSearch, { data }] = useLazyQuery(QUERY_SEARCH);

  // Search Click Handler
  const onSearchClick = () => {
    getSearch({ variables: { input: searchInfo } });
    setSkillText('Pick A Skill Level');
    setFiberText('Pick Fiber');
    setWeightText('Pick Weight');
    setColorText('Pick Color');
    setNeedleText('Pick Needle Size');
    setSearchInfo(null);
  }

  if (needleQuery.loading || fiberQuery.loading || weightQuery.loading || colorQuery.loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="search-bar">
        <div className='dropdown' id='skill-dropdown'>
          <div id='skill-text' className="dropdown-text">{skillText}</div>
          <div className='dropdown-content'>
            {
              skills.map((skill) =>
                <div onClick={() => selectSkill(skill)}>{skill}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='fiber-dropdown'>
          <div id='fiber-text' className="dropdown-text">{fiberText}</div>
          <div className='dropdown-content'>
            {
              fibers.map((fiber) =>
                <div fiber-id={fiber._id} onClick={() => selectFiber(fiber)}>{fiber.name}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='weight-dropdown'>
          <div id='weight-text' className="dropdown-text">{weightText}</div>
          <div className='dropdown-content'>
            {
              weights.map((weight) =>
                <div weight-id={weight._id} onClick={() => selectWeight(weight)}>{weight.name}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='color-dropdown'>
          <div id='color-text' className="dropdown-text">{colorText}</div>
          <div className='dropdown-content'>
            {
              colors.map((color) =>
                <div color-id={color._id} onClick={() => selectColor(color)}>{color.name}</div>
              )
            }
          </div>
        </div>
        <div className='dropdown' id='needle-dropdown'>
          <div id='needle-text' className="dropdown-text">{needleText}</div>
          <div className='dropdown-content'>
            {
              needles.map((needle) =>
                <div needle-id={needle._id} onClick={() => selectNeedle(needle)}>{needle.size}</div>
              )
            }
          </div>
        </div>
        <div className="search-btn" onClick={onSearchClick}>Search</div>
      </div>
      {data?.searchPattern && <PatternList patterns={data.searchPattern} />}
    </div> 
  )

}

export default Search;