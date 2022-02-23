// ----------------------------------------------------------------------------------------
// -- TOOLS -------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    if ($is_RedirectHTML && document.location.pathname.indexOf(".html") != -1 && document.location.host.indexOf("localhost") == -1) { 
        window.location.replace(document.location.href.replace(".html", "")); 
    }
    loadAds();
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

function loadAds() {
    page = "";
    for (slug of document.location.pathname.split("/")) {
        if (slug != "") { page = slug.replace(".html", ""); }
    }
    if ("faucet|garden".indexOf(page) == -1) { return false; }
    if ($Cookie.get("pop-ads") == "1") { return false; }
    $Cookie.set("pop-ads", "1", 2);

    H = `
    <div id="pop-ads" style="position:absolute; top:0; left:0; right:0; background-color:#333333EF; color:#FFF; font-size:20px; z-index:10000;">
        <div style="padding:5% 0;">
            <div style="max-width:80%; margin:0 auto;">
                <h2 style="font-size:36px; color:#1998ff; line-height:1.0;">Thanks for using my free tools!</h2>
                <p style="margin:10px 0 20px 0; line-height:1.3;">If you use them on a daily basis, please consider a small donation, it would be much appreciated and a good way to support my work! &nbsp;<i class="fas fa-grin" style="color:#FFF;"></i></p>
                <div id="but-copy-pop-ads" style="display:block; cursor:pointer; background-color:#2271b1; color:#FFF; border-radius:10px; padding:10px 20px; overflow:hidden;line-height:1.25;">Click here copy &nbsp;<i class="far fa-copy"></i><div>0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08</div></div>
                <p style="margin:20px 0; line-height:1.3;">Please <i class="fab fa-telegram-plane"></i> me <a href="https://t.me/LukeCharters" style="color:#1998ff; text-decoration:none;">@LukeCharters</a> so that I may thank you.</p>
                <div style="text-align:right;"> <div id="but-close-pop-ads" style="display:inline-block; cursor:pointer; background-color:#747474; color:#FFF; border-radius:10px; padding:10px 20px; overflow:hidden;">CLOSE</div> </div>
            </div>
        </div>
    </div>
    `;
    $("body").prepend(H);
    $("#but-copy-pop-ads").click(function () {
        wallet = "0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08";
        navigator.clipboard.writeText(wallet);
        ClickTrack("Copy", "Wallet");
        alert("Thanks for your support!")
    });
    $("#but-close-pop-ads").click(function () { 
        $("#pop-ads").fadeOut(); 
        ClickTrack("Close", "Pop-Ads");
    });
    window.scrollTo(0, 0);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', "UA-24554015-2"]);
_gaq.push(['_trackPageview']);
(function () {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = 'https://ssl.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
function ClickTrack(inAction, inLabel) { _gaq.push(['_trackEvent', 'Click', inAction, inLabel]); };