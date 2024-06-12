import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col h-full relative">
      <div>
        <h1 className="text-3xl font-medium drop-shadow-lg">Contact</h1>
        <p className="text-xl font-medium my-3">
          Are you willing to work with me or hire me? Leave a message
        </p>
      </div>
      <div className="flex w-full h-4/5 justify-center">
        <form
          className="flex flex-col relative w-4/5 lg:flex-col px-10 py-5 text-white space-y-3 bg-blue-950/65 p-3 rounded-lg"
          // onSubmit={handleSubmit}
          action="mailto:yogeshnepal8@gmail.com"
          method="post"
          encType="text/plain"
        >
          {" "}
          <div className="flex flex-col lg:flex-row items-center ">
            <label htmlFor="name" className="pr-2 text-left">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-8 px-2 rounded-md text-black flex-1"
              placeholder="Enter your name"
            />

            <label htmlFor="email" className="mx-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-8 px-2 rounded-md text-black flex-1 "
              placeholder="Enter your Email"
            />
          </div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={40}
            className="h-20 px-2 rounded-md text-black"
            placeholder="Leave your message here"
          />
          <button
            type="submit"
            value="send"
            className="font-medium border rounded-lg mt-2 py-1 w-40 transition duration-300 hover:border-gray-800 hover:bg-white hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
