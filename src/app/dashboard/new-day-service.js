'use strict';
var moduleName = 'timeKeeper.dashboard.newDayService';
class NewDayService {
  constructor(){
    this.addDay = function(timeCardList){
      var promise = new Promise((resolve, reject) => {
        if(_.isEqual(isLast(timeCardList), true)){
          resolve(timeCardList);
        }else{
          var today = {start: ''};
          timeCardList.$add(today);
          resolve(timeCardList);
        }
      });
      return promise;
    };

    var isLast = function(timeCardList){
      var lastElement = _.last(timeCardList);
      if(_.isUndefined(lastElement)){
        return false
      }else if(!_.isUndefined(lastElement) && !_.isEmpty(lastElement.start)){
        return moment.utc().isSame(moment(lastElement.start, 'YYYY-MM-DD'), 'day');
      }
      return _.isEmpty(lastElement.start);
    };
  }
}

angular.module(moduleName, []).service('newDay', NewDayService);
export default moduleName;
