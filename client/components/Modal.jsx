import React from "react";
import { InfoIcon } from "./SvgIcon";

export default function Modal({ onClose, title = "Instruction", children }) {
  return (
    <div className="modal opacity-1 fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-10"
        onClick={onClose}
      />

      <div className="modal-container  mx-auto rounded shadow-lg z-50">
        <div className="modal-content overflow-y-auto">
          <div className="flex justify-start items-center mb-3">
            <InfoIcon
              color="#000"
              className="flex-grow-0 flex-shrink-0 instruction-icon mr-4"
            />
            <div className="text-17 modal-title font-bold text-black flex-grow-0 w-auto flex-shrink-0 ">
              {title}
            </div>
          </div>
          <div className="modal-body">{children}</div>

          <div className="flex justify-start pt-2">
            <button
              className="btn-modal-close font-bold hover:opacity-75 transition-opacity duration-300 cursor-pointer"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
