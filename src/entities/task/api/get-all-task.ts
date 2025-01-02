import axios, { type AxiosResponse } from 'axios'

export interface Task {
  id: number
  content: string
  completed: boolean
  created_at: string
  description: string
  length: number
}

export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const response: AxiosResponse<Task[]> = await axios.get('api/tasks', {
      params: {
        filter: 'today',
      },
    })
    return response.data
  } catch (error) {
    console.error('Ошибка при получении задач:', error)
    throw error // Пробрасываем ошибку дальше
  }
}
