angular.module('myApp.strength', [])
  .controller('StrengthCtrl', function ($scope) {

    $scope.weight = 155
    $scope.feet = 5
    $scope.inches = 2
    $scope.height_in = 61
    $scope.bmi2
    $scope.bodyfat = 12
    $scope.strengthList = [
    {date: '01/02/2016', activity: 'Bench', weight: 155, reps: 10, sets: 3},
    {date: '01/02/2016', activity: 'Squat', weight: 200, reps: 10, sets: 3},
    {date: '01/02/2016', activity: 'Deadlift', weight: 125, reps: 10, sets: 3}
    ]

    $scope.submitStrength = function () {
      console.log($scope.str)
      $scope.strengthList.push($scope.str)
    }

    $scope.convert_height_in = function (feet, inches) {
      $scope.height_in = (feet * 12) + inches
      return $scope.height_in
    }

    $scope.onerepmax = function (weight, reps) {
      return (weight * (1 + (reps / 30))).toFixed(2)
    }

    $scope.bmi = function (height_in, weight_lb) {
      if (weight_lb > 0 && height_in > 0) {
        var bmi_result = (weight_lb / (height_in * height_in)) * 703.06957964
      }
      $scope.bmi2 = bmi_result
      return bmi_result.toFixed(2)
    }

    $scope.categorize = function (height, weight) {
      var bmi2 = $scope.bmi(height, weight)
      var category
      if (bmi2 > 30) {
        category = 'You got work to do!'
      }
      else if (bmi2 > 25 && bmi2 < 29.99) {
        category = 'Time to exercise and eat right'
      }
      else if (bmi2 > 18.5 && bmi2 < 24.99) {
        category = 'Looking good! Let\'s stay that way'
      }
      else if (bmi2 < 18.5) {
        category = 'Bulk up!'
      };
      return category
    }
  })