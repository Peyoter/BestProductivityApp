<script setup lang="ts">
import { useTimer } from '@/entities/timer/model'
const timerModel = useTimer();
timerModel.InitTimer();

</script>


<template>
  <div class="flex items-center">
    <div
      class="radial-progress"
      style="--value:70; --size:12rem; --thickness: 2px;"
      role="progressbar">
      <button class="btn btn-circle size-32 text-xl" @click="timerModel.ToggleTimer">
        {{timerModel.formatedTime}}
      </button>
    </div>
  </div>
</template>
