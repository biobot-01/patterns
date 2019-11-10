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

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mary'});
console.log(ItemCtrl.get(2));