import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [Menubar, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  items = [
    {
      icon: 'pi pi-home',
      label: 'Home',
    },
    {
      icon: 'pi pi-tag',
      label: 'Pricing',
      items: [
        {
          icon: 'pi pi-home',
          label: 'Home',
        },
      ],
    },
  ];
}
