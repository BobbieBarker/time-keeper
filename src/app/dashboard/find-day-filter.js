'use strict';

var moduleName = 'timeKeeper.dashboard.dayFinder';

class dayFinderFilter {
  constructor(){
    return function(cardList){
      var testy = _.last(cardList);
      console.log(testy, 'in the filter');
      return testy;
    };
  }
}

angular.module(moduleName, []).filter('findDay', dayFinderFilter);
export default moduleName;
