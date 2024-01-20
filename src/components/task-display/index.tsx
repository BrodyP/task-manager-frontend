import { ReactNode } from "react";
import classes from "./display-all.module.css";
import TaskCard from "../card/task-card";
import { Task } from "@/types/task";

interface DisplayAllTasksProps {
  allTask: Task[];
}
function DisplayAllTasks(props: DisplayAllTasksProps): ReactNode {
  const { allTask } = props;

  const waitTasks = allTask.filter((task) => task.complete === false);
  const completeTasks = allTask.filter((task) => task.complete === true);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1>Display All Tasks</h1>
        <div className={classes.taskContainer}>
          <div className={classes.taskLists}>
            <div>Wait</div>
            <div className={classes.cards}>
              {waitTasks.map((task) => (
                <TaskCard key={task.id} name={task.name} time={task.time} />
              ))}
            </div>
          </div>
          <div className={classes.taskLists}>
            <div>Complete</div>
            <div className={classes.cards}>
              {completeTasks.map((task) => (
                <TaskCard key={task.id} name={task.name} time={task.time} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplayAllTasks;
