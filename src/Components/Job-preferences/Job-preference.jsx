import Input from "../Input/Input"
import RadioInput from "../Input/radio-input"

// eslint-disable-next-line react/prop-types
export default function JobPreference({handleChange}){
    return(
        <>
        <div className="personalDetails">
            <Input id='firstname' type='text' placeholder='Desired Hob role' name='job-role'  onChange={handleChange}>
            Desired Job role
            </Input>

            <label className="form__label" htmlFor='job-type'>Job Type</label>

            <RadioInput id={`remote`} name={`job-type`}>
                Remote
            </RadioInput>
            
            <RadioInput id={`on-site`} name={`job-type`}>
                On-site
            </RadioInput>

            <RadioInput id={`hybrid`} name={`job-type`}>
        Hybrid
        </RadioInput>

            
            <Input id='number' type='number' placeholder='Salary Expectation ($)' name='salary' onChange={handleChange}>
            Salary Expectation ($)
            </Input>

           
        </div>
        </>
    )
}