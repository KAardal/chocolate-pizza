'use strict';

var listIngredients = {
  items: [
    '1 1/2 cups milk',
    '1/2 cup mascarpone',
    '1/2 tsp pink salt',
    '1 lb Black Mission Figs',
    '1/2 cup brown sugar',
    '2-4 tbsp water',
    '1 1/2 cups heavy cream',
    '1/3 granulated sugar',
    '2 egg yolks',
    '1 lemon, juiced',
    '2 tbsp butter',
    '1 cup honey roasted pecans, roughly chopped',
  ],
};

var div = document.getElementById('list');
var ingredientsUL = document.createElement('ul');
div.appendChild(ingredientsUL);
var ingredientsOfLi;
for (var i = 0; i < listIngredients.items.length;i++){
  ingredientsOfLi = document.createElement('li');
  ingredientsOfLi.textContent = listIngredients.items[i];
  ingredientsUL.appendChild(ingredientsOfLi);
}
