import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
  // backdropOpacity = 50,
  width = "w-96", // Default width class
}) {
  const dialog = useRef();
  useEffect(() => {
    dialog.current.showModal();
    if (!open) {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      className={`backdrop:bg-black/50 bg-transparent ${
        width === "w-96" ? "w-96" : width
      } `}
      ref={dialog}
      onClose={onClose}
    >
      {open && children}
    </dialog>,
    document.getElementById("modal")
  );
}
