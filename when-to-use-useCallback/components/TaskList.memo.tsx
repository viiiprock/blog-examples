import { List, ListItem } from "@material-ui/core";
import { useStyles } from "style/main";
import { TaskPropsType } from "types";
import TaskListItem from "components/TaskListItem";
import { memo } from "react";

function TaskList({ tasks }: { tasks: TaskPropsType[] }) {
  const classes = useStyles();

  return (
    <List className={classes.taskList}>
      {tasks.length <= 0 ? (
        <ListItem>Empty!!!</ListItem>
      ) : (
        tasks.map((task: TaskPropsType) => {
          return (
            <TaskListItem key={task.id} status={task.status} taskId={task.id}>
              {task.title}
            </TaskListItem>
          );
        })
      )}
    </List>
  );
}

export default memo(TaskList);
