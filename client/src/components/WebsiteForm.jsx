import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WebsiteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    websiteName: "",
    websiteUrl: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to dashboard with form data
    navigate("/dashboard", { state: formData });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-8 space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="websiteName"
          className="block text-sm font-medium text-gray-700"
        >
          What is your website name?
        </label>
        <input
          type="text"
          id="websiteName"
          name="websiteName"
          value={formData.websiteName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter website name"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="websiteUrl"
          className="block text-sm font-medium text-gray-700"
        >
          Website URL
        </label>
        <input
          type="url"
          id="websiteUrl"
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Tell us about your website
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your website's purpose..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all"
      >
        Continue
      </button>
    </form>
  );
};

export default WebsiteForm;
