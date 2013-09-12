/**
 * Contains information about a Last.fm track's album art
 */

(function(){

    /**
     * Constructor
     */
    var LastfmImage = function(data)
    {

        this.small = (data[0]) ? data[0]['#text'] : "";
        this.medium = (data[1]) ? data[1]['#text'] : "";
        this.large = (data[2]) ? data[2]['#text'] : "";
        this.extraLarge = (data[3]) ? data[3]['#text'] : "";
    };

    // set the 'class'
    var p = LastfmImage.prototype;

    window.LastfmImage = LastfmImage;
}());