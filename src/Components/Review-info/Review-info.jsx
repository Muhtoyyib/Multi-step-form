/* eslint-disable react/prop-types */
export default function ReviewInfo({formData}){
    return(
        <div className="review">
            <h3>Review Your Info</h3>

            <h4 className="form__category"> Personal Details</h4>
            <p className="form__review"> <span className="form__review__category">First Name:</span> {formData.firstname}</p>
            <p className="form__review"><span className="form__review__category">Last Name:</span>{formData.lastname}</p>
            <p className="form__review"><span className="form__review__category">Email:</span> {formData.email}</p>
            <p className="form__review"><span className="form__review__category">Phone Number:</span> {formData.phone}</p>
            <p className="form__review"><span className="form__review__category">Gender:</span> {formData.gender}</p>

            <h4 className="form__category"> Employment Details</h4>
            <p className="form__review"><span className="form__review__category">Company Name: </span> {formData.companyName}</p>
            <p className="form__review"><span className="form__review__category">Job Title:</span> {formData.jobTitle}</p>
            <p className="form__review"><span className="form__review__category"> Start Date:</span> {formData.startDate}</p>
            <p className="form__review"><span className="form__review__category"> End Date:</span> {formData.endDate}</p>

            <h4 className="form__category"> Skills and Qualifications</h4>
            <p className="form__review"><span className="form__review__category">Education: </span> {formData.education}</p>
            <p className="form__review"><span className="form__review__category">Skills:</span> {formData.skills}</p>
            <p className="form__review"><span className="form__review__category"> Certification(s):</span> {formData.certifications}</p>
           
            <h4 className="form__category"> Job preference</h4>
            <p className="form__review"><span className="form__review__category">Desired Role: </span> {formData.desiredRole}</p>
            <p className="form__review"><span className="form__review__category">Salaray Expection:</span> {formData.expectedSalary}</p>
        </div>
    )
}