// Basic structure

// (function() {
//   // Declare private vars & functions

//   return {
//     // Declare public vars & functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const elem = document.querySelector('p');
//     elem.textContent = text;
//   };

//   return {
//     callChangeText: function() {
//       changeText();

//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();