<script setup lang="ts">
import { ref } from 'vue'
import { getAllTasks, type Task } from '@/entities/task/api/index.ts'
import { TheTimer } from '@/entities/timer'

const task = ref<Task>()
const taskCount = ref(0)
const isChecked = ref<boolean>(false)
const isLoading = ref<boolean>(true);

getAllTasks()
  .then((tasks) => {
    isLoading.value = false;
    taskCount.value = tasks.length
    task.value = tasks[0]
    console.log(tasks)
  })
  .catch((error) => {
    console.error('Ошибка:', error)
  })

function Done() {

}
</script>

<template>
  <main>
    <div class="flex justify-center">
      <div class="card bg-base-100 shadow-xl" style="width: 450px" v-if="!isLoading">
        <div class="card-body gap-5">
          <div class="flex items-center justify-center">
            <input type="checkbox" class="checkbox" id="taskCheckbox" v-model="isChecked" />
            <div class="ml-2 text-xl text-gray-500" :class="{ 'line-through': isChecked }">
              {{ task?.content }}
            </div>
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary" :disabled="!isChecked" @click="Done">Завершить</button>
          </div>
          <div class="flex items-center justify-center">
            <TheTimer />
          </div>
        </div>
      </div>
      <div v-else class="card bg-base-100 shadow-xl justify-center items-center" style="width: 450px; height: 372px">
        <span class="loading loading-infinity loading-3xl"></span>
      </div>
    </div>
  </main>
</template>
