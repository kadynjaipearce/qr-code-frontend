import { Component } from '@angular/core';
import { AuthButtonComponent } from '../auth-button/auth-button.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [AuthButtonComponent, CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  isMenuCollapsed = true;

  navItems: NavItem[] = [
    {
      label: 'Home',
      icon: 'fas fa-toolbox',
      routerLink: '/',
    },
    { label: 'Why us?', icon: 'far fa-question-circle', routerLink: '/' },
    { label: 'Pricing', icon: 'fas fa-tags', routerLink: '/' },
  ];

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
