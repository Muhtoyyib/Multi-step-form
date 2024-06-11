import Input from "../Input/Input"
import RadioInput from "../Input/radio-input"

// eslint-disable-next-line react/prop-types
export default function JobPreference({handleChange}){
    return(
        <>

        <h3>Job preference</h3>
        <div className="personalDetails">
            <Input id='firstname' type='text' placeholder='Desired Hob role' name='job-role'  onChange={handleChange}>
            Desired Job role
            </Input>

            <div className="form__group">

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
            </div><br/><br/>


            
            <Input id='number' type='number' placeholder='Salary Expectation ($)' name='salary' onChange={handleChange}>
            Salary Expectation ($)
            </Input>

           
        </div>
        </>
    )
}