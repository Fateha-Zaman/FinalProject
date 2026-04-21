import BookingsPage from "./pages/BookingsPage";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";
import FormPage from "./pages/FormPage";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
      <Header />

      <main className="mx-auto max-w-7xl px-6 flex-grow w-full mt-6">
        <PageHeader />

        <div className="mb-8">
          <Link
            to="/form"
            className="inline-block rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white"
          >
            Go to Form Page
          </Link>

          <Link
            to="/bookings"
            className="inline-block rounded-2xl bg-brand-blue px-4 py-3 text-sm font-semibold text-white"
          >
            View Saved Bookings
          </Link>
        </div>

        <section className="pb-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ResourceForm />
            </div>

            <div className="lg:col-span-4">
              <ResourceList />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;