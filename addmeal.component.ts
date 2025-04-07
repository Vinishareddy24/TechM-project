import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmeal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addmeal.component.html',
  styleUrl: './addmeal.component.css'
})
export class AddmealComponent {
  mealOptions = {
    breakfast: ['Oatmeal', 'Eggs', 'Smoothie', 'Cereal'],
    lunch: ['Chicken salad', 'Tostis', 'Grilled Sandwich', 'Pasta'],
    dinner: ['Pizza', 'Pancakes', 'Chinese', 'Biryani']
  };

  mealPlan = [
    { day: 'Sunday', date: '', breakfast: '', lunch: '', dinner: '' },
    { day: 'Monday', date: '', breakfast: '', lunch: '', dinner: '' },
    { day: 'Tuesday', date: '', breakfast: '', lunch: '', dinner: '' },
    { day: 'Wednesday', date: '', breakfast: '', lunch: '', dinner: '' },
    { day: 'Thursday', date: '', breakfast: '', lunch: '', dinner: '' },
    { day: 'Friday', date: '', breakfast: '', lunch: '', dinner: '' },
    { day: 'Saturday', date: '', breakfast: '', lunch: '', dinner: '' },
  ];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  meal = {
    day: '',
    breakfast: '',
    lunch: '',
    dinner: ''
  };
  saveMeals() {
    console.log('Meal Plan:', this.mealPlan);
    alert('Meal plan saved!');
  };

  onSubmit() {
    console.log('Meal planned:', this.meal);
    alert(`Meal for ${this.meal.day} saved!`);
  }
 
  

}
