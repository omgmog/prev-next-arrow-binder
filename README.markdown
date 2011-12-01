##About the prev/next arrow key binder

This is a userscript for Google Chrome (it might work with Firefox/Greasemonkey but I haven't tested). It binds the left/right keys to click on prev/next links.

This is especially useful for browsing comic archives, image galleries and blogs.

The script uses jQuery 1.6.2 hosted on the Google Libraries API in noConflict mode, so it shouldn't mess with any existing instances of jQuery on sites.

The following prev/next selectors will work:

    a[rel="prev"],a[title="Previous"],a[title="Prev"],a[title="prev"],a[title="previous"],a[class="navi-prev"]
    a[rel="next"],a[title="Next"],a[title="next"],a[class="navi-next"]
    
If you want to add more selectors it's easy to.

Some sites this works nicely on:

* [Cyanide & Happiness](http://www.explosm.net/comics)
* [Scenes from a Multiverse](http://amultiverse.com/)
* [Poorly Drawn Lines](http://poorlydrawnlines.com/comic/)
* [Penny Arcade](http://penny-arcade.com/comic/)

If more sites would use more sane/semantic markup for their navigation, this could easily work on a lot of other sites too.

##Installation

1. Download the script - https://github.com/omgmog/prev-next-arrow-binder/raw/master/prevnextarrows.user.js
2. Install the script
3. Go to a comic website
4. Press your left/right keys to navigate
5. That's it!