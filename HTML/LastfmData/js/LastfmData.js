/**
 * LastfmData
 * Author: Thomas Taylor
 * Created: 15/12/2012
 * 
 * Pulls in Last.fm data
 * 
 * Create new object passing the user, and div to populate
 * methods allow custom data length where apt.
 * Methods then auto populate the div with the relevant data
 * 
 */

(function(){

    // Constructor 
    var LastfmData = function(user, div)
    {
		this.user = user;
	    this.div = div;
	    this.ready = false;
    };

    // set the 'class'
    var p = LastfmData.prototype;

    var _apiRootURL = "http://ws.audioscrobbler.com/2.0/";
    var _apiKey = "76a87b2b331aab47ebdc4f4994cd8d85";

    // the supported API methods
    p.getCurrentTrack = function() { this.requestData('user.getRecentTracks', 1); };
    p.getRecentTracks = function(noOfResults) { this.requestData('user.getRecentTracks', noOfResults); };
    p.getTopAlbums = function(noOfResults) { this.requestData('user.getTopAlbums', noOfResults); };
    p.getTopArtists = function(noOfResults) { this.requestData('user.getTopArtists', noOfResults); };
    p.getTopTracks = function(noOfResults) { this.requestData('user.getTopTracks', noOfResults); };
    p.getWeeklyArtistChart = function(noOfResults) { this.requestData('user.getWeeklyArtistChart', noOfResults); };
    p.getWeeklyTrackChart = function(noOfResults) { this.requestData('user.getWeeklyTrackChart', noOfResults); };
    
    /**
     *  yet to implement...
     */
    //p.getLovedTracks = function(noOfResults) { this.requestData('user.getLovedTracks', noOfResults); };
    //p.getPlaylists = function(noOfResults) { this.requestData('user.getPlaylists', noOfResults); };
    //p.getRecommendedArtists = function(noOfResults) { this.requestData('user.getRecommendedArtists', noOfResults); };
    //p.getWeeklyAlbumChart = function(noOfResults) { this.requestData('user.getWeeklyAlbumChart', noOfResults); };
    
    p.requestData = function(method, noOfResults)
    {
    	this.noOfResults = noOfResults;
    	var api = _apiRootURL + '?method=' + method + '&user=' + this.user + '&api_key=' + _apiKey + '&limit=' + noOfResults + '&format=json&callback=?';    	
    	//log('LastfmData.requestData: ' + api);
    	$.getJSON(api, jQuery.proxy(this.onJSONLoaded, this));
    };

    p.onJSONLoaded = function(json)
    {	
	    if(!json.error)
	    {
	    	var html = '';
	    	
	    	if(json.recenttracks) 
	    	{
	    		if(this.noOfResults == 1) html += this.currentTrackHandler(json.recenttracks.track);
	    		else html += this.recentTracksHandler(json.recenttracks.track);
    		}
	    	if(json.topartists) html += this.topArtistsHandler(json.topartists.artist);
	    	if(json.topalbums) html += this.topAlbumsHandler(json.topalbums.album);
	    	if(json.toptracks) html += this.topTracksHandler(json.toptracks.track);
	    	if(json.weeklyartistchart) html += this.weeklyArtistChartHandler(json.weeklyartistchart.artist);
	    	if(json.weeklytrackchart) html += this.weeklyTrackChartHandler(json.weeklytrackchart.track);
	    	
	    	this.div.innerHTML += html;
	    	
	    	if(html != '<ul></ul>' && html != '') 
	    	{
	    		this.ready = true;
	    		$(this).trigger('onDataReady');
	    	}
	    }
	    else
	    {
	    	log('Error ' + json.error + ': ' + json.message);
	    }
	};
	
	p.currentTrackHandler = function(data)
	{
    	var html = '';
    	
    	var track = new LastfmTrack((data.length) ? data[0] : data);    		
    	//if(track.nowPlaying) html += '<li>' + track.name + ' - ' + track.artist + '</li>';
    	if(track.nowPlaying) html += track.name + ' - ' + track.artist;
    	
    	return html;
	};
	
	p.recentTracksHandler = function(data)
	{
    	var html = '<ul>';
    	
    	if(!data.length) 
    	{
    		var track = new LastfmTrack(data);    		
    		html += '<li>' + track.name + ' - ' + track.artist + '</li>';
    	}
    	else
    	{
    		for(var i = 0; i < data.length; i++) 
    		{
    			var track = new LastfmTrack(data[i]);
    			html += '<li>' + track.name + ' - ' + track.artist + '</li>';
			}
    	}
    	
    	return html + '</ul>';
	};
	
	p.topArtistsHandler = function(data)
	{
    	var html = '<ul>';
    	
    	if(!data.length) 
    	{
    		html += '<li>' + data.name + '</li>';
    	}
    	else
    	{
    		for(var i = 0; i < data.length; i++) 
    			html += '<li>' + data[i].name + ' (' + data[i].playcount + ' plays)</li>';
    	}
    	
    	return html + '</ul>';   	
	};
	
	p.topAlbumsHandler = function(data)
	{
    	var html = '<ul>';
    	
    	if(!data.length) 
    	{
    		html += '<li>' + data.name + '</li>';
    	}
    	else
    	{
    		for(var i = 0; i < data.length; i++) 
    			html += '<li>' + data[i].name + ' - ' + data[i].artist.name + ' (' + data[i].playcount + ' plays)</li>';
    	}
    	
    	return html + '</ul>';   	
	};
	
	p.topTracksHandler = function(data)
	{
    	var html = '<ul>';
    	
    	if(!data.length) 
    	{
    		var track = new LastfmTrack(data);    		
    		html += '<li>' + track.name + ' - ' + track.artist + track.playCount + ' plays)</li>';
    	}
    	else
    	{
    		for(var i = 0; i < data.length; i++) 
    		{
    			var track = new LastfmTrack(data[i]);
    			html += '<li>' + track.name + ' - ' + track.artist + ' (' + track.playCount + ' plays)</li>';
			}
    	}
    	
    	return html + '</ul>';   	
	};
	
	p.weeklyArtistChartHandler = function(data)
	{
    	var html = '<ul>';
    	
    	if(!data.length) 
    	{
    		html += '<li>' + data.name + '</li>';
    	}
    	else
    	{
    		for(var i = 0; i < this.noOfResults; i++) 
    			html += '<li>' + data[i].name + ' (' + data[i].playcount + ' plays)</li>';
    	}
    	
    	return html + '</ul>';   	
	};
		
	p.weeklyTrackChartHandler = function(data)
	{
    	var html = '<ul>';
    	
    	if(!data.length) 
    	{
    		var track = new LastfmTrack(data);    		
    		html += '<li>' + track.name + ' - ' + track.artist + track.playCount + ' plays)</li>';
    	}
    	else
    	{
    		for(var i = 0; i < this.noOfResults; i++) 
    		{
    			var track = new LastfmTrack(data[i]);
    			html += '<li>' + track.name + ' - ' + track.artist + ' (' + track.playCount + ' plays)</li>';
			}
    	}
    	
    	return html + '</ul>';   	
	};

    window.LastfmData = LastfmData;
}());