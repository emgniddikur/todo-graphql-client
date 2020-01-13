import React, { useState } from 'react';
import { gql } from "apollo-boost";
import { Query, Mutation } from 'react-apollo';

interface Task {
  id: number;
  name: string;
  description?: string;
}

const QUERY = gql`
  query getAllTasks {
    getAllTasks {
      id
      name
      description
    }
  }
`;

const MUTATION = gql`
  mutation addTask($input: AddTaskInput!) {
    addTask(input: $input) {
      id
      name
      description
    }
  }
`;

const Tasks = () => 
  <Query query={QUERY}>
    {
      ({ data, loading }: { data: any; loading: boolean; }) => {
        return loading ? <p>ロード中...</p> : <TaskList tasks={data.getAllTasks} />
      }
    }
  </Query>

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const [taskName, setTaskName] = useState("");

  function handleInputTaskName(
    e: React.ChangeEvent<HTMLInputElement> & { target: { value: string } }
  ) {
    if (e.target == null) return;

    setTaskName(e.target.value);
  }

  function handleClickAddTaskButton(func: Function) {
    func();

    setTaskName("");
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleInputTaskName} value={taskName} />
        <Mutation
          mutation={MUTATION}
          variables={{ input: { name: taskName } }}
          refetchQueries={[{ query: QUERY }]}
        >
          {(addTask: Function) => (
            <button onClick={() => handleClickAddTaskButton(addTask)}>
              タスクを追加
            </button>
          )}
        </Mutation>
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
