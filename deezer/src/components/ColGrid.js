import React from 'react';
import PropTypes from 'prop-types'

const ColGrid = (props) => {

    const renderElements = () => {
        const gridElements = props.children.map( (element, i) => {
          return (
            <div key={i} className="rmdb-grid-element">
                {element}
            </div>
          )
        })
        return gridElements;
      }



    return (
        <div className="four-col-grid">
              <div className="four-col-element">
             {renderElements()}
            </div>
        </div>
    )
}


export default ColGrid;