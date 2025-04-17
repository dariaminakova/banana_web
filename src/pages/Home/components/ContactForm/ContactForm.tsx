import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./contactForm.css";
emailjs.init("AypmoJdyVdNFCFbBF");

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

function ContactForm() {
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
          console.error("FAILED...", err);
        });
    },
  });

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
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
            />
            {formik.touched.message && formik.errors.message && (
              <span className='form-error'>{formik.errors.message}</span>
            )}
          </div>

          <button type='submit' className='form-button'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
