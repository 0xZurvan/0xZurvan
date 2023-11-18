import { useState } from "react";
import { submitForm } from "../../../lib/submitForm";

const initValues = { name: "", email: "", message: "" };
const initInfo = { values: initValues };

function SubmittedSuccessfully() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-44">
      <h2 className="font-oswald font-medium text-green text-xl text-center">
        Submitted Successfully!
      </h2>
      <p className="font-oswald font-thin text-white text-base text-center">
        Thank you so much for leaving a message, talk you soon!
      </p>
    </div>
  );
}

export default function Form() {
  const [info, setInfo] = useState(initInfo);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const { values } = info;

  const handleChange = ({ target }) =>
    setInfo((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setInfo((prev) => ({
      ...prev,
    }));

    try {
      if (values.name !== "" && values.email !== "" && values.message !== "") {
        await submitForm(values);
        setInfo(initInfo);
        setSubmitted(true);
        setTouched(false);
      } else {
        setTouched(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <div className="p-5 space-y-5">
        {touched === true ? (
          <p className="font-oswald font-thin text-red text-base text-center">
            Error: you need to fill all the information!
          </p>
        ) : (
          ""
        )}
        {submitted === true ? (
          <SubmittedSuccessfully />
        ) : (
          <form className="grid grid-cols-2 gap-5">
            <input
              required
              type="text"
              className="rounded-lg border-2 text-main px-4 py-2 focus:outline-none focus:border-green"
              placeholder="Name"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
            <input
              required
              type="email"
              className="rounded-lg border-2 text-main px-4 py-2 focus:outline-none focus:border-green col-span-2"
              placeholder="Email"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            <textarea
              required
              cols="10"
              rows="5"
              className="rounded-lg border-2 text-main px-4 py-2 focus:outline-none focus:border-green col-span-2"
              placeholder="Write your message..."
              value={values.message}
              name="message"
              onChange={handleChange}
            ></textarea>
            <button
              className="rounded-lg focus:outline-none mt-5 bg-green hover:bg-opacity-70 px-4 py-2 text-main hover:text-white font-bold font-oswald w-full"
              type="submit"
              onClick={onSubmit}
            >
              SEND
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
