
angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {

  $scope.incomeItems = [];
  $scope.expenseItems = [];

  $scope.addNew = function (item, type) {
    item.type = type;
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

  $scope.addIncome = function (item) {
    this.addNew(item, 'income')
  };

  $scope.addExpense = function (item) {
      this.addNew(item, 'expense')
  };

  $scope.getMonthlyNet = function () {
    let net = 0;
    $scope.incomeItems.map(item => net += item.sum);
    $scope.expenseItems.map(item => net -= item.sum);
    return net;
  };
}

