import Input from "../Input/Input"

// eslint-disable-next-line react/prop-types
export default function EmploymentDetails({handleChange}){
    return(
        <>
        <h3>Employment Details</h3>
        <div className="personalDetails">
            <Input id='firstname' type='text' placeholder='First Name' name='firstname'  onChange={handleChange}>
            Company Name
            </Input>

            <Input id='lastname'  type='text' placeholder='Last Name' name='lastname' onChange={handleChange} >
            Job Title
            </Input>

            <Input id='email' type='date' placeholder='MM-DD-YYYY' name='email' onChange={handleChange}>
            Start date
            </Input>
            
            <Input id='number' type='date' placeholder='MM-DD-YYYY' name='number' onChange={handleChange}>
           End Date
            </Input>
            
        </div>
        </>
    )
}