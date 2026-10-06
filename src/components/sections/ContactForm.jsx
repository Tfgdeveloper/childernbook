import { useState } from "react";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";

const ContactForm = ({
  className = "",
  formClassName = "",
  inputClassName = "",
  buttonClassName = "",
  messageClassName = "",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    page_url: window.location.href,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      // Submit form to API
      const dbRes = await fetch(
        "https://leads.authorpublishers.us/api/lead/e8blTTaHFpmYI1aMh10GkcsL6Y1GlxSC",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            "Phone Number": formData.phone,
            Message: formData.message,
          }),
        }
      );

      // Safely parse response
      let dbData = null;

      try {
        dbData = await dbRes.json();
      } catch (_) {}

      // Check API response
      if (!dbRes.ok) {
        throw new Error(
          dbData?.message || `DB API Error: ${dbRes.status}`
        );
      }

      // Successful submission
      window.location.href = "/thank-you";

    } catch (error) {
      alert("Failed to submit form: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full ${className} ${formClassName}`}
    >
      <div className="space-y-3">

        {/* Name */}
        <InputField
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClassName}
        />

        {/* Phone */}
        <InputField
          
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClassName}
        />

        {/* Email */}
        <InputField
          
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClassName}
        />

        {/* Message */}
        <div className={messageClassName}>
          

          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="mt-2 w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 font-body text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-neutral-200"
          />
        </div>

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          disabled={isLoading}
          className={buttonClassName}
        >
          {isLoading ? "Submitting..." : "Submit Request"}
        </PrimaryButton>

      </div>
    </form>
  );
};

export default ContactForm;