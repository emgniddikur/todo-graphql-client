import React, { useState } from 'react';
import {
  useFetchTaskQuery,
  useAddTaskMutation,
  Task,
  FetchTaskQueryHookResult
} from "./generated/graphql";

const Tasks = () => {
  const { data, loading, error, refetch } = useFetchTaskQuery();

  if (loading) {
    return <p>ロード中...</p>;
  }

  if (error) {
    return <p>エラー</p>;
  }

  return <TaskList tasks={data!.getAllTasks as Task[]} refetch={refetch} />;
}

const TaskList = ({
  tasks,
  refetch
}: {
  tasks: Task[];
  refetch: FetchTaskQueryHookResult["refetch"];
}) => {
  const [taskName, setTaskName] = useState("");

  function handleInputTaskName(
    e: React.ChangeEvent<HTMLInputElement> & { target: { value: string } }
  ) {
    if (e.target == null) return;

    setTaskName(e.target.value);
  }

  const [addTask, { loading, error }] = useAddTaskMutation({
    variables: {
      name: taskName
    }
  });

  function handleClickAddTaskButton() {
    addTask();

    refetch();

    setTaskName("");
  }

  if (loading) {
    return <p>ロード中...</p>;
  }

  if (error) {
    return <p>エラー</p>;
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleInputTaskName} value={taskName} />
        <button onClick={() => handleClickAddTaskButton()}>タスクを追加</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
