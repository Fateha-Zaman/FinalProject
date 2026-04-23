function ResourceList() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <h3 className="font-semibold">Resource list</h3>

        <p className="mt-2 text-xs text-black/50">
          Click an item to edit or delete it.
        </p>

        <div className="mt-4 space-y-3"></div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <h3 className="font-semibold">Good resource details</h3>

        <ul className="mt-4 space-y-2 text-sm text-black/70">
          <li>• Clear name users recognize</li>
          <li>• Practical description (capacity, location, notes)</li>
          <li>• Availability reflects real world access</li>
          <li>• Pricing is consistent and predictable</li>
        </ul>

        <button
          type="button"
          className="mt-5 inline-block w-full rounded-2xl bg-brand-primary px-4 py-3 text-center text-sm text-white"
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
}

export default ResourceList;