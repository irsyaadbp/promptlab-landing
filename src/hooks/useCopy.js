import { useEffect } from "react";
import { useState } from "react";

export default function useCopy() {
  const [status, setStatus] = useState("idle");

  let timeout;

  useEffect(() => {
    if (["success", "error"].includes(status)) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => {
        setStatus("idle");
        clearTimeout(timeout);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [status]);

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      setStatus(successful ? "success" : "error");
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
      setStatus("error");
    }

    document.body.removeChild(textArea);
  }

  function copy(text) {
    setStatus("pending");
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        setStatus("success");
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        setStatus("error");
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return { copy, status };
}
