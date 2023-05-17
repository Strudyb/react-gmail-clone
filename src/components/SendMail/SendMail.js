import React from "react";
import "./SendMail.scss";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../../features/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMail = (formData) => {
    // try {
    //   await
    // } catch (error) {
    //   console.log(error);
    // }
    addDoc(collection(db, "emails"), {
      ...formData,
      timestamp: serverTimestamp(),
    })
      .then((res) => {
        console.log(res)
        dispatch(closeSendMessage());
      })
      .catch(console.log);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
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
        {errors.subject && (
          <p className="sendMail__error">Subject is required.</p>
        )}

        <input
          type="text"
          placeholder="Message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required.</p>
        )}

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
