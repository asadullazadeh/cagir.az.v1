import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import exit_modal from "@/icons/exit_modal.svg";
import client from "@/public/client.jpg";


const ModalStandart = ({ dialogId, content }) => (
  <dialog id={dialogId} className="modal">
    <form method="dialog" className="modal-box">
      <div className="flex justify-end">
        {/* if there is a button in form, it will close the modal */}
        <button className="modal-action mt-0">
          <Image src={exit_modal} alt="exit_modal_icon" />
        </button>
      </div>
      {content}
    </form>
  </dialog>
);

export default ModalStandart;
