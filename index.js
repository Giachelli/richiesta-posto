var app=angular.module('subheaderBasicDemo', ['ngMaterial']);
app.controller('SubheaderAppCtrl', ['$scope', function($scope){
	var imagePath = 'img/ic_mood_white_48px.svg';
	var imagePath_sad="img/ic_sentiment_neutral_black_48px.svg";
    $scope.ultimi = [
	    {
        face : imagePath,
        what: 'Torino',
        who: 'Giacomo',
        when: '3:08PM',
        notes: "Ciao sono Giacomo, avrei bisogno di un posto a Torino",
        done: false
      },
       {
        face : imagePath,
        what: 'Roma',
        who: 'Valeria',
        when: '3:08PM',
        notes: "Ciao sono Valeria, avrei bisogno di un posto a Roma",
        done: false
      },
      {
        face : imagePath,
        what: 'Milano',
        who: 'Luca',
        when: '3:08PM',
        notes: " Ciao sono Luca, avrei bisogno di un posto a Milano.",
        done: true
      },
      {
        face : imagePath,
        what: 'Bologna',
        who: 'Michele',
        when: '3:08PM',
        notes: "Ciao sono Michele, avrei bisogno di due posti a Bologna",
        done: true
      }
    ];
    
    $scope.trenta=[
    {
	    face : imagePath,
        what: 'Torino',
        who: 'Matteo',
        when: '3:08PM',
        notes: " Ciao sono Matteo, avrei bisogno di un posto a Torino.",
        done: false
    },{
	    face : imagePath,
        what: 'Firenze',
        who: 'Marco',
        when: '3:08PM',
        notes: " Ciao sono Marco, avrei bisogno di un posto a Firenze.",
        done: true
    },{
	    face : imagePath,
        what: 'Venezia',
        who: 'Giulia',
        when: '3:08PM',
        notes: " Ciao sono Giulia, avrei bisogno di un posto a Venezia.",
        done: true
    }, {
	    face : imagePath,
        what: 'Milano',
        who: 'Alessandro',
        when: '3:08PM',
        notes: " Ciao sono Alessandro, avrei bisogno di un posto a Milano.",
        done: true
    }, {
	    face : imagePath,
        what: 'Roma',
        who: 'Francesco',
        when: '3:08PM',
        notes: " Ciao sono Francesco, avrei bisogno di un posto a Roma.",
        done: false
    }
    
    ];
}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
});