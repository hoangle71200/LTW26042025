import React from "react";
import { ErrorMessage } from "@hookform/error-message";
export default function ValidateEmail({title, nameTitle, register, errors }) {
  return (
    <>
      <h5>{title}</h5>
      <input
        {...register(nameTitle, {
          required: 'This input is required.',
          email: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
            message: 'Please enter a valid email address.'
          }
        })}
        placeholder={title}
      />
      <ErrorMessage
        errors={errors}
        name={nameTitle}
        render={({ messages }) => {
          return messages ? Object.entries(messages).map(([type, message]) =>
            <p style={{color: "#bf1650"}} key={type}>{message}</p>) : null
        }}
      />
    </>
  )
}
// minLength: {
//   value: 11,
//     message: 'This input must exceed 10 characters'
// }