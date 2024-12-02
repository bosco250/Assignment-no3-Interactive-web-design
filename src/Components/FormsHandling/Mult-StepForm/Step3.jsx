import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
    return (
        <div>
            <h2>Payment Information</h2>
            <label>
                Payment Info:
                <input type="text" name="paymentInfo" value={values.paymentInfo} onChange={handleChange} />
            </label>
            <br />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step3;