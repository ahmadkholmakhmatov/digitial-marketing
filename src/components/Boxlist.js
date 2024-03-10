import React, { Component } from "react";

class BoxList extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card h-100">
        <img src={item?.image} alt="" />
        <div className="card-body">
          <div className="card-title">{item?.title}</div>
          <div className="card-text">{item?.text}</div>
        </div>
      </div>
    );
  }
}

export default BoxList;
