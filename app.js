/**
 * 1. We have added a directive with the name 'avatar' and handler of
 * lineItemDirective to our angular app module
 */
angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('lineItem', lineItemDirective);

function mainCtrl ($scope) {

  $scope.incomeItems = [];
  $scope.expenseItems = [];

  $scope.addNew = function (item) {
    item.type = item.type.toLowerCase();
    item.frequency = item.frequency.toLowerCase();
    if(item.frequency == 'weekly'){
      item.sum = (parseInt(item.sum) * 3.5).toString();
      console.log(item.sum)
    }
    if(item.frequency == 'daily'){
      item.sum = (parseInt(item.sum) * 30.5).toString();
      console.log(item.sum)
    }
    if(item.type == 'income'){
      console.log("hit income");
      $scope.incomeItems.push({ 
        name: item.name,
        sum: item.sum,
        frequency: item.frequency,
        type: item.type
      }); /* [1] */
      console.log($scope.incomeItems);
    } else {
      console.log("hit new expenses");
      $scope.expenseItems.push({ 
        name: item.name,
        sum: item.sum,
        frequency: item.frequency,
        type: item.type
      }); /* [1] */
      console.log($scope.expenseItems);
    }
    //Reset all the inputs
    item.name = ''; /* [2] */
    item.sum = '';
    item.frequency = '';
    item.type = '';
  };
}

/**
 * 1. this defines the api of our avatar directive. This means we are
 * expecting a user property whose value should be interpreted as an object.
 * 2. This simply means we want this directive to be used as an element.
 * 3. You can see here we've moved the html that was in our template before
 * and give it as the template for this directive. This means wherever we use
 * <avatar /> this html will also be placed there.
 * 4. Here we are implementing the feature where if there is no user avatar url,
 * we go ahead and give it a default
 */
function lineItemDirective () {
  return {
    scope: {
      item: '=' /* [1] */
    },
    restrict: 'E', /* [2] */
    replace: 'true',
    template: (
      '<div class="LineItem">' +
        '<h4>{{item.name}}</h4>' +
        '<h4>{{item.sum}}</h4>' + 
      '</div>'
    ), /* [3] */
    link: ''
  };

}