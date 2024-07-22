import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    course: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <div>
            <h2>Finish</h2>
            <p>Form submission complete!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h1>Stepper Form</h1>
      {renderStepContent()}
    </>
  );
};

export default StepperForm;
