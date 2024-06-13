/* eslint-disable react/prop-types */
import Input from "../Input/Input"

// eslint-disable-next-line react/prop-types
export default function Skills({handleChange, errors, formData}){
    return(
        <>
        <h3>Skills and Qualifications</h3>
        <div className="personalDetails">

        <Input id='education'  type='text' placeholder='Enter your University' name='education' value={formData.education} onChange={handleChange} >
        Education

        {errors.education && <p className="error">{errors.education}</p>}
       </Input>

        <div className="form__group">
            <label className="form__label">
                Skills
            </label>

            {errors.skills && <p className="error">{errors.skills}</p>}
            
            <textarea
            className="form__textarea form__input"
            rows="4"
            cols="50"
            placeholder="Enter your skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            ></textarea>
        </div>

        <div className="form__group">

        <label className="form__label">
        Certification(s)
        </label>

        {errors.certifications && <p className="error">{errors.certifications}</p>}

        <textarea
        className="form__textarea form__input"
        rows="4"
        cols="50"
        placeholder="Enter your certifications"
        name="certifications"
        value={formData.certifications}
        onChange={handleChange}
        ></textarea>
        </div>
        
        </div>
        </>
    )
}