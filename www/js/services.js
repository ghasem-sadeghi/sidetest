angular.module('starter.services', [])

.factory('Userlists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var userlist=[
  {
    id:1,
    fname:'mohammad',
    lname:'nj'

  },{
     id:2,
    fname:'ghasem'  ,
    lname:'sadeghi'

  }
];

  return {
    all: function() {
      return userlist;
    },


    get:function(id){
      for (var i = userlist.length - 1; i >= 0; i--) {
        if (userlist[i].id==id) {
          return userlist[i];
        }
        
      }

      return null;

    }



  };
});
