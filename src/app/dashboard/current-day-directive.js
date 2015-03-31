'use strict';
var moduleName = 'timeKeeper.dashboard.currentDay';

class CurrentDayCtrl {
  constructor(){
    this.date = moment().toISOString();

    this.moveRight = function(){
      this.date = moment(this.date).add(1, 'days').toISOString();
      this.entry = findTimeCard(this.cardList, this.date)
    }

    this.moveLeft = function(){
      this.date = moment(this.date).subtract(1, 'days').toISOString();
      this.entry = findTimeCard(this.cardList, this.date);
    }

    this.init = function(){
      this.entry = _.last(this.cardList);
    };

    var findTimeCard = function(cardList, date){
      var start = moment(date).startOf('day');
      var stop = moment(date).endOf('day');
      var range = moment().range(start, stop);
      return _.find(cardList, timeCard => {
         if(range.contains(moment(timeCard.start))){
           return timeCard
         }
      })
    }

    this.init();
  }
}

angular.module(moduleName, [])
  .directive('currentDay', function(){
    return {
      restrict: 'E',
      scope: {
        cardList: '=',
      },
      templateUrl: 'app/dashboard/html/current-day-directive.html',
      controller: 'currentDayCtrl as currentday',
      bindToController: true,
    };
  }).controller('currentDayCtrl', CurrentDayCtrl);


export default moduleName;
