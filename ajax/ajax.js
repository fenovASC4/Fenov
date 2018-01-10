var myID = "55ae563e";

var myKey = "4e9d34e3f6078f8a906c3bca508da5d0";

var myURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + myID + "&appKey=" + myKey;

$.ajax( {

    url:myURL, 
    success: function(data){
        console.log(data);
    }
})