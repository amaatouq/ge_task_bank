import React from "react";
import { Consumer } from "../../context";
import Modal from "../Modal";

export function ModalInstruction({ game }) {
  return (
    <Consumer>
      {({ showModal, toggleModal }) => {
        const { chat = false, interactionMode } = game.treatment;

        return (
          <Modal open={showModal} onClose={toggleModal}>
            <p className="mb-5">This is a social stage where you can:</p>
            <ul className="mb-5 instruction-list">
              <li className="mb-3">
                See information about the other players’ responses
              </li>
              {chat && (
                <li className="mb-3">
                  Chat with other players about their response
                </li>
              )}
              {interactionMode === "continuous"
                ?
                <li className="mb-3">
                  Modify your response and press ‘Update’ to change your response
                </li>
                :
                <li className="mb-3">
                  If everyone clicks ‘OK’ , the stage will end early and you
                  will go on the next stage.
                </li>
              }


            </ul>
          </Modal>
        );
      }}
    </Consumer>
  );
}
