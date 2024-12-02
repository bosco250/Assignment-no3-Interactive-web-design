import React from 'react';

const Step1 = ({ nextStep, handleChange, values }) => {
    return (
        <div>
            <h2>Personal Details</h2>
            <label>
                First Name:
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
            </label>
            <br />
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;