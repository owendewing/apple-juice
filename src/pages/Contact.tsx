import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [contactData, setContactData] = useState({
    contactName: "",
    contactEmail: "",
    message: "",
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_rx6m8we",
        "template_4uulff3",
        formRef.current,
        "-kIn3v6Y9CEdPu7Z0"
      )
      .then(
        () => {
          alert("Submission sent!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#F1F1F0] px-6 py-36 flex flex-col items-center font-main">
      <h1 className="text-black tracking-wide text-5xl font-secondary self-start">
        CONTACT
      </h1>{" "}
      {/* Contact Section (stacked vertically above form) */}
      <div className="py-7 w-full max-w-3xl space-y-4 pb-12">
        {/* <div className="w-full max-w-3xl my-8 border-t border-gray-300" /> */}
        {/* <h2 className="text-2xl md:text-3xl font-secondary tracking-wide">
          Contact
        </h2> */}

        <input
          type="text"
          name="contactName"
          placeholder="First and Last Name"
          required
          onChange={handleContactChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="contactEmail"
          placeholder="Email"
          required
          onChange={handleContactChange}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          onChange={handleContactChange}
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="button"
          onClick={() => {
            window.location.href = `mailto:jillian@ajwni.co?subject=Contact Form Message&body=${encodeURIComponent(
              `Name: ${contactData.contactName}\nEmail: ${contactData.contactEmail}\n\nMessage:\n${contactData.message}`
            )}`;
          }}
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition cursor-pointer w-full"
        >
          Send
        </button>
      </div>
      <div className="w-full max-w-3xl my-8 border-t border-gray-300" />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-3xl space-y-6"
      >
        <h1 className=" text-3xl md:text-5xl font-secondary tracking-wide">
          Project Submission
        </h1>
        <p>
          All fields are required. If information is not yet available please
          input N/A.
        </p>

        {/* Basic Info */}
        <input
          type="text"
          name="name"
          placeholder="Name (First and Last)"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 border rounded-lg"
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="sendCopy" />
          Send me a copy of my responses
        </label>

        <input
          type="text"
          name="title"
          placeholder="Title of Project"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="logline"
          placeholder="Logline"
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* Questions */}
        <textarea
          name="format"
          placeholder="Please describe your project's format"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="relationship"
          placeholder="What is your relationship to the project"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="elements"
          placeholder="What elements do you have completed"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="attached"
          placeholder="Who is attached to this project"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="entity"
          placeholder="Do you have a single purpose entity"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="budget"
          placeholder="Current budget"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="financing"
          placeholder="Do you have any financing attached"
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* File Uploads */}
        {/* <div className="space-y-2">
          <label>Attach your synopsis (required)</label>
          <input
            type="file"
            required
            name = "synopsis_file"
            className="w-full cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:border file:border-black file:text-black file:bg-white hover:file:bg-black hover:file:text-white"
          />
        </div> */}
        <input
          type="text"
          name="synopsis_link"
          placeholder="Link to synopsis"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="script_link"
          placeholder="Link to script"
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* <div className="space-y-2">
          <label>Attach your script (required)</label>
          <input
            type="file"
            required
            name="script_file"
            className="w-full cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:border file:border-black file:text-black file:bg-white hover:file:bg-black hover:file:text-white"
          />
        </div> */}

        <textarea
          name="help"
          placeholder="How can AJWNI Entertainment help bring your project to life?"
          required
          className="w-full p-3 border rounded-lg"
        />

        {/* Disclaimer */}
        <div className="text-sm text-gray-600 space-y-2 pt-6">
          <h2 className="font-semibold">Disclaimer</h2>
          <p>
            The following questions are for the purposes of determining how best
            AJWNI Entertainment may be able to assist any potential
            clients/projects. All information gathered here is considered
            confidential and will not be shared with any third parties without
            prior consent.
          </p>
          <p>
            This questionnaire is not an offer of partnership or a commitment by
            AJWNI Entertainment to any party. Please answer as best you can.
          </p>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-black text-white py-3 rounded-lg hover:opacity-80 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
