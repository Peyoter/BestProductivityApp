<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100 rounded bg-base-200">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Best Productivity App (BPA)</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a>Привычки</a></li>
        <li><a>Настройки</a></li>
        <li><a>Контакты</a></li>
      </ul>
    </div>
  </div>
  <div class="card-body">
    <RouterView />
  </div>
</template>
