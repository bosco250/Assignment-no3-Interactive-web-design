import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Confirmation from './Confirmation';
import Success from './Success';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        paymentInfo: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log(formData);
        nextStep();
    };

    switch (step) {
        case 1:
            return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
        case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
        case 3:
            return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
        case 4:
            return <Confirmation prevStep={prevStep} values={formData} handleSubmit={handleSubmit} />;
        case 5:
            return <Success />;
        default:
            return null;
    }
};

export default MultiStepForm;