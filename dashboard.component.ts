import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for ngFor, ngIf
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ This line is essential
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mealPlan = [
    {
      day: 'Monday',
      date: new Date('2025-04-07'),
      breakfast: ['Oatmeal', 'Fruits'],
      lunch: ['Rice', 'Chicken'],
      dinner: ['Soup', 'Salad']
    },
    {
      day: 'Tuesday',
      date: new Date('2025-04-08'),
      breakfast: ['Toast', 'Eggs'],
      lunch: ['Pasta', 'Veggies'],
      dinner: ['Dal', 'Roti']
    },
    {
      day: 'Wednesday',
      date: new Date('2025-04-09'),
      breakfast: ['Avocado toast', 'Orange juice'],
      lunch: ['Chicken salad', 'Whole grain bread', 'Soup'],
      dinner: ['Paneer curry', 'Chapati', 'Carrot raita']
    },
    {
      day: 'Thursday',
      date: new Date('2025-04-10'),
      breakfast: ['Banana pancakes', 'Almond milk'],
      lunch: ['Turkey sandwich', 'Sweet potato fries'],
      dinner: ['Grilled fish', 'Steamed veggies', 'Brown rice']
    },
    {
      day: 'Friday',
      date: new Date('2025-04-11'),
      breakfast: ['Granola with yogurt', 'Berries'],
      lunch: ['Chickpea curry', 'Jeera rice', 'Cucumber salad'],
      dinner: ['Egg curry', 'Roti', 'Green beans stir-fry']
    },
    {
      day: 'Saturday',
      date: new Date('2025-04-12'),
      breakfast: ['Scrambled eggs', 'Toast', 'Fruit juice'],
      lunch: ['Veg biryani', 'Raita', 'Papad'],
      dinner: ['Chicken stir-fry', 'Noodles', 'Spring rolls']
    },
    {
      day: 'Sunday',
      date: new Date('2025-04-13'),
      breakfast: ['Paratha', 'Curd', 'Banana'],
      lunch: ['Rajma rice', 'Onion salad', 'Pickle'],
      dinner: ['Pizza (cheat meal)', 'Garlic bread', 'Soft drink']
    }
  ];
  removeMeal(dayToRemove: any): void {
    this.mealPlan = this.mealPlan.filter(day => day !== dayToRemove);
  }  
}

