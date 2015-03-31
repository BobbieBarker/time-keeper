'use strict';
var moduleName = 'timeKeeper.dashboard.currentDay';

class CurrentDayCtrl {
  constructor(){
    this.date = moment().toISOString();
    this.moveRight = function(){
      this.date = moment(this.date).add(1, 'days').toISOString();
      this.entry = _.find(this.cardList, timeCard => {
        if(moment(this.date, 'YYYY-MM-DD').isSame(moment(timeCard.start, 'YYYY-MM-DD'))){
           return timeCard
         }
      })
    }

    this.moveLeft = function(){
      this.date = moment(this.date).subtract(1, 'days').toISOString();
      this.entry = _.find(this.cardList, timeCard => {
         if(moment(this.date, 'YYYY-MM-DD').isSame(moment(timeCard.start, 'YYYY-MM-DD'))){
           return timeCard
         }
      })
    }

    this.init = function(){
      this.entry = _.last(this.cardList);
    };


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
