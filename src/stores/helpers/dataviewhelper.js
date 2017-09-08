const toViewModel = function(data){
    var self = this;
    var options = data.options;
    var list = data.list;

    list.forEach(function(item, index) {
        item.image = options.imageroot + item.image;

        if (item.type == "mp3") {
            item.soundfile.mp3 = options.soundfileroot + item.soundfile.mp3;
        }
        else if(item.type=="youtube")
        {
            item.videoEmbedUrl = "http://www.youtube.com/embed/"+item.videoId;   
        }
        item.description = linkify(item.description);
        item.detailsUrl = "/"+index;
        item.recorddateformatted = formatDateString(item.recorddate);
    });

    return data;
}

const formatDateString = function(dateTimeString){
    var date = new Date(dateTimeString).toISOString().slice(0,10);
    var dateParse = date.split("-");
    return `${dateParse[2]}-${dateParse[1]}-${dateParse[0]}`;
}

const linkify = function(inputText){
    //http://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links
    
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank" rel="noopener">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank" rel="noopener">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

export { toViewModel };