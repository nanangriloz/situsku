var postTitle=new Array();var postUrl=new
 Array();var postMp3=new Array();var postDate=new Array();var postBaru=new Array();var sortBy="titleasc";var 
 tocLoaded=false;var numChars=250;var postFilter="";var numberfeed=0;function loadtoc(a){function b()
 {if("entry" in a.feed){var d=a.feed.entry.length;numberfeed=d;ii=0;for(var h=0;h<d;h++
 ){var n=a.feed.entry[h];var e=n.title.$t;var
 m=n.published.$t.substring(0,10);var j;for(var g=0;g<n.link.length;g++)
	 
