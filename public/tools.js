// ----------------------------------------------------------------------------------------
// -- TOOLS -------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    if ($is_RedirectHTML && document.location.pathname.indexOf(".html") != -1 && document.location.host.indexOf("localhost") == -1) { 
        window.location.replace(document.location.href.replace(".html", "")); 
    }
});

async function API_Get(url, callback) {
    //try {
        req = await fetch(url);
        res = await req.json();
    //} catch { callback({}); }

    callback(res);
}

$Cookie = {
    get: function (c_name) {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++) {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name) { return unescape(y); }
        }
    },
    set: function (c_name, value, exdays)  {
        if (!exdays) { exdays = 365; }
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value + "; path=/";
    },
    delete: function (name) {  
        FW.Cookie.Set(name, "");
    }
};

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

$Session = {
    key: "User_Session",
    is_loaded: false,
    data: {},
    init: function (session_key) {
        if (session_key != undefined) { $Session.key = session_key; }
        $Session.load();
    },
    load: function () {
        saved_data = $Cookie.get($Session.key);
        if (saved_data == undefined) { saved_data = JSON.stringify({}); }
        saved_data = JSON.parse(saved_data);
        $Session.data = saved_data;
        $Session.is_loaded = true;
        //console.log($Session.data);
    },
    save: function () {
        $Cookie.set($Session.key, JSON.stringify($Session.data));
    },
    set: function (key, value) {
        $Session.data[key] = value;
        $Session.save();
    },
    get: function (key) {
        if (!$Session.is_loaded) { $Session.load(); }
        return $Session.data[key];
    }

}


var _gaq = _gaq || [];
_gaq.push(['_setAccount', "UA-24554015-2"]);
_gaq.push(['_trackPageview']);
(function () {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
function ClickTrack(inAction, inLabel) { _gaq.push(['_trackEvent', 'Click', inAction, inLabel]); };