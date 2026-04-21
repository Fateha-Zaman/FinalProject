function Header() {
  return (
    <header className="sticky top-0 z-40 bg-brand-dark text-white shadow">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" className="h-10 w-10" />
            <div>
              <p className="text-sm font-semibold">Booking System</p>
              <p className="text-xs text-white/70">
                Secure resource booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;