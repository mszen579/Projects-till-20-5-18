window.onload = function () {
    
// $.get('data/tweets.json').then(function(tweets) {
//     console.log(tweets);
//     return $.get('data/friends.json');
// }).then(function(friends) {
//     console.log(friends);
//     return $.get('data/videos.json');
// }).then(function (videos) {
//     console.log(videos);
// });

function* gen() {
    var x = yield 10;
}

var myGen =  gen();
console.log(myGen.next());
    console.log(myGen.next());
};
