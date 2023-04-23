import { checkError, client } from './client';

export async function getTodos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createTodo(description) {
  const response = await client.from('todos').insert({ description });

  return checkError(response);
}

export async function toggleTodo({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete })
    .eq('id', id);
  return checkError(response);
}

export async function deleteTodo(id) {
  const response = await client.from('todos')
    .delete()
    .match({ id })
    .single();

  return checkError(response);
}