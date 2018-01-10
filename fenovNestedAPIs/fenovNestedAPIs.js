var userFirstName;
var userLastName;
var userPhoto;


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0]); //Should output the gender
    console.log(data.results[1].first);
    console.log(data.results[1].last);
    userFirstName = data.results[1].first;
    userLastName = data.results[1].last;
    userPhoto = data.results[10].medium;
    $("#example").append("<p>" + userFirstName + "</p><br>");
    $("#example").append("<p>" + userLastName + "</p><br>");
    $("#example").append("<p>" + userGender + "</p> <br>");
  }
});

