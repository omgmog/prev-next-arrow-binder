// ==UserScript==
// @name           prev/next with left/right arrows on sites
// @namespace      http://omgmog.net
// @description    Binds left/right arrow keys to click on urls with rel="prev" and rel="next" -- useful for navigating comic sites and image galleries
// @include        http://*
// @version        1.0
// ==/UserScript==
function addJQuery(a){var b=document.createElement("script");b.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js");b.addEventListener("load",function(){var b=document.createElement("script");b.textContent="("+a.toString()+")();";document.body.appendChild(b)},false);document.body.appendChild(b)}

function main(){
    jQuery.noConflict();
    jQuery(document).ready(function() {
        // Code that uses jQuery's $ can follow here.
        jQuery(document).keydown(function(e){
            var url =""
            if(e.keyCode == 37) { 
                url = jQuery('a[rel="prev"],a[title="Previous"],a[title="Prev"],a[title="prev"],a[title="previous"],a[class="navi-prev"]').attr('href');
            }
            if(e.keyCode == 39) {
                url = jQuery('a[rel="next"],a[title="Next"],a[title="next"],a[class="navi-next"]').attr('href');
            }
            if(url && url!="" && url!=undefined) window.location = url;
        });
});
};
addJQuery(main);