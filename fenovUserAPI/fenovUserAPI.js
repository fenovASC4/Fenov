$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data.results[0]);
    var userFirstName = data.results[0].first;
    var userLastName = data.results[0].last;
    $("#example").append("<p>" + userFirstName + "</p>");
  }
});