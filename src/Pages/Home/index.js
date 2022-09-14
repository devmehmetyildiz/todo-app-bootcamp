import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { GetAllTodos, GetSelectedTodo, ClearSelectedTodo, AddTodo, UpdateTodo, DeleteTodo } from "../../Redux/Actions/TodoActions"
import "../../Assets/Css/Home.css"

export function Index(props) {
  const InitialData = {
    id: 0,
    content: '',
    isCompleted: false
  }
  const { Todos, GetAllTodos, GetSelectedTodo, ClearSelectedTodo, AddTodo, UpdateTodo, DeleteTodo } = props
  const [username, setUsername] = useState("")
  const [currentTodo, setcurrentTodo] = useState(InitialData)
  const [list, setList] = useState([])
  const [addOperation, setaddOperation] = useState(true)

  useEffect(() => {
    const storageduser = localStorage.getItem('username')
    if (storageduser) {
      setUsername(storageduser)
      GetAllTodos()
    } else {
      props.history.push('/Login')
    }

  }, [])

  const getSelectedtodo = {

  }

  const HandleonChange = (e) => {
    const item = currentTodo
    item.content = e.target.value
    setcurrentTodo(item)
  }

  const Clear = () => {
    setaddOperation(true)
    setcurrentTodo(InitialData)
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand d-flex justify-content-center align-items-center" href="#" >
          <img src={require("../../Assets/Img/user.png")} width="30" height="30" alt="" />
          <h5 className='ml-2'>{username}</h5>
        </a>
        <div className='navbar-text'>
          <button className="btn btn-secondary Home__Logout_Btn">Çıkış Yap</button>
        </div>
      </nav>
      <div className='container align-items-center'>
        <div className='row'>
          <div className='col-3'>
            <div className='mt-10'>
              <form onSubmit={(e) => { e.preventDefault() }}>
                <div className="form-group">
                  <label >Yapılacak İş</label>
                  <input type="text" className="form-control" placeholder="Yapılacak İş"
                    value={currentTodo.content} onChange={() => { }}
                  />
                  <small className="form-text text-muted">Lütfen yapılacak işi yazınız</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => { }}>{addOperation ? "Ekle" : "Güncelle"}</button>
                <button className="btn btn-primary ml-5" onClick={() => { }}>Temizle</button>
              </form>
            </div>
          </div>
          <div className='col-9'>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Yapılacak İş</th>
                  <th scope="col">Tamamlandımı</th>
                  <th scope="col">Durumu Güncelle</th>
                  <th scope="col">Düzenle</th>
                </tr>
              </thead>
              <tbody>
                {Todos.list.map(item => {
                  return <tr>
                    <th>{item.id}</th>
                    <td>{item.content}</td>
                    {item.isCompleted ? <td>Tamamlandı</td> : <td>Tamamlanmadı</td>}
                    <td>
                      <div className="form-check">
                        <input id={item.id} type="checkbox" onClick={() => { }} className="form-check-input" id="exampleCheck1" />
                      </div>
                    </td>
                    <td>
                      <button id={item.id} type="button" className="btn btn-primary" >
                        Düzenle
                      </button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => ({
  Todos: state.Todos
})

const mapDispatchToProps = { GetAllTodos, GetSelectedTodo, ClearSelectedTodo, AddTodo, UpdateTodo, DeleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(Index)