export class TimerStorageRepository {

  private timerKey = 'timer'

  Save(time: string) {
    localStorage.setItem(this.timerKey, time)
  }

  LoadTime(): number {
    return typeof localStorage.getItem(this.timerKey) === 'string' ? Number(this.timerKey)  : 0;
  }
}
