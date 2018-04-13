$(function() {

    // https://dev.twitch.tv/docs/v5/reference/streams/#get-live-streams

    var twitchURL = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends';
    var myContentType = 'application/vnd.twitchtv.v5+json';
    var clientID = '8o2r5ir7u9g113hna3gps6c7jlofpk';

    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
        headers: {
            'Accept':'application/vnd.twitchtv.v5+json',
            'Client-ID': clientID
        },

        success: function(data) {

            console.log('ajax is loading successfully!!');

            for (var i = 0; i < 20; i++) {
                var $content =`
                <li class='item'>
                    <div class='video'>
                        <img src='${data.streams[i].preview.medium}' />
                    </div>
                    <div class='avatar'> 
                        <img class='img' src='${data.streams[i].channel.logo}'>
                        <div id='info_' class='info'>
                            <p class='channel'> ${data.streams[i].channel.status} </p>   
                            <p class='host'> ${data.streams[i].channel.display_name} </p>
                        </div>
                    </div>
                </li>`;
                $( '#content').append($content);

            }
        },
        error: function(data) {
            console.log('Error',data);
        }
    });

})
