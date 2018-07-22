//--ボム無しUTF8----------------
//--PlayAudioSet--------------------------------------------------------
//--FirefoxIE8判別----------------------------
var myAudioType = '';
try {
	var myAudioCheck = new Audio();
	if (myAudioCheck.canPlayType) {
		if (myAudioCheck.canPlayType('audio/mpeg') != "") {
			myAudioType = 'mp3';
		}
		else {
			if (myAudioCheck.canPlayType('audio/ogg') != "") {
				//myAudioType = 'ogg';
				myAudioType = '';
				//--oggもFlashを書き出す---
			}
			else {
				myAudioType = '';
				//--Flashを書き出す---
			}
		}
	}
	else {
		throw null;
		//--例外を発生(HTML5未対応)---
	}
} catch (e) {
	//例外をキャッチ--
	myAudioType = '';
}
//--FirefoxIE8判別----------------------------
//--変数定義----------------------------------
if (myAudioType != '') {
	var myAudio = new Audio();
	var prePlayed = '';
	var playingID = '';
	var playingBotan = '';
	var errorBotan = '';
	var spbtnMM_start = 'auparts/speaker30w1.gif';
	var spbtnMM_parapara = 'auparts/speaker30w2.gif';
	var spbtnMM_gray = 'auparts/speaker30w0.gif';
}
//--変数定義----------------------------------
//--END Shori---------------------------------
if (myAudioType != '') {
	myAudio.addEventListener('ended', function() {
		var myEndedID = playingID;
		var myEndedBtn = document.getElementById(myEndedID);
		myEndedBtn.src = playingBotan;
		myAudio.pause();
		myAudio.currentTime = 0;
		playingID = '';
		playingBotan = '';
	}, false);
}
//--END Shori---------------------------------
//--Error Shori-------------------------------
if (myAudioType != '') {
	myAudio.addEventListener('error', function() {
		try {
		  if (myAudio.paused) {
		  	//--
		  }
		  else {
		  	throw null;
		  }
		} catch (e) {
			var mySPID = playingID;
			var mySPBtn = document.getElementById(mySPID);
			mySPBtn.src = errorBotan;
			myAudio.pause();
			playingID = '';
			playingBotan = '';
			prePlayed = '';
		}
	}, true);
}
//--Error Shori-------------------------------
//--PlaySection-------------------------------
function playAudio50(myMP3, myID) {
	errorBotan = spbtnMM_gray;
	var myStartBotan = spbtnMM_start;
	if (myAudioType == 'mp3') {
		var myMP3File = 'au50on/' + myMP3;
	}
	else if (myAudioType == 'ogg') {
		myMP3 = myMP3.replace('mp3', 'ogg');
		var myMP3File = 'au50onogg/' + myMP3;
	}
	else {
		//alert('We are sorry. Your browser cannot play our audio');
		var myPass = 'au50on/';
		var myFile = 'au50on/' + myMP3;
		var myFlash = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8.0.22.0" width="30" height="24" id="ccbar" align="left">';
		var myFlash = myFlash +'<param name="allowScriptAccess" value="sameDomain" />';
		var myFlash = myFlash +'<param name="movie" value="' + myPass + 'aaausp30watp.swf?myAudioFile=' + myFile + '" />';
		var myFlash = myFlash + '<param name="quality" value="high" />';
		var myFlash = myFlash + '<param name="bgcolor" value="#FFFFFF" />';
		var myFlash = myFlash + '<embed src="' + myPass + 'aaausp30watp.swf?myAudioFile=' + myFile + '" quality="high" bgcolor="#FFFFFF" width="30" height="24" name="ccbar" align="left" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" />';
		var myFlash = myFlash +'</object>';
		myIDXP = 'xp_' + myID;
		document.getElementById(myIDXP).innerHTML = myFlash;
	}
	if (myAudioType != '') {
		if (myAudio.paused) {
			var mySPID = myID;
			var mySPBtn = document.getElementById(mySPID);
			mySPBtn.src = spbtnMM_parapara;
			if (prePlayed != myMP3) {
				myAudio.src = myMP3File;
				//myAudio.load();
				myAudio.autoplay = false;
				myAudio.loop = false;
			}
			myAudio.play();
			prePlayed = myMP3;
			playingID = myID;
			playingBotan = myStartBotan;
		}
		else {
			var mySPID = playingID;
			var mySPBtn = document.getElementById(mySPID);
			mySPBtn.src = playingBotan;
			myAudio.pause();
			myAudio.currentTime = 0;
			if (playingID == myID) {
				playingID = '';
				playingBotan = '';
			}
			else if (playingID != myID) {
				var mySPID = myID;
				var mySPBtn = document.getElementById(mySPID);
				mySPBtn.src = spbtnMM_parapara;
				myAudio.src = myMP3File;
				//myAudio.load();
				myAudio.autoplay = false;
				myAudio.loop = false;
				myAudio.play();
				prePlayed = myMP3;
				playingID = myID;
				playingBotan = myStartBotan;
			}
		}
	}
}
//--PlayAudioSet--------------------------------------------------------
