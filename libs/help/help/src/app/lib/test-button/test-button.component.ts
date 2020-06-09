import {
  Component,
  Input
} from '@angular/core';

import {
  HelpWidgetService
} from '../../public/public_api';

@Component({
  selector: 'bb-help-button',
  templateUrl: './test-button.component.html'
})
export class TestButtonComponent {
  @Input()
  public helpKey: string;

  constructor(private widgetService: HelpWidgetService) { }

  public openToHelpKey(): void {
    this.widgetService.openToHelpKey(this.helpKey);
  }
}
