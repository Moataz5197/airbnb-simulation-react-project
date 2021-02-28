import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Register.css";

const schema = yup.object().shape({
  Name: yup.string().required("please enter your name!"),
  birthday: yup
    .string()
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "please enter your date of birth!"
    )
    .required(),
  email: yup
    .string()
    .email()
    // .typeError()
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      "please enter your email!"
    )
    .required(),
  password: yup
    .string()
    .min(8, "password must be more than 8 characters")
    .matches(/[a-zA-Z]/, "password must contain upper and lower cases")
    .required(),
});

const onSubmit = (res) => {
  console.log(res);
  // API call
};

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3
            className="text-center font-weight-bold"
            style={{ paddingTop: "30px" }}
          >
            finish signing up
          </h3>
          <hr />
          <div className="form-outline ">
            <input
              type="text"
              placeholder="First name"
              className="form-control form1"
              ref={register}
              name="Name"
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              placeholder="Last name"
              className="form-control form2"
              name="lastName"
              ref={register}
            />
          </div>

          <h6 className="text-danger"> {errors.Name?.message}</h6>

          <h6>Make sure it matches the name on your government ID.</h6>
          <div className="form-outline mb-4">
            <input
              type="text"
              placeholder="Date of birth"
              id="birthday"
              className="form-control form3"
              name="birthday"
              ref={register}
            />
          </div>
          <h6 className="text-danger"> {errors.birthday?.message}</h6>

          <h6>
            To sign up, you need to be at least 18. Your birthday won’t be
            shared with other people who use Airbnb.
          </h6>
          <div className="form-outline mb-4 form-floating">
            <input
              type="email"
              placeholder="Email"
              className="form-control form3"
              id="email"
              name="email"
              ref={register}
            />
          </div>
          <h6 className="text-danger"> {errors.email?.message}</h6>

          <h6>We'll email you trip confirmations and receipts.</h6>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3"
              name="password"
              placeholder="Password"
              className="form-control form3"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              ref={register}
            />
          </div>
          <h6 className="text-danger"> {errors.password?.message}</h6>

          <h6>
            By selecting <span1> Agree and continue</span1> below, I agree to
            Airbnb’s
            <span2>
              <a href="#">Terms of Service</a>
            </span2>{" "}
            ,
            <span2>
              <a href="#">Payments Terms of Service</a>
            </span2>
            <span2>
              <a href="#">Privacy Policy</a>
            </span2>
            ,and
            <span2>
              <a href="#">Policy</a>
            </span2>
            .
          </h6>
          <button
            type="submit"
            className="btn btn-primary mb-4 btn-block"
            id="continue"
          >
            Agree and continue
          </button>
          <hr style={{ marginBottom: 30 }} />
          <h6>
            Airbnb will send you members-only deals, inspiration, marketing
            emails, and push notifications. You can opt out of receiving these
            at any time in your account settings or directly from the marketing
            notification.
          </h6>
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            <h6 style={{ color: "rgb(42, 42, 42)" }}>
              I don’t want to receive marketing messages from Airbnb.
            </h6>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
