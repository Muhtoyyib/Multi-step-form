import Input from "../Input/Input"

// eslint-disable-next-line react/prop-types
export default function Skills({handleChange}){
    return(
        <>
        <div className="personalDetails">
            <label className="form__label">
            Skills
            </label>
            <textarea
            rows="4"
            cols="50"
            placeholder="Enter your skills"
            name="skills"
            onChange={handleChange}
            ></textarea>

            <Input id='lastname'  type='text' placeholder='Education' name='lastname' onChange={handleChange} >
             Education
            </Input>

            <label className="form__label">
            Certifications
            </label>
            <textarea
            rows="4"
            cols="50"
            placeholder="Enter your skills"
            name="certifications"
            onChange={handleChange}
            ></textarea>
        </div>
        </>
    )
}