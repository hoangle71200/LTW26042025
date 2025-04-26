import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'


export default function MyDropDownBtn ({pickedTitle, title, setPicked, setPickedTitle, makeReload, list}) {
  return (
    <div>
      <DropdownButton
        id='dropdown-basic-button'
        title={pickedTitle == '' ? title : pickedTitle}
      >
        <Dropdown.Item
          onClick={() => {
            setPicked()
            setPickedTitle('')
            makeReload()
          }}
        >
          ----
        </Dropdown.Item>
        {list.map((i, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => {
              setPicked(i.id)
              setPickedTitle(i.name)
              makeReload()
            }}
          >
            {i.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  )
}