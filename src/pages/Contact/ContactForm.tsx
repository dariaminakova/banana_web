import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./contactForm.css";
emailjs.init("AypmoJdyVdNFCFbBF");

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required field"),
  email: Yup.string()
    .email("Please provide valid email")
    .required("Email is required field"),
  message: Yup.string().min(1).required("Required"),
});

function ContactForm({ customStyles = false }) {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await emailjs
        .send(
          "gmailService",
          "contact_template",
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          "AypmoJdyVdNFCFbBF",
        )
        .then((res) => {
          console.log(res);
          resetForm();
        })
        .catch((err) => {
          console.error("Failed with error...", err);
        });
    },
  });

  return (
    <div
      className='form-wrapper'
      style={{ minHeight: customStyles ? "80vh" : "" }}
    >
      <div
        className='form-container'
        style={{
          boxShadow: customStyles ? "0 0 20px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <h2 className='form-title'>Contact Us</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-input'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <span className='form-error'>{formik.errors.name}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-input'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className='form-error'>{formik.errors.email}</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='form-textarea'
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder='Type your message...'
            />
            {formik.touched.message && formik.errors.message && (
              <span className='form-error'>{formik.errors.message}</span>
            )}
          </div>

          <button type='submit' className='form-button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
