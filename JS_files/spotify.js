var client_id = '51093f8448a64043a28fc3213ac0bd65'; // Your client id
var client_secret = '499bbca6a5464ce58309b7a5db20520a'; // Your secret
var redirect_uri = 'https://pages.github.umn.edu/alhin010/Mashup/'; // Your redirect uri

// find template and compile it
var test = document.getElementById('query').innerHTML;
var templateSource = document.getElementById('test').innerHTML,
    template = Handlebars.compile(templateSource),
    resultsPlaceholder = document.getElementById('results'),
    playingCssClass = 'playing',
    audioObject = null;


// (window as any).global = window;
// (window as any).global = window;
//var math = require('math');
// var Spotify = require('spotify-web-api-js');
// var test = require('spotify-web-api-node');


// var request = require('request');

// // your application requests authorization
// var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//     },
//     form: {
//     grant_type: 'client_credentials'
//     },
//     json: true
// };
    
// request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
    
//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//         url: 'https://api.spotify.com/v1/users/jmperezperez',
//         headers: {
//         'Authorization': 'Bearer ' + token
//         },
//         json: true
//     };
//     get(options, function(error, response, body) {
//         console.log(body);
//     });
//     }
// });

function Authorize() {
    var token;
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            dataType: 'text',
            async: false,
            // xhrFields: {
            //     withCredentials: true
            // },
            //url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?' + '&' + 'client_id=' + client_id + '&' + 'client_secret=' + client_secret + '&' +  'redirect_uri=' + redirect_uri + '&' + 'response_type=token',
            url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            data: {
                grant_type: 'client_credentials'
            },
            // client_id: client_id,
            // client_secret: client_secret,
            // redirect_uri: redirect_uri,
        
            success: function (response) {
                // callback(response);
                token = JSON.parse(response).access_token;
                resolve(token);
                // return auth_resp.access_token;
                // respond_data = auth_resp.access_token;
                //alert(respond_data.access_token);
            }
        })
    })
}
    // $.ajax({
    //     type: 'POST',
    //     dataType: 'text',
    //     async: false,
    //     // xhrFields: {
    //     //     withCredentials: true
    //     // },
    //     //url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?' + '&' + 'client_id=' + client_id + '&' + 'client_secret=' + client_secret + '&' +  'redirect_uri=' + redirect_uri + '&' + 'response_type=token',
    //     url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
    //     headers: {
    //         'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    //     },
    //     data: {
    //         grant_type: 'client_credentials'
    //     },
    //     // client_id: client_id,
    //     // client_secret: client_secret,
    //     // redirect_uri: redirect_uri,
    
    //     success: function (response) {
    //         // callback(response);
    //         token = JSON.parse(response).access_token;
    //         // return auth_resp.access_token;
    //         // respond_data = auth_resp.access_token;
    //         //alert(respond_data.access_token);
    //     }
    // });
    // alert(token);
    // return token;

// $.ajax({
//     type: 'POST',
//     dataType: 'text',
//     // xhrFields: {
//     //     withCredentials: true
//     // },
//     //url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?' + '&' + 'client_id=' + client_id + '&' + 'client_secret=' + client_secret + '&' +  'redirect_uri=' + redirect_uri + '&' + 'response_type=token',
//     url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
//     headers: {
//         'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
//     },
//     data: {
//         grant_type: 'client_credentials'
//     },
//     // client_id: client_id,
//     // client_secret: client_secret,
//     // redirect_uri: redirect_uri,

//     success: function (response) {
//         // callback(response);
//         window.respond_data = response;
//         // alert(response);
//     }
// });

// $.ajax({
//     type: 'POST',
//     dataType: 'text',
//     // xhrFields: {
//     //     withCredentials: true
//     // },
//     //url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?' + '&' + 'client_id=' + client_id + '&' + 'client_secret=' + client_secret + '&' +  'redirect_uri=' + redirect_uri + '&' + 'response_type=token',
//     url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
//     headers: {
//         'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//     },
//     form: {
//         grant_type: 'client_credentials'
//     },
//     json: true,
    
    
//     // client_id: client_id,
//     // client_secret: client_secret,
//     // redirect_uri: redirect_uri,

//     success: function (response) {
//         // callback(response);
//         console.log(response);
//     }
// });

// const HttP = new XMLHttpRequest();
// const url = 'https://accounts.spotify.com/authorize';
// HttP.open('GET', url);
// HttP.send();

// HttP.onreadystatechange=function() {
//     if (this.readyState == 4 && this.status==200) {
//         console.log(HttP.responseText);
//     }
// }


    // res.reirect('https://account.spotify.com/authorize?' +
    //     querystring.stringify({
    //         response_type: 'code', 
    //         client_id:client_id,
    //         resirect_uri: redirect_uri,
    //         state:state  
    // }));

// alert(window.respond_data.access_token);

var fetchTracks = function (albumId, callback) {
   var token;
   Authorize().then(function(resolveData) {
       token = resolveData;
       
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        headers: {
            "Authorization": "Bearer "+ token
        },
        success: function (response) {
            callback(response);
        }

    });
   })
    


};

var searchAlbums = function (query) {
    // var respond_data;
    var token;
    Authorize().then(function(resolveData){
        token = resolveData;
        console.log(token);
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            headers: {
                "Authorization": "Bearer "+ token
            },
            data: {
                q: query,
                type: 'album'
            },
            success: function (response) {
                resultsPlaceholder.innerHTML = template(response);
            }
        });
    })
    // var token=Authorize();
};

results.addEventListener('click', function (e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function (data) {
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function () {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function () {
                    target.classList.remove(playingCssClass);
                });
            });
        }
    }
});

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
}, false);

