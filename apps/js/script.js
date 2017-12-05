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
 google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Killed', 'Wounded'],
        ['Jan', 62, 138],
        ['Feb', 44, 109],
        ['March', 58, 92],
        ['April', 46, 176],
        ['May', 30, 100],
        ['June', 60, 149],
        ['July', 42, 179],
        ['Aug', 34, 154],
        ['Sept', 32, 126],
        ['Oct', 94,548],
        ['Nov', 63,128],
      ]);

      var options = {
        title: 'The numbers behind mass shootings',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Killed and Wounded',
          minValue: 0,
        },
        vAxis: {
          title: 'Months'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
});
