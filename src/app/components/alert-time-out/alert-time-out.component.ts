import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'alert-time-out',
  templateUrl: './alert-time-out.component.html',
  styleUrls: ['./alert-time-out.component.css']
})
export class AlertTimeOutComponent {
  public alerts: any = [];
 
  public add(): void {
    this.alerts.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${(new Date()).toLocaleTimeString()})`,
      timeout: 5000
    });
  }
}

