import { ReactNode } from "react";
import classes from "./task-card.module.css";

interface TaskCardProps {
  name: string;
  time: string;
}

function TaskCard(props: TaskCardProps): ReactNode {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.time}>{props.time}</div>
    </div>
  );
}

export default TaskCard;
