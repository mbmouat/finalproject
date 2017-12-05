$(document).ready(function(){

  console.log("loaded");
  $("#las-vegas").hide();
  $("#texas").hide();

    $("#texas-btn").click(function(){
      console.log("clicked");
        $("#gun-control").hide();
        $("#las-vegas").hide();
        $("#texas").show();

      });

      $("#las-vegas-btn").click(function(){
        console.log("clicked");
          $("#gun-control").hide();
          $("#texas").hide();
          $("#las-vegas").show();

        });

        // new york times
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "10bda7bf71614f6cb64801a21b68dc16",
          'q': "Mass Shootings"
        });
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          console.log(result);
   //parse of the json from nytimes
       var byline = [];
      var docs = [];
      var tempPath = result["response"]["docs"];
      console.log(tempPath);

     for (var i = 0, len = tempPath.length; i < len; ++i) {
       console.log(i);

       byline.push(tempPath[i]["headline"]);

      html += '<li><a href="#" (\''  + tempPath[i]["uri"] + '\')">' + tempPath[i]["headline"]["main"] + '</a></li>'
     }
     console.log (result);
     console.log(byline);
      $("#result").html(html);

 }).fail(function(err) {
   throw err;


 });

});
