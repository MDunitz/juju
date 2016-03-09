angular.module('addItemFactory', [])

.factory('AddMe', function(Auth,$http){
  var addItemFuncs ={};
  //pull in user info from the auth factory
  addItemFuncs.addItemToDB =function (itemInfo){
    data={
      itemNickName : itemInfo.nickname,
      itemUrl : itemInfo.URL,
      itemImageUrl : itemInfo.imageUrl,
      currentPrice : itemInfo.currentPrice,
      idealPrice : itemInfo.idealPrice,
      createdDate : itemInfo.createdDate
    };

    return $http({
      method: 'POST',
      url: 'api/v1/addItem',
      data: data
    })
  },

  addItemFuncs.scrapePriceInfo = function(itemInfo){
    data = {
      url : itemInfo.URL
    };
    return $http({
      method : 'POST',
      url : '/scrape',
      data : data
    })
  }


  return addItemFuncs
});