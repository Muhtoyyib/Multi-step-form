/* eslint-disable react/prop-types */
import Input from "../Input/Input"

// eslint-disable-next-line react/prop-types
export default function EmploymentDetails({handleChange, errors, formData}){
    return(
        <>
        <h3>Employment Details</h3>
        <div className="personalDetails">
            <Input id='companyName' type='text' placeholder='Company Name' name='companyName' value={formData.companyName}  onChange={handleChange}>
            Company Name

            {errors.companyName && <p className="error">{errors.companyName}</p>}
            </Input>

            <Input id='jobTitle'  type='text' placeholder='Job Title' name='jobTitle' value={formData.jobTitle} onChange={handleChange} >
            Job Title

            {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}
            </Input>

            <Input id='startDate' type='date' placeholder='MM-DD-YYYY' name='startDate' value={formData.startDate} onChange={handleChange}>
            Start date

            {errors.startDate && <p className="error">{errors.startDate}</p>}
            </Input>
            
            <Input id='endDate' type='date' placeholder='MM-DD-YYYY' name='endDate' value={formData.endDate} onChange={handleChange}>
            End Date

           {errors.endDate && <p className="error">{errors.endDate}</p>}
            </Input>
            
        </div>
        </>
    )
}