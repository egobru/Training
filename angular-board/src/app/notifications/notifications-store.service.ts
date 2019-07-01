import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationsStoreService {
  private notifications = []; // array de notificaciones
  private notifications$ = new BehaviorSubject<any[]>([]); // $ son observables, no son datos reales,
                                                            // son EMISORES de datos reales,
  constructor() {}

  public select$ = () => this.notifications$.asObservable(); // equivalente al GET

  public dispatchNotification(notification) { // quivalente al SET
    this.notifications.push(notification); // guardo la notificación en el array
    this.notifications$.next([...this.notifications]); // ...this.notificationes es un clon, no es el original,
                                                      // para evitar que lo puedan modificar.
  }
  }
