function PageHeader() {
  return (
    <section className="py-12">
      <div className="rounded-3xl bg-white p-8 shadow">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          Resource management
        </span>

        <h1 className="mt-4 text-3xl font-semibold">Resources</h1>

        <p className="mt-2 text-sm text-black/70">
          Create, update, or remove resources. Availability and pricing help users choose the right option.
        </p>
      </div>
    </section>
  );
}

export default PageHeader;