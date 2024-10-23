import { useRef, useEffect } from "react";

const Modal = ({ isModalOpen, setModalOpen, children }) => {
  const CloseButton = () => (
    <div
      data-collapse-toggle="navbar"
      id="navbar-icon"
      type="button"
      className={`flex justify-end z-[1] translate-y-16 -translate-x-4`}
      aria-controls="navbar"
      aria-expanded="false"
      onClick={() => {
        setModalOpen(false);
      }}
    >
      <button className="scale-75 p-5">
        <span
          className={`fixed w-12 h-1 bg-white rounded-sm origin-top-left rotate-45 -translate-x-4 -translate-y-5`}
        />
        <span
          className={`fixed w-12 h-1 bg-white rounded-sm origin-bottom-left -rotate-45 -translate-x-4 translate-y-3`}
        />
      </button>
    </div>
  );
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="modal-wrapper"
      className={`fixed grid mx-auto text-white w-screen h-screen 
    z-10 bg-opacity-80 backdrop-blur-lg transition-transform duration-300 ${
      isModalOpen ? "scale-100" : "scale-0 after:duration-300:hidden"
    }`}
    >
      <div
        ref={modalRef}
        className="flex flex-col md:my-auto mx-auto pt-10
             md:h-fit rounded-md"
      >
        <CloseButton />
        {children}
      </div>
    </div>
  );
};

export default Modal;
