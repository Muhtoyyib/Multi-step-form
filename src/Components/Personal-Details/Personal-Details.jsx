import Input from "../Input/Input"
import RadioInput from "../Input/radio-input"

// eslint-disable-next-line react/prop-types
export default function PersonalDetails({handleChange}){
    return(
        <>
        <h3>Personal Details</h3>
        <div className="personalDetails">
            <Input id='firstname' type='text' placeholder='First Name' name='firstname'  onChange={handleChange}>
            First Name
            </Input>

            <Input id='lastname'  type='text' placeholder='Last Name' name='lastname' onChange={handleChange} >
            Last Name
            </Input>

            <Input id='email' type='email' placeholder='Email address' name='email' onChange={handleChange}>
            Email address
            </Input>
            
            <Input id='number' type='number' placeholder='Phone number' name='number' onChange={handleChange}>
            Phone number
            </Input>

            <label className="form__label" htmlFor='gender'>Gender</label>

            <RadioInput id={`male`} name={`gender`}>
                Male
            </RadioInput>
            
            <RadioInput id={`female`} name={`gender`}>
                female
            </RadioInput>
        </div>
        </>
    )
}