import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export type AddTagInput = {
  taskId: Scalars['ID'],
  name: Scalars['String'],
};

export type AddTaskInput = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  addTask: Task,
  addTag: Tag,
};


export type MutationAddTaskArgs = {
  input: AddTaskInput
};


export type MutationAddTagArgs = {
  input: AddTagInput
};

export type Query = {
   __typename?: 'Query',
  getAllTasks: Array<Task>,
  getTaskById: Task,
  getAllTags: Array<Tag>,
  getTagById: Tag,
};


export type QueryGetTaskByIdArgs = {
  id: Scalars['ID']
};


export type QueryGetTagByIdArgs = {
  id: Scalars['ID']
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  name: Scalars['String'],
  tasks: Array<Task>,
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  tags: Array<Tag>,
};


export type TaskFieldsFragment = (
  { __typename?: 'Task' }
  & Pick<Task, 'id' | 'name' | 'description'>
);

export type FetchTaskQueryVariables = {};


export type FetchTaskQuery = (
  { __typename?: 'Query' }
  & { getAllTasks: Array<(
    { __typename?: 'Task' }
    & TaskFieldsFragment
  )> }
);

export type AddTaskMutationVariables = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>
};


export type AddTaskMutation = (
  { __typename?: 'Mutation' }
  & { addTask: (
    { __typename?: 'Task' }
    & TaskFieldsFragment
  ) }
);

export const TaskFieldsFragmentDoc = gql`
    fragment taskFields on Task {
  id
  name
  description
}
    `;
export const FetchTaskDocument = gql`
    query fetchTask {
  getAllTasks {
    ...taskFields
  }
}
    ${TaskFieldsFragmentDoc}`;

/**
 * __useFetchTaskQuery__
 *
 * To run a query within a React component, call `useFetchTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTaskQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchTaskQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchTaskQuery, FetchTaskQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchTaskQuery, FetchTaskQueryVariables>(FetchTaskDocument, baseOptions);
      }
export function useFetchTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchTaskQuery, FetchTaskQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchTaskQuery, FetchTaskQueryVariables>(FetchTaskDocument, baseOptions);
        }
export type FetchTaskQueryHookResult = ReturnType<typeof useFetchTaskQuery>;
export type FetchTaskLazyQueryHookResult = ReturnType<typeof useFetchTaskLazyQuery>;
export type FetchTaskQueryResult = ApolloReactCommon.QueryResult<FetchTaskQuery, FetchTaskQueryVariables>;
export const AddTaskDocument = gql`
    mutation addTask($name: String!, $description: String) {
  addTask(input: {name: $name, description: $description}) {
    ...taskFields
  }
}
    ${TaskFieldsFragmentDoc}`;
export type AddTaskMutationFn = ApolloReactCommon.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTaskMutation, AddTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTaskMutation, AddTaskMutationVariables>(AddTaskDocument, baseOptions);
      }
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = ApolloReactCommon.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;