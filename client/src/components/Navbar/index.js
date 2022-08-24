import React from 'react';

function Nav(props) {
  // destructure props
  const {
    navOptions = [],
    currentNavOp,
    setCurrentNavOp,
    navOpSelected,
    setNavOpSelected
  } = props;

  return (
    <nav className="col-12 col-sm-12 col-md-6 pt-3">
      <ul className="row">
        {// Making a list item for each nav option
          navOptions.map((navOp) => (
          <li
              className={`navOp list-unstyled col-6 col-sm-3 ${currentNavOp === navOp && !navOpSelected && 'navActive'}`}
            key={navOp}
          >
            <span onClick={() => {
              // onClick to set current nav to the click one
              setCurrentNavOp(navOp)
              setNavOpSelected(false)
            }}>
              {navOp}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;