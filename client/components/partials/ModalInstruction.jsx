import React from "react";
import { Consumer } from "../../context";
import Modal from "../Modal";

export function ModalInstruction() {
  return (
    <Consumer>
      {({ showModal, toggleModal }) => {
        return (
          <Modal open={showModal} onClose={toggleModal}>
            <p className="mb-5">This is a social stage where you can:</p>
            <ul className="mb-5 instruction-list">
              <li className="mb-3">
                See information about the other player’s responses (even if they
                change item)
              </li>
              <li className="mb-3">
                Chat with other player about their response
              </li>
              <li className="mb-3">
                Modify your response until you click ‘submit’ (cannot modify it
                once you click submit!) or the other stage ends
              </li>
              <li className="mb-3">
                if everyone clicks ‘submit’ , the stage will end early and you
                will go on the next stage.
              </li>
            </ul>
          </Modal>
        );
      }}
    </Consumer>
  );
}
