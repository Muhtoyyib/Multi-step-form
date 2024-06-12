/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Input from "../Input/Input"
import RadioInput from "../Input/radio-input"

// eslint-disable-next-line react/prop-types
export default function PersonalDetails({handleChange, formData, errors}){
    return(
        <>
        <h3>Personal Details</h3>
        <div className="personalDetails">
            <Input id='firstname' type='text' placeholder='First Name' name='firstname'  onChange={handleChange}>
            First Name
            {errors.firstname && <p className="error">{errors.firstname}</p>}
            </Input>

            <Input id='lastname'  type='text' placeholder='Last Name' name='lastname' onChange={handleChange} >
            Last Name
            {errors.lastname && <p className="error">{errors.lastname}</p>}
            </Input>

            <Input id='email' type='email' placeholder='Email address' name='email' onChange={handleChange}>
            Email address
            {errors.email && <p className="error">{errors.email}</p>}
            </Input>
            
            <Input id='number' type='number' placeholder='Phone number' name='phone' onChange={handleChange}>
            Phone number

            {errors.phone && <p className="error">{errors.phone}</p>}
            </Input>

            <div className="form__group">
            <label className="form__label" htmlFor={`gender`}> Gender</label>
            </div>

            <RadioInput 
            id="male" 
            name="gender" 
            value="male" 
            checked={formData.gender === 'male'} 
            onChange={handleChange}
          >
            Male
          </RadioInput>
          <RadioInput 
            id="female" 
            name="gender" 
            value="female" 
            checked={formData.gender === 'female'} 
            onChange={handleChange}
          >
            Female
          </RadioInput>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        </>
    )
}

// {errors.gender && <p className="error">{errors.gender}</p>}