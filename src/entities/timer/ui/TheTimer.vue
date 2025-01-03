<script setup lang="ts">
import { useTimer } from '@/entities/timer/model'
const timerModel = useTimer()
timerModel.InitTimer()
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="absolute">
      <button class="btn btn-circle size-32 text-2xl" @click="timerModel.ToggleTimer">
        {{ timerModel.formatedTime }}
      </button>
    </div>
    <div
      class="radial-progress pointer-events-none"
      style="--value: 10; --size: 12rem; --thickness: 2px;"
      role="progressbar"
    >
    </div>
  </div>
</template>
