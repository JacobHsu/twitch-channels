$(function() {

    // https://dev.twitch.tv/docs/v5/reference/streams/#get-live-streams
    const limit = 20;
    var twitchURL = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends'+'&limit='+limit;
    var myContentType = 'application/vnd.twitchtv.v5+json';
    var clientID = '8o2r5ir7u9g113hna3gps6c7jlofpk';

    $.ajax({
        type: 'GET',
        url: twitchURL,
        headers: {
            'Accept':'application/vnd.twitchtv.v5+json',
            'Client-ID': clientID
        },

        success: function(data) {

            console.log('ajax is loading successfully!!');

            const { streams } = data;
            for (let stream of streams) {

                var $content =`
                <li class='item'>
                    <div class='video'>
                        <img src='${stream.preview.medium}' />
                    </div>
                    <div class='avatar'> 
                        <img class='img' src='${stream.channel.logo}'>
                        <div id='info_' class='info'>
                            <p class='channel'> ${stream.channel.status} </p>   
                            <p class='host'> ${stream.channel.display_name} </p>
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
