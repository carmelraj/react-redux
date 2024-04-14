import "./Todos.scss";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodos,
  deleteTodos,
  editTodos,
  todoCompleted,
} from "../../Redux/Slice/todoSlice";

const Todos = () => {
  const [editId, setEditId] = useState("");
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  // const editRef = useRef(null);
  // console.log(todo);
  const submitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      // alert("its edut");
      // console.log("editId", editId);
      dispatch(
        editTodos({
          id: editId,
          title: inputRef.current.value,
          isCompleted: false,
        })
      );
      // console.log({
      //   id: editId,
      //   title: inputRef.current.value,
      //   isCompleted: false,
      // });
    }
    if (!editId) {
      // alert("its add");
      dispatch(
        addTodos({
          id: Date.now(),
          title: inputRef.current.value,
          isCompleted: false,
        })
      );
    }
  };

  const removeHandler = (id) => {
    // console.log("deleted id", id);
    dispatch(deleteTodos({ id: id }));
  };

  const editHandler = (item) => {
    // console.log(item);
    inputRef.current.value = item.title;
    // editRef.current.value = item.id;
    setEditId(item.id);
  };

  const total = todo.filter((c) => c.isCompleted === true);
  const changeHandler = (item) => {
    // console.log(item);
    dispatch(todoCompleted({ id: item.id, isCompleted: !item.isCompleted }));
  };
  return (
    <div className="Todos" data-testid="Todos">
      <h2>Todos</h2>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Id</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo?.map((item) => {
            return (
              <tr
                key={item.id}
                style={{ background: item.isCompleted ? "green" : "" }}
              >
                <td>
                  <input
                    type="checkbox"
                    className={item.isCompleted ? "completed" : ""}
                    id={item.id}
                    checked={item.isCompleted}
                    onChange={() => changeHandler(item)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <button onClick={() => editHandler(item)}>Edit</button>
                  <button onClick={() => removeHandler(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total completed items : {total.length}</p>
    </div>
  );
};
export default Todos;
