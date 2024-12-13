import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <div className="dropdown-content">
      <Link to='/dsp100'><li>DSP100</li></Link>
      <Link to='/dsp300'><li>DSP300</li></Link>
    </div>
  )
}

export default DropdownMenu