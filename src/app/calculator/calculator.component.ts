import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number;
  firstNum: number;
  secondNum: number;
  operator = '+';

  constructor() {
    this.firstNum = 0;
    this.secondNum = 0;
  }

  onFirstChange(evt): void {
    this.firstNum = Number(evt.target.value);
  }

  onSecondChange(evt): void {
    this.secondNum = Number(evt.target.value);
  }

  onSelectChange(evt): void {
    this.operator = evt.target.value;
  }

  calculate(): void {
    if (isNaN(this.firstNum) || isNaN(this.secondNum)) {
      throw new Error('Parameter is not a number!');
    }
    console.log(this.firstNum + ' ' + this.operator + ' ' + this.secondNum);
    switch (this.operator) {
      case '+':
        this.result = this.firstNum + this.secondNum;
        break;
      case '-':
        this.result = this.firstNum - this.secondNum;
        break;
      case '*':
        this.result = this.firstNum * this.secondNum;
        break;
      case '/':
        if (this.secondNum > 0) {
          this.result = this.firstNum / this.secondNum;
        } else {
          throw new Error('Can\'t divide by zero!');
        }
        break;
      default:
        throw new Error('Not supported yet.');
    }
  }

  ngOnInit(): void {
  }

}
