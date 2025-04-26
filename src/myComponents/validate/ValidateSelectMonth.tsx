import React from "react";
import { ErrorMessage } from "@hookform/error-message";
export default function ValidateSelectMonth({title, nameTitle, register, errors, list }) {
  return (
    <>
      <h5>{title}</h5>
      <select {...register(nameTitle, { required: 'Please select an option' })} style={{width: '100px', height: '30px'}}>
        <option value=''>-- Choose an option --</option>
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
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