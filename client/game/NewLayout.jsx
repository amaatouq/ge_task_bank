import React, { Fragment } from "react";
import DebugButtons from "../components/DebugButtons";
import { Header, ModalInstruction } from "../components/alternativeLayout";

export default class NewLayout extends React.Component {
  state = {
    showModal: false,
  };

  constructor(props) {
    super(props);

    this.openModal = this._openModal.bind(this);
    this.closeModal = this._closeModal.bind(this);
  }
  _closeModal() {
    this.setState({
      showModal: false,
    });
  }
  _openModal() {
    this.setState({
      showModal: true,
    });
  }
  render() {
    const {
      round,
      stage,
      player,
      game: {
        treatment: {
          feedback,
          playerCount,
          hideAvatar,
          hideTimer,
          chat,
          hideSocialNumeric = false,
        },
      },
    } = this.props;

    const { showModal } = this.state;

    const task = round.get("task");
    const hasQImage = task.question.image;
    const has3rdcol = stage.name === "feedback" || chat || !hideSocialNumeric;
    const cols = `${hasQImage ? "1fr" : ""} 1fr ${has3rdcol ? "320px" : ""}`;

    return (
      // <>
      //   <div className="h-full text-base alt-main-container z-0">
      //     <div className="bg-red-500">
      //       <Header
      //         hideAvatar={hideAvatar}
      //         playerCount={playerCount}
      //         hideTimer={hideTimer}
      //         feedback={feedback}
      //         onClickInstruction={this.openModal}
      //         {...this.props}
      //       />
      //     </div>
      //     <div className="bg-green-500"></div>
      //     <div className="bg-blue-500"></div>
      //   </div>
      //   <ModalInstruction open={showModal} onClose={this.closeModal} />
      // </>
      <div className="h-full text-base alt-main-container">
        <div className=" question-container">
          <div className="question-container-column bg-white w-full bg-green-500">
            <div className="w-full bg-gray-500 h-full"></div>
          </div>
        </div>
        <div className="bg-blue-500 meta-container"></div>
      </div>
    );
  }
}
