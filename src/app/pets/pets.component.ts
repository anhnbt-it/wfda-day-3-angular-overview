import {Component, Input, OnInit} from '@angular/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  name = 'Poodle';
  image = '/assets/Dogs.jpeg';

  @Input() appearance: MatFormFieldAppearance;

  constructor() { }

  ngOnInit(): void {
  }

  setName(name): void {
    this.name = name.target.value;
  }

  setImage(image): void {
    this.image = image.target.value;
  }

  getName(): string {
    return this.name;
  }

  getImage(): string {
    return this.image;
  }

}
