import { ChangeEvent, useState } from "react"
import { AppBar, Typography, Input, Toolbar } from "@material-ui/core"
import { useStyles } from "style/main"
import { TaskPropsType } from "types"
import { StatusEnum } from "common/constants"

interface TaskInputProps {
  onAdd: (task: TaskPropsType) => void
  isLoading?: boolean
}

function TaskInput({ onAdd, isLoading = false }: TaskInputProps) {
  const classes = useStyles()
  const [taskTitle, setTaskTitle] = useState("")

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    return setTaskTitle(e.currentTarget.value)
  }

  const addTask = () => {
    if (onAdd && taskTitle) {
      onAdd({
        id: Date.now(),
        title: taskTitle,
        status: StatusEnum.TODO,
      })
    }
    // reset title
    setTaskTitle("")
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          TODO LIST
        </Typography>

        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault()
            addTask()
          }}
        >
          <Input
            className={classes.input}
            fullWidth
            type="text"
            placeholder={isLoading ? "Adding todo..." : "Add new todo"}
            disabled={isLoading}
            required
            value={taskTitle}
            onChange={handleChangeTitle}
            role="add"
            tabIndex={-1}
          />
        </form>
      </Toolbar>
    </AppBar>
  )
}

export default TaskInput
