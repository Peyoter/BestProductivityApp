import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { TimerStorageRepository } from '@/entities/timer/lib'

enum TimerTypeEnum {
  Rest = 0,
  Work = 1,
}

interface ITimerState {
  time: number
  timerType: TimerTypeEnum
}

export const useTimer = defineStore('timer', () => {
  let intervalId: number;
  const timerStorage = new TimerStorageRepository()

  const state: ITimerState = reactive({
    time: 0,
    timerType: TimerTypeEnum.Work,
  })

  function InitTimer() {
    const timeStorage = timerStorage.LoadTime()

    if (timeStorage > 0) {
      state.time = timeStorage
      return
    }

    state.time = 25 * 60
  }

  function StarTimer() {
    if (intervalId) {
      return
    }
    intervalId = setInterval(() => {
      Tick()
    }, 1000)
  }

  function Tick() {
    timerStorage.Save(state.time.toString())
    if (state.time <= 0) {
      PauseTimer()
      return
    }
    state.time--
  }

  const formatedTime = computed(() => {
    const minutes = Math.floor(state.time / 60)
    const secs = state.time % 60
    return `${padZero(minutes)}:${padZero(secs)}`
  })

  function padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString()
  }

  function PauseTimer() {
    if (typeof intervalId == 'number') {
      clearInterval(intervalId)
      intervalId = 0
    }
  }

  function ToggleTimer() {
    if (!intervalId) {
      StarTimer()
    } else {
      PauseTimer()
    }
  }

  return {
    state,
    InitTimer,
    formatedTime,
    ToggleTimer,
  }
})
