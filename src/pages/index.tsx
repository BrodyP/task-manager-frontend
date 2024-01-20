import DisplayAllTasks from "@/components/task-display";
import { GetServerSideProps } from "next";
import { Task } from "@/types/task";

interface HomeProps {
  allTask: Task[];
}

export default function Home(props: HomeProps) {
  return <DisplayAllTasks allTask={props.allTask} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const json: { error: string; tasks: Task } = await fetch(
    "http://localhost:8080/tasks"
  ).then((res) => res.json());

  return {
    props: {
      allTask: json.tasks,
    },
  };
};
