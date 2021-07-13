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
            <ul className="mb-5 instruction-list">
              {chat && (
                <li className="mb-3">
                  Use the chatroom to exchange information with other players.
                </li>
              )}
              <li className="mb-3">
                Combine your information to improve your accuracy.
              </li>
              {interactionMode === "continuous"
                ?
                <li className="mb-3">
                  You must click "update" to save your new answer.
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
