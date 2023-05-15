import React from "react";
import "./SendMail.scss";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";

function SendMail() {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMail = (data) => {
    console.log(data);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())}/>
      </div>

      <form onSubmit={handleSubmit(sendMail)}>
      {errors.length && errors}
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required.</p>}
        
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="sendMail__error">Subject is required.</p>}

        <input
          type="text"
          placeholder="Message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is required.</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
