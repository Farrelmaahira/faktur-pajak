const Modal = (props) => {
  const { open, close, children } = props;
  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          open == true ? "visible bg-black/10" : "invisible"
        }`}
      >
        <div className="bg-white w-1/2 min-h-40 rounded-lg shadow-lg flex flex-col">
          {/* MODAL HEADER */}
          <div className="p-3 border-b flex flex-row justify-between">
            <h1 className="text-2xl font-semibold"></h1>
            <button
              onClick={close}
              type="button"
              className="box-content p-2 rounded border-none text-neutral-500 hover:text-neutral-800 hover:no-underline hover:shadow-lg focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* MODAL BODY */}
          <div className="p-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
