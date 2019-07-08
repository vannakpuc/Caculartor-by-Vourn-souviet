import { Component } from '@angular/core';
import { SwitchView } from '@angular/common/src/directives/ng_switch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mycoculator';


  numbers = [

    { value: 7, text: 7 },
    { value: 8, text: 8 },
    { value: 9, text: 9 },
    { value: "/", text: "/" },
    { value: 4, text: 4 },
    { value: 5, text: 5 },
    { value: 6, text: 6 },
    { value: "*", text: "*" },
    { value: 1, text: 1 },
    { value: 2, text: 2 },
    { value: 3, text: 3 },
    { value: "-", text: "-" },
    { value: "C", text: "C" },
    { value: 0, text: 0 },
    { value: "=", text: "=" },
    { value: "+", text: "+" },

    // { value: 7, text: 7 },
    // { value: 8, text: 8 },
    // { value: 9, text: 9 },  
    // { value: 4, text: 4 },
    // { value: 5, text: 5 },
    // { value: 6, text: 6 },   
    // { value: 1, text: 1 },
    // { value: 2, text: 2 },
    // { value: 3, text: 3 },  
    // { value: 0, text: 0 },
    // { value: "=", text: "=" },
    // { value: "+", text: "+" },
    // { value: "%", text: "%" },
    // { value: "*", text: "*" },
    // { value: "-", text: "-" },
    // { value: "C", text: "C" },
  ]
  display = "";
  result = 0;
  num1 = "";
  num2 = "";
  isOperator = false
  stringOperator = "";


  cal(value) {
    this.display +=value;

    switch (value) {
      case "+":
        this.num1 =this.display.replace(/[^\w\s]/gi, '');
        this.isOperator =true;
        this.stringOperator = "+";
        break;
      case "-":
          this.num1 =this.display.replace(/[^\w\s]/gi, '');;
          this.isOperator =true;
          this.stringOperator = "-";
        break;
      case "*":
          this.num1 =this.display.replace(/[^\w\s]/gi, '');
          this.isOperator =true;
          this.stringOperator = "*";
        break;
      case "/":
          this.num1 =this.display.replace(/[^\w\s]/gi, '');
          this.isOperator =true;
          this.stringOperator = "/";
          break;
          case "=":
            this.display = "";
           
            console.log(Number(this.num1), Number(this.num2))
            if(this.stringOperator ==="+"){
              this.result=Number(this.num1)+ Number(this.num2);
            }else if(this.stringOperator =="-"){
            this.result=Number(this.num1)- Number(this.num2);
          }else if(this.stringOperator =="*"){
            this.result=Number(this.num1)* Number(this.num2);
          }else if(this.stringOperator =="/"){
            this.result=Number(this.num1)/ Number(this.num2);

           }         
          break; 
          case "C":
           this.display ="";
           this.result =0;
           this.isOperator = false
        this. stringOperator = "";
        this.num1="";
        this.num2 ="";
          break;

      default:  
        break;
    }
        if(this.isOperator){
          this.num2 +=value;
          this.num2 = this.num2.replace(/[^\w\s]/gi, '');
        }               
    }

  }










//   cal(value) {
//     this.result = this.result + value.toString();
//     console.log(this.result)


//     switch (value) {
//       case "+":
//         this.num1 = this.display.replace(/[^\w\s]/gi, '');
//         this.isOperator = true;
//         this.stringOperator = "+";
//         break;
//       case "_":

//         this.num1 = this.display.replace(/[^\w\s]/gi, '');
//         this.isOperator = true;
//         this.stringOperator = "-";
//         break;

//       case "*":
//         this.num1 = this.display.replace(/[^\w\s]/gi, '');
//         this.isOperator = true;
//         this.stringOperator = "*";
//         break;
//       case "/":
//         this.num1 = this.display.replace(/[^\w\s]/gi, '');
//         this.isOperator = true;
//         this.stringOperator = "/";
//         break;

//       case "=":
//         this.display = "";
//         console.log(this.stringOperator)
//         console.log(Number(this.num1), Number(this.num2))

//         if (this.stringOperator === "+") {
//           this.result = Number(this.num1) + Number(this.num2);
//         } else if (this.stringOperator == "-") {
//           this.result = Number(this.num1) - Number(this.num2);
//         } else if (this.stringOperator == "*") {
//           this.result = Number(this.num1) * Number(this.num2);
//         } else if (this.stringOperator == "/") {
//           this.result = Number(this.num1) / Number(this.num2);


//         }
//         break;
//       case "C":
//         this.display = "";
//         this.result = 0;
//         this.isOperator = false;
//         this.stringOperator ="";
//         this.num1 = "";
//         this.num2 = "";
//         break;

//       default:
//         break;
//     } 
//     if (this.isOperator) {
//       this.num2 += value;
//       this.num2 = this.num2.replace(/[^\w\s]/gi, '');
//     }

//   }

// }


