$(document).ready(function(){
  //writeTable();//
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
          'q': "Mass Shooting"
        });
        $.ajax({
          url: url,
          method: 'GET',
          {  document.getElementById("demo").innerHTML
        }
        }).done(function(result) {
          console.log(result);
        }).fail(function(err) {
          throw err;

        });

});


//function writeTable(){
  //console.log("writeTable()");
//$('#datatable').dataTable( {
      //"ajax": 'shooting.json'
  //  });
  //}
