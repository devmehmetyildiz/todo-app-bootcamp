import React, { useEffect, useState } from 'react'

export default function Index(props) {
  const todoInitialData = {

  }

  const [username, setUsername] = useState("")
  const [currentTodo, setcurrentTodo] = useState()

  useEffect(() => {
    const storageduser = localStorage.getItem('username')
    if (storageduser) {
      setUsername(storageduser)

    } else {
      props.history.push('/Login')
    }

  }, [])


  return (
    <div>Home</div>
  )
}
