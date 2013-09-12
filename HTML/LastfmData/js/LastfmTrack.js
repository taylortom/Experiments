/**
 * Contains information about a Last.fm track
 */

(function(){

    /**
     * Constructor
     */
    var LastfmTrack = function(data)
    {

        this.name = data.name;
        this.artist = (data.artist['#text']) ? data.artist['#text'] : data.artist.name;
        this.album = (data.album) ? data.album['#text'] : "";
        this.streamable = (data.streamable == 0) ? false : true;
        this.nowPlaying = (data['@attr'] && data['@attr'].nowplaying == "true") ? true : false;
        this.mbid = data.mbid;
        this.url = data.url;
        this.image = (data.image) ? new LastfmImage(data.image) : "";
        this.dateListened = (data.date) ? new Date(data.date['#text']) : "";
        this.playCount = (data.playcount) ? data.playcount : "";
    };

    // set the 'class'
    var p = LastfmTrack.prototype;

    p.print = function()
    {
    	log('LastfmTrack: ');
    	log(' - Name: ' + this.name);
    	log(' - Artist: ' + this.artist);
    	log(' - Album: ' + this.album);
    	log(' - Streamable: ' + this.streamable);
    	log(' - Now playing: ' + this.nowPlaying);
    	log(' - mbid: ' + this.mbid);
    	log(' - url: ' + this.url);
    	log(' - Image: ');
    	log('   - Small: ' + this.image.small);
    	log('   - Medium: ' + this.image.medium);
    	log('   - Large: ' + this.image.large);
    	log('   - Extra-large: ' + this.image.extraLarge);
    	log(' - Date: ' + this.dateListened);
    };

    p.printShort = function()
    {
    	log(this.name + ' - ' + this.artist + ' listened on: ' + formatDate("D D# M Y HOU:MIN", this.dateListened));
    };

    window.LastfmTrack = LastfmTrack;
}());