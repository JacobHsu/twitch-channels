$(function() {

    let offset = 0;
    const limit = 20;

    appendData();

    const reverse_height= 200;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - reverse_height) {
            appendData();
        }

    });
 
    function appendData() {
        // callback 確定讓 append TemaplateData 在 ajax getData 後
        getData((err, data) => {
            const { streams } = data;
            for (let stream of streams) {
                $('#content').append( getTemaplateData(stream) );
            }
            offset += limit;
        });
    }

    // https://dev.twitch.tv/docs/v5/reference/streams/#get-live-streams
    function getData(callback) { 
        
        var clientID = '8o2r5ir7u9g113hna3gps6c7jlofpk';
        var twitchURL = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends'+'&client_id='+clientID+'&limit='+limit+'&offset='+offset;
        var myContentType = 'application/vnd.twitchtv.v5+json';
        

        var r = new XMLHttpRequest();
        r.open("GET", twitchURL, true);
        r.onreadystatechange = function () {
          if (r.readyState != 4 || r.status != 200) {
            callback(null, 'Error');
            return;
          } 
          //alert("Success: " + r.responseText);
          var data = r.responseText;
          callback(null, JSON.parse(data));
        };
        r.send();
    }

    function getTemaplateData(data) {
        let placeholderIMG = data.preview.medium || "https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg";
        return `
                <li class='item'>
                    <div class='video'>
                        <img src='${placeholderIMG}' />
                    </div>
                    <div class='avatar'> 
                        <img class='img' src='${data.channel.logo}'>
                        <div id='info_' class='info'>
                            <p class='channel'> ${data.channel.status} </p>   
                            <p class='host'> ${data.channel.display_name} </p>
                        </div>
                    </div>
                </li>`;
    }    
})
