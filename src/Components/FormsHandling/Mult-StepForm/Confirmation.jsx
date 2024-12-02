import React from 'react';

const Confirmation = ({ prevStep, values, handleSubmit }) => {
    return (
        <div>
            <h2>Confirmation</h2>
            <ul>
                <li>First Name: {values.firstName}</li>
                <li>Last Name: {values.lastName}</li>
                <li>Email: {values.email}</li>
                <li>Address: {values.address}</li>
                <li>Payment Info: {values.paymentInfo}</li>
            </ul>
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Confirmation;