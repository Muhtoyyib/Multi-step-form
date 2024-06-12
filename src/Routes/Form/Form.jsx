import  { useState } from 'react';

import Button from '../../Components/Button/Button';
import PersonalDetails from '../../Components/Personal-Details/Personal-Details';
import EmploymentDetails from '../../Components/Employment-Details/Employment-Details';
import Skills from '../../Components/Skills/Skills';
import JobPreference from '../../Components/Job-preferences/Job-preference';
import FormNav from '../../Components/Form-Nav/Form-Nav';
import Checkbox from '../../Components/Input/checkbox';

export default function Form () {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const [errors, setErrors] = useState({});
  const totalSteps = 5;
  const [isChecked, setIsChecked] = useState(false);
  const progressPercentage = (step / totalSteps) * 100;
  const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');


  const validateStep = () => {
    const newErrors = {};

    // PERSONAL DETAILS ERRORS
    if (step === 1) {
      if (!formData.firstname) newErrors.firstname = 'First name is required';
    
      if (!formData.lastname)  newErrors.lastname = 'Last name is required';

      if (!formData.email) {
        newErrors.email = 'Email is required'
      }else if(!emailRegex.test(formData.email)){
        newErrors.email = 'Please Enter a Vlaid Email Address'
        } 

      if (!formData.phone) newErrors.phone = 'Phone number is required';

      if (!formData.gender) newErrors.gender = 'Gender is required';
    }

    // EMPLOYMENT DETAILS
    if (step === 2) {
      if (!formData.companyName) newErrors.companyName = 'Company name is required';

      if (!formData.jobTitle) newErrors.jobTitle = 'Job Title is required';

      if (!formData.startDate) newErrors.startDate = 'Start Date is required';

      if (!formData.endDate) newErrors.endDate = 'End Date is required';
  
    }

    // SKILLS
    if (step === 3) {
      if (!formData.education) newErrors.education = 'Education is required';

      if (!formData.skills) newErrors.skills = 'Skills is required';

      if (!formData.certifications) newErrors.certifications = 'Certification(s) is required';
    }

    // JOB PREFERENCE
    if (step === 4) {
      if (!formData.desiredRole) newErrors.desiredRole = 'Desired Role is required';

      if (!formData.expectedSalary) newErrors.expectedSalary = ' Expected Salary is required';
    }

    // 
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleNext = () => {
    if (validateStep()) {
      console.log('Validation');
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h2> <span className="welcome__company-Name">msme</span> Employment Scheme</h2>

        <FormNav page={progressPercentage} onPageNumberClick={handleNext}/>

        {step === 1 && (
      
          <PersonalDetails handleChange={handleChange} errors={errors} formData={formData} />
         
        )}

        {step === 2 && (
          <EmploymentDetails handleChange={handleChange} errors={errors}/>
        )}

        {step === 3 && (
            <Skills handleChange={handleChange} errors={errors} />
        )}

        {step === 4 && (
            <JobPreference handleChange={handleChange} errors={errors} />
        )}

        {step === 5 && (
          <>

          <Checkbox
          label="I agree to the terms and conditions"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id={`term-&-condition`}
          className='form__checkbox'
          />
          </>
          
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
