---
layout: post
title:  "iCloud, Dropbox, symbolic links"
date:   2016-03-27 19:05:00 +0000
tags: 
- msc
- ux
---

I love Dropbox, but I was never a fan of having to keep my files inside that
"magic folder" of theirs. The home directory is where my top-level directory
structure should be rooted to, whether I want something in the cloud 
or not.

The solution -- symbolic links. I was skeptical whether they would work the
first time it occurred to me, but I've encountered no issues[^symlinks]. Ever
since, my local Dropbox folder has been a neat reflection of a list of
directories I want backed up, which only take up [a few bytes of space for the
name, the pointer reference, and some other
metadata](http://unix.stackexchange.com/a/2929). Add Selective Sync, and
you've got an order-lovers dream.

My set up recently passed the ultimate test when That Thing You Think Will
Never Happen To You happened to me. I had been working on a keynote file all
day, did a final review, exported it into PDF, and out of nowhere, all of my
work was gone. The newly exported PDF contained the version from around four
hours earlier, and the same was the case with the keynote file.

I ignored my heart sinking (the deadline was a few hours away) and told
myself it must've been a silly slight of hand: `Cmd+Z` `Cmd+Z` -- nothing.
`Cmd+R`? No newer versions; none in the revert history either. Wait, doesn't
OS X ship with that Time Machine thingie? "To set a location for backups,
please set up Time Machine". Shitshitshit.

Obviously I had been periodically saving the Keynote file. I was also storing
it on iCloud Drive. I don't normally use iCloud, but in this case I wanted the
.key file to be synced to my iPad. Sweet, I *must* be able to restore my work
from iCloud, right? Nope -- the latest version there was also from four hours
earlier.

## "Previous versions"

Funnily enough, it didn't actually occur to me until later when I was getting
ready to burn the midnight oil that my coursework folder was symlinked to
Dropbox. I suppose that's one negative side effect of not using Dropbox
as the actual root for your files: you tend to forget that it's there.
I had also never intended to use it as a version control service (I've always
seen it more as external storage) but there it was, that
wonderful menu item titled "Previous versions" which listed minute-by-minute
changes to my Keynote file, including that four hour gap that had somehow
slipped past iCloud.

I'm still not sure how my work disappeared -- it was late and I was relieved
to wrap things up. The one feasible explanation I can come up with is that at
some point four hours earlier I must have accidentally abandoned working on
the iCloud version, and made all new changes on a local file instead; I then
*somehow* overwrote the local copy with the older iCloud version. This would
explain the situation I ended up in, but I can't quite conceive the exact
chain of events required to get there: all I did was export my keynote to PDF.

As a technically aware computer user, what I take away from this is hightened
paranoia towards ensuring I back up my work, and increased attention to where
I store it and how I save it. As a layperson and consumer of cloud storage
solutions, I don't much care where I went wrong or whether it was my fault --
I expect these services to anticipate and fix my mistakes. Judging by that, I
will happily carry on paying Dropbox £7.99 a month; when it comes to iCloud,
first impressions matter, and mine resulted in an air of lasting skepticism.

[^symlinks]: 
    [Symlinks *within* your Dropbox folder aren't as
    safe](http://www.paulingraham.com/dropbox-and-symlinks.html)
