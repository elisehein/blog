---
layout: post
title:  "Tag usage overviews in Jekyll"
date:   2016-03-28 10:00:00 +0000
tags: 
- lifehacks
---

This blog is my first time for making use of Jekyll, and I'm loving it so far.
One thing I was surprised to find though was that apparently there is no
straightforward way to list all of the tags I've used for my posts. I'm not
talking about the user-facing tag directory here -- there are plenty of
plugins for that, and it's not difficult to write your own template.

Instead, what I'm truly missing is a quick command to run that
would give me an overview of the tags I've been using. I find that when
writing a new post, I always struggle with tagging, and sometimes end up with
duplicate tags using alternate phrasing.

I came up with a quick and dirty first version of a command line tool that
does exactly that. It loops through all posts, parses the YAML front matter
with [`shyaml`](https://github.com/0k/shyaml), and finally orders and sorts tags
with `uniq`.

{% gist elisehein/c879a12c108970142ae0 %}

An example of the output:

    $ bin/alltags.sh
    3  msc
    2  language
    2  hci research methods
    2  dev ux
    1  ux
    1  prototyping
    1  lifehacks
    1  books
