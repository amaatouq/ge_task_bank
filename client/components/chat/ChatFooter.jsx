import React from "react";

export default class ChatFooter extends React.Component {
  state = { comment: "", rows: 1, minRows: 1, maxRows: 5 };

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.state.comment.trim();
    if (text === "") {
      return;
    }

    const { player, onNewMessage, timeStamp } = this.props;

    let msg = {
      text,
      player: {
        _id: player._id,
        avatar: player.get("avatar"),
        name: player.get("name") || player._id,
      },
    };

    if (timeStamp) {
      msg = { ...msg, timeStamp };
    }

    onNewMessage(msg);

    this.setState({ comment: "", rows: 1 });
  };

  handleChange = (e) => {
    const el = e.currentTarget;
    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea
    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    const usedRows = currentRows < maxRows ? currentRows : maxRows;

    this.setState({
      [el.name]: el.value,
      rows: usedRows,
    });
  };

  render() {
    const { comment, rows } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="px-4 pt-2 pb-4 border-t">
          <textarea
            className="w-full m-0 px-0 resize-none xl:text-lg text-md text-gray-500 bg-transparent placeholder-gray-300 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-gray-500 leading-snug tabular-nums"
            id="chat-input"
            name="comment"
            placeholder="Type chat message here..."
            value={comment}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.handleSubmit(e);
              }
            }}
            rows={rows}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </div>
      </form>
    );
  }
}
