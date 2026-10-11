import { useRef, useEffect, useCallback, Dispatch, SetStateAction, JSX } from "react";

type ModalType = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
};

const Modal = ({ isModalOpen, setModalOpen, children }: ModalType) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalOpen(false);
    }
  }, [setModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;
    const root = document.getElementById("modal-wrapper");
    const previouslyFocused = document.activeElement;
    const focusable = () =>
      root
        ? ([...root.querySelectorAll("button, input, a[href]")].filter(
            (el) => !el.hasAttribute("disabled")
          ) as HTMLElement[])
        : [];
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    focusable()[1]?.focus();
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", onKey);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isModalOpen, handleClickOutside, setModalOpen]);

  return (
    <div
      id="modal-wrapper"
      role="dialog"
      aria-modal="true"
      aria-label="Stay connected"
      aria-hidden={!isModalOpen}
      className={`fixed inset-0 z-[60] grid bg-black/80 text-white backdrop-blur-lg transition-transform duration-300 ${
        isModalOpen ? "scale-100" : "pointer-events-none scale-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        onClick={() => setModalOpen(false)}
      >
        <span className="absolute h-0.5 w-5 rotate-45 rounded-sm bg-white" />
        <span className="absolute h-0.5 w-5 -rotate-45 rounded-sm bg-white" />
      </button>
      <div
        ref={modalRef}
        className="m-auto flex w-full max-w-md flex-col items-center px-6"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
