import { ToggleComplete } from './components/toggleComplete/toggleComplete'
import { useToDo } from './hooks/useTodo'
import { complete } from './util/complete'
import { Card } from './components/card/card'
import { ListItems } from './components/listItem/listItem'
import { Item } from './components/item/item'
import { Icon } from './components/icon/icon'
import { Button } from './components/button/button'
import './App.css'

export const App = () => {
  const {
    toDoList,
    toggleNewTask,
    newTask,
    setToggleNewTask,
    handleOnChange,
    handleKeyPress,
    handleDeleteTask,
    handleComplete
  } = useToDo()

  return (
    <Card>
      <>
        <h1>To-Do-List</h1>
        <ListItems>
          <>
            {
              toDoList.map(todo => {
                return (
                  <Item key={todo.id} isDelete={todo.isDelete}>
                    <>
                      <p className={complete(todo.isComplete)}>{todo.todo}</p>
                      <div className='action-item'>
                        <ToggleComplete
                          id={todo.id}
                          isComplete={todo.isComplete}
                          handleComplete={() => handleComplete(todo.id)}
                        />
                        <Icon icon='delete' onClick={() => handleDeleteTask(todo.id)}></Icon>
                      </div>
                    </>
                  </Item>
                )
              })
            }
            <div>
              {
                toggleNewTask ?
                  <input
                    value={newTask?.todo}
                    onChange={(e) => handleOnChange(e)}
                    onKeyDown={(e) => { handleKeyPress(e) }}
                    type="text"
                    autoFocus
                  /> : ''
              }
            </div>
          </>
        </ListItems>
        <Button onClick={() => setToggleNewTask(!toggleNewTask)}>
          <Icon icon='add' />
        </Button>
      </>
    </Card >
  )
}




