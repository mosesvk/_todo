import React from 'react'

const ListItem = ({task}) => {
  const {date, id, progress, title, user_email:email} = task
  console.log(email)
  return (
    <div></div>
  )
}

export default ListItem