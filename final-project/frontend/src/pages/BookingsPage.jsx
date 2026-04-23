import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch bookings");
        }

        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
        setError("Failed to load bookings.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-12 flex-grow w-full">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold">Saved Bookings</h1>
              <p className="mt-2 text-sm text-black/70">
                This page shows the bookings stored in the database.
              </p>
            </div>

            <Link
              to="/"
              className="rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white"
            >
              Back Home
            </Link>
          </div>

          {loading && <p>Loading bookings...</p>}

          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && bookings.length === 0 && (
            <p>No bookings found.</p>
          )}

          {!loading && !error && bookings.length > 0 && (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border border-black/10 p-4"
                >
                  <p>
                    <strong>ID:</strong> {booking.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {booking.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.booking_date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BookingsPage;