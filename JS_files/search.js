// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
var wikipedia_title;
var first_search = false;
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCqfaOY_CqMtgpq2beyZaq5bq8gbVJwwZg');
}

// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    document.getElementById('youtube_response').innerHTML = "";

    document.querySelector("#youtube_headline").innerHTML = "";
    var youtube_head_part = document.createElement("h2");
    youtube_head_part.appendChild(document.createTextNode("YouTube Videos"));
    document.querySelector("#youtube_headline").appendChild(youtube_head_part);

    var responseString = JSON.stringify(response, '', 2);
    for (let i = 1; i < 5; i++) {
        if (response.items[i].id.kind == "youtube#video") {
            var x = document.createElement("IFRAME");
            x.setAttribute("src", "https://www.youtube.com/embed/" + response.items[i].id.videoId);
            document.getElementById('youtube_response').appendChild(x);
        }
    }

    document.getElementById('wikipedia_response').innerHTML = "";

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        list: "search",
        srsearch: document.getElementById('query').value,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {
            console.log("Your search page " + response.query.search[0].title + " exists on English Wikipedia");
            wikipedia_title = response.query.search[0].title;

            document.querySelector("#wiki_headline").innerHTML = "";
            var wiki_head_part = document.createElement("h2");
            wiki_head_part.appendChild(document.createTextNode(wikipedia_title));
            document.querySelector("#wiki_headline").appendChild(wiki_head_part);
        
            wikipedia_title = wikipedia_title.replace(/ /g, "_");

            var URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=';
            URL += "&titles=" + wikipedia_title;
            URL += "&rvprop=content";
            URL += "&callback=?";
            $.getJSON(URL, function (data) {
                var obj = data.query.pages;
                var ob = Object.keys(obj)[0];
                console.log(obj[ob]["extract"]);
                try {
                    document.getElementById('wikipedia_response').innerHTML = obj[ob]["extract"];
                }
                catch (err) {
                    document.getElementById('wikipedia_response').innerHTML = "";
                }
            });

        })
        .catch(function (error) { console.log(error); });

}
