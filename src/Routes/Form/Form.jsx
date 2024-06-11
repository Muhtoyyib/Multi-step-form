import  { useState } from 'react';

import Button from '../../Components/Button/Button';
import PersonalDetails from '../../Components/Personal-Details/Personal-Details';
import EmploymentDetails from '../../Components/Employment-Details/Employment-Details';
import Skills from '../../Components/Skills/Skills';
import JobPreference from '../../Components/Job-preferences/Job-preference';

export default function Form () {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    // Add other form fields here
  });
  const totalSteps = 5;
  const currentStep = step;

  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission 
    console.log('Form submitted:', formData);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h2> <span className="welcome__company-Name">msme</span> Employment Scheme</h2>
        <div className="progress-bar">
            <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
            >
            </div>
        </div>
        {step === 1 && (
         <PersonalDetails handleChange={handleChange} />
        )}

        {step === 2 && (
          <EmploymentDetails />
        )}

        {step === 3 && (
            <Skills />
          )}

          {step === 4 && (
            <JobPreference />
          )}

          {step === 5 && (
            <div>
            <label className="form__label">
            Additional Information
            </label>
            <textarea
            rows="4"
            cols="50"
            placeholder="Enter your skills"
            name="additional information"
            onChange={handleChange}
            ></textarea>
            </div>
          )}


        <div className="form__nav">
          {step > 1 && (
            <Button type='b' className="btn btn--form btn--previous" onClick={handlePrevious}>
                 Previous
            </Button>
          )}
          {step < 5 && (
            <Button type='b' className="btn btn--form btn--next" onClick={handleNext}>
                 Next
            </Button>
          )}
          {step === 5 && (
            <button
              type="submit"
              className="btn btn--next"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
