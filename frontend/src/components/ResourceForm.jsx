function ResourceForm() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="text-xl font-semibold">Resource form</h2>

      <p className="mt-1 text-sm text-black/60">
        All fields are required. Fill in the details below. Use Create for new
        items and Clear to remove.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold">Resource name</label>
          <input
            type="text"
            placeholder="e.g. Meeting Room A"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
          />
          <p className="mt-2 text-xs text-black/50">
            Use a short, unique name users recognize (5–30 characters). Use
            letters, numbers, spaces and symbols .,- only.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Resource description
          </label>
          <textarea
            rows="4"
            placeholder="Describe location, capacity, included equipment, or any usage notes."
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none resize-none"
          ></textarea>
          <p className="mt-2 text-xs text-black/50">
            Keep it practical: what it is, and who it’s for (10–50 characters).
            Use letters, numbers, spaces and symbols .,- only.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="block text-sm font-semibold mb-2">
              Availability
            </span>

            <div className="ml-1 mt-2 mb-3 flex items-center min-h-[48px]">
              <label className="inline-flex items-center cursor-pointer select-none">
                <input type="checkbox" className="sr-only peer" />

                <div
                  className="relative w-11 h-6 rounded-full bg-black/20
                  peer-checked:bg-brand-primary
                  transition-all duration-200
                  after:content-['']
                  after:absolute after:top-[2px] after:left-[2px]
                  after:w-5 after:h-5 after:bg-white after:rounded-full
                  after:transition-all duration-200
                  peer-checked:after:translate-x-5"
                ></div>

                <span className="ml-3 text-sm text-black/70">Available</span>
              </label>
            </div>

            <p className="mt-2 text-xs text-black/50">
              When enabled, the resource is available for normal booking.
            </p>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold">Price</label>

            <div className="mt-2 flex gap-2 items-stretch">
              <input
                type="number"
                placeholder="0.00"
                min="0"
                step="0.01"
                className="w-full max-w-[180px] rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
              />

              <span className="inline-flex items-center rounded-2xl border border-black/10 bg-black/5 px-4 text-sm font-semibold text-black/70">
                €
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priceUnit" defaultChecked />
                <span className="text-sm">hour</span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priceUnit" />
                <span className="text-sm">day</span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priceUnit" />
                <span className="text-sm">week</span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priceUnit" />
                <span className="text-sm">month</span>
              </label>
            </div>

            <p className="mt-2 text-xs text-black/50">
              Set the price per selected time unit. Use 0 for free resources.
            </p>
          </div>
        </div>

        <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2">
          <button
            type="button"
            className="rounded-2xl bg-pink-300 px-4 py-3 text-sm font-semibold text-white"
          >
            Create
          </button>

          <button
            type="button"
            className="rounded-2xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResourceForm;