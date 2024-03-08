import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
  backdropOpacity = 50,
}) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      // className=" backdrop:bg-black/50 bg-transparent w-96"
      className={`backdrop:bg-black/${backdropOpacity} bg-transparent w-96`}
      ref={dialog}
      onClose={onClose}
    >
      {open && children}
    </dialog>,
    document.getElementById("modal")
  );
}
