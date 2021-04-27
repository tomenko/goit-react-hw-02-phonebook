import React from 'react';

const Filter = ({id, hendleInputFilter}) => {
    return (
        <>
            <h3>Find contats by name</h3>
            <input
                type="text"
                name="filter"
                id={id}
                onChange = {hendleInputFilter}
            />
        </>
    )
}

export default Filter;