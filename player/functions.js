/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		//this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		//this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		//this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		//this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [
		{
			"name": "钢铁洪流进行曲",
			"artist": "中国人民解放军联合军乐团",
			"album": "庆祝中华人民共和国成立70周年阅兵式",
			"url": "songs/钢铁洪流进行曲.mp3",
			"cover_art_url": "album-art/album.jpg"
		},
		{
			"name": "东风浩荡进行曲",
			"artist": "中国人民解放军联合军乐团",
			"album": "庆祝中华人民共和国成立70周年阅兵式",
			"url": "songs/东风浩荡进行曲.mp3",
			"cover_art_url": "album-art/album.jpg"
		},
		{
			"name": "雄鹰出击进行曲",
			"artist": "中国人民解放军联合军乐团",
			"album": "庆祝中华人民共和国成立70周年阅兵式",
			"url": "songs/雄鹰出击进行曲.mp3",
			"cover_art_url": "album-art/album.jpg"
		},
		{
			"name": "冲上云霄",
			"artist": "中国人民解放军联合军乐团",
			"album": "庆祝中华人民共和国成立70周年阅兵式",
			"url": "songs/冲上云霄.mp3",
			"cover_art_url": "album-art/album.jpg"
		}
	]
});