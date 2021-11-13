import React from "react";
import './style.css'

const BaseModal = (props) => {
  const { children, show, closeModal, address } = props;
  
  return (
    <div
      className={`modal fade ${show === true ? "show" : ""}`}
      id="buy-modal"
      onClick={closeModal}
    >
      <div
        className="modal-dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 id="myModalLabel">{props.address}</h4>
            {/* <button type="button" className="close" onClick={closeModal}>
              &times;
            </button> */}
            <div className="close" onClick={closeModal}></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default BaseModal;
