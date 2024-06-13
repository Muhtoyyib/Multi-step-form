import  { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";

import Button from '../../Components/Button/Button';
import PersonalDetails from '../../Components/Personal-Details/Personal-Details';
import EmploymentDetails from '../../Components/Employment-Details/Employment-Details';
import Skills from '../../Components/Skills/Skills';
import JobPreference from '../../Components/Job-preferences/Job-preference';
import FormNav from '../../Components/Form-Nav/Form-Nav';
import Checkbox from '../../Components/Input/checkbox';
import ReviewInfo from '../../Components/Review-info/Review-info';

export default function Form () { 
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState('');

  const [errors, setErrors] = useState({});
  const totalSteps = 5;
  const [isChecked, setIsChecked] = useState(false);
  const progressPercentage = (step / totalSteps) * 100;
  const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  const LOCAL_STORAGE_KEY = 'progress';


  useEffect(() => {
    loadProgress();
  }, []);

  const saveProgress = () => {
    const progress = {
      step,
      formData,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
  };

  const loadProgress = () => {
    const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedProgress) {
      const { step, formData } = JSON.parse(savedProgress);
      setStep(step);
      setFormData(formData);
      setIsChecked(formData.termsAndConditions || false);
    }
  };


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

      // REVIEW
      if (step === 5) {
        if (!isChecked) newErrors.termsAndConditions = 'You must agree to the terms and conditions';
      }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked(checked);
    setFormData({ ...formData, [name]: checked });
  };
  

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setStep(step + 1);
      saveProgress();
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
    saveProgress();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      e.preventDefault();

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        formData
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(`API ENDPOINT`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setEmailError(result.message); 
        } else {
          setEmailError(result.message);  
        }
      })
      .catch((error) => {
        setEmailError("An error occurred: " + error.message); 
      });

      console.log('Form submitted:', formData);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      navigate('/form-success');
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
          <EmploymentDetails handleChange={handleChange} errors={errors} formData={formData}/>
        )}

        {step === 3 && (
            <Skills handleChange={handleChange} errors={errors} formData={formData}/>
        )}

        {step === 4 && (
            <JobPreference handleChange={handleChange} errors={errors} formData={formData}/>
        )}

        {step === 5 && (
          <>
          <ReviewInfo formData={formData}/>
          <p> {emailError}</p>

          <div className='form__checkbox'>

          <Checkbox
              checked={formData.termsAndConditions}
              onChange={handleCheckboxChange}
              id="term-and-condition"
              name="termsAndConditions"
              className="form__checkbox"
          />

          <label htmlFor="term-and-condition" className='form__label'>
          My information is correct 
          </label>
          </div>

          {errors.termsAndConditions && <p className="error-terms">{errors.termsAndConditions}</p>}
          </>
          
        )}

        <div className="form__nav">
          {step > 1 && (
            <button type='button' className="btn btn--form btn--previous" onClick={handlePrevious}>
                 Previous
            </button>
          )}
          {step < 5 && (
            <button type='button' className="btn btn--form btn--next" onClick={handleNext}>
                 Next
            </button>
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


