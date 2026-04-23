import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Header from "../components/Header";
import Footer from "../components/Footer";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),
  date: z.string().min(1, "Date is required"),
});

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const err = {};
      result.error.issues.forEach((issue) => {
        err[issue.path[0]] = issue.message;
      });

      setErrors(err);
      setSuccess("");
      setResponse(null);
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccess("");
    setResponse(null);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save booking");
      }

      setResponse(data);
      setSuccess("Form submitted successfully and saved to database!");
      setFormData({
        name: "",
        email: "",
        date: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong while saving data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
      <Header />

      <main className="mx-auto max-w-7xl px-6 flex-grow w-full">
        <section className="py-12">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-semibold text-brand-blue">
                  Routed subpage form
                </span>

                <h1 className="mt-4 text-3xl font-semibold leading-tight">
                  Form Page
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-black/70">
                  Fill in the form below and save the data through the backend
                  API. The page follows the same theme as the main resources
                  page.
                </p>
              </div>

              <Link
                to="/"
                className="inline-block rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-all duration-200 ease-out"
              >
                Back Home
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-xl font-semibold">Booking form</h2>
            <p className="mt-1 text-sm text-black/60">
              Complete all required fields before submitting.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-200 ease-out"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-200 ease-out"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold">
                  Booking date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-200 ease-out"
                />
                {errors.date && (
                  <p className="mt-2 text-sm text-red-600">{errors.date}</p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-all duration-200 ease-out"
              >
                Submit
              </button>
            </form>

            {loading && (
              <p className="mt-6 text-sm font-semibold text-brand-blue">
                Sending...
              </p>
            )}

            {success && (
              <p
                className={`mt-6 text-sm font-semibold ${
                  success.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}

            {response && (
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold">Server Response</h3>
                <pre className="overflow-x-auto rounded-2xl bg-brand-dark p-4 text-sm text-green-400">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FormPage;