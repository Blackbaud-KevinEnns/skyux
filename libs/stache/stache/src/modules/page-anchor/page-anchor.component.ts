import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SkyAppWindowRef } from '@blackbaud/skyux-builder/runtime';

import { StacheNavLink } from '../nav/nav-link';

@Component({
  selector: 'stache-page-anchor',
  templateUrl: './page-anchor.component.html',
  styleUrls: ['./page-anchor.component.scss']
})
export class StachePageAnchorComponent implements OnInit, StacheNavLink {
  public name: string;
  public fragment: string;
  public path: string[];

  public constructor(
    private router: Router,
    private elementRef: ElementRef,
    private windowRef: SkyAppWindowRef) { }

  public ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    let name = element.textContent.trim();
    let fragment = name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

    this.name = name;
    this.fragment = fragment;
    this.path = [this.router.url.split('#')[0]];
  }

  public addHashToUrl(): void {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.windowRef.nativeWindow.location.hash = this.fragment;
  }
}
