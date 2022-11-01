import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const ref = useRef<HTMLElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.body;
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}
