/* eslint-disable react/prop-types */
import Input from "../Input/Input"

// eslint-disable-next-line react/prop-types
export default function JobPreference({handleChange, errors}){
    return(
        <>

        <h3>Job preference</h3>
        <div className="personalDetails">
        
            <Input id='desiredRole' type='text' placeholder='Desired Job role' name='desiredRole'  onChange={handleChange}>
            Desired Job role

            {errors.desiredRole && <p className="error">{errors.desiredRole}</p>}
            </Input>

            <Input id='expectedSalary' type='number' placeholder='Salary Expectation ($)' name='expectedSalary' onChange={handleChange}>
            Salary Expectation ($)

            {errors.expectedSalary && <p className="error">{errors.expectedSalary}</p>}
            </Input>

           
        </div>
        </>
    )
}