import { useForm } from "react-hook-form";
import "./Contact.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Message sent!");
    reset();
  };

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label>Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type='text'
            />
            {errors.name && (
              <span className='error'>{errors.name.message}</span>
            )}
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address",
                },
              })}
              type='email'
            />
            {errors.email && (
              <span className='error'>{errors.email.message}</span>
            )}
          </div>

          <div className='form-group'>
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={4}
            />
            {errors.message && (
              <span className='error'>{errors.message.message}</span>
            )}
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
