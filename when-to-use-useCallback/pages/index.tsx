import { Container, Card, CardContent, List, ListItem } from "@material-ui/core";
import { ADD_TODO, TODOS } from "queries/endpoints";
import TaskInput from "components/TaskInput";
import TaskListItem from "components/TaskListItem";
import { useCallback, useEffect, useState } from "react";
import { useStyles } from "style/main";
import { TaskPropsType } from "types";
import { useFetch } from "queries/hooks/useFetch";
import { usePost } from "queries/hooks/usePost";

function Home() {
  const classes = useStyles();

  const [tasks, setTasks] = useState<TaskPropsType[]>([]);
  const [fetchData, { loading, error }] = useFetch(TODOS);

  useEffect(() => {
    fetchData().then((data) => {
      setTasks(data);
    });
  }, []);

  const [postData, { loading: createLoading, error: createError }] = usePost(ADD_TODO);

  const handleAddTask = useCallback(
    async (task: TaskPropsType) => {
      // update local
      const updateTasks: TaskPropsType[] = [task, ...tasks];
      setTasks(updateTasks);

      return postData(task);
    },
    [tasks],
  );

  if (createError) {
    alert(`Create unsuccessful: ${createError}`);
  }

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <TaskInput isLoading={createLoading} onAdd={handleAddTask} />

        <CardContent>
          {loading && "Loading data..."}
          {error && error.message}
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
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;
