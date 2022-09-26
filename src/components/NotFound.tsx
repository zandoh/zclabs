const NotFound = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[color:var(--zc-color-theme)]">
      <h1 className="text-9xl font-extrabold tracking-widest text-[color:var(--zc-color-text-theme)]">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[color:var(--tw-gradient-to)] px-2 text-sm">
        Page Not Found
      </div>
      <button className="mt-5">
        <a
          className="group relative inline-block text-sm font-medium text-[color:var(--tw-gradient-to)] focus:outline-none focus:ring"
          href="/"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[color:var(--tw-gradient-to)] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block border border-current bg-[color:var(--zc-color-theme)] px-8 py-3">
            Go Home
          </span>
        </a>
      </button>
    </main>
  );
};

export default NotFound;
