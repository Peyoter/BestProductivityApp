export class TimerStorageRepository {
  private timerKey = 'timer';

  Save(time : string){
    localStorage.setItem( this.timerKey, time );
  }

  LoadTime() : string{
    return localStorage.getItem( this.timerKey);
  }
}
