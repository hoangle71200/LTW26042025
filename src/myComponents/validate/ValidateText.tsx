import React from "react";
import { ErrorMessage } from "@hookform/error-message";
export default function ValidateText({title, nameTitle, register, errors }) {
  return (
    <>
      <h5>{title}</h5>
      <input
        {...register(nameTitle, {
          required: 'This input is required.'

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
// pattern: {
//   value: /\d+/,
//     message: 'This input is number only.'
// },
// minLength: {
//   value: 11,
//     message: 'This input must exceed 10 characters'
// }