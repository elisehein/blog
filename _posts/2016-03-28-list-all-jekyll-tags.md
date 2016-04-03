---
layout: post
title:  "Tag overviews in Jekyll"
date:   2016-03-28 10:00:00 +0000
tags: 
- lifehacks
---

This blog is my first time for making use of Jekyll, and I'm loving it so far.
One thing I was surprised to find though was that apparently there is no
straightforward way to list all of the tags I've used for my posts. I'm not
talking about the user-facing tag directory here -- there are plenty of
plugins for that, and it's not difficult to write your own template.

Instead, what I'm truly missing is a quick command to run that would give me
an overview of my tag usage. When writing a new post, I struggle with tagging:
sometimes I end up with alternate phrasing for semantically equivalent tags,
other times I forget about the tags I've been using for a specific theme
entirely. Having a condensed list in front of me is a good first solution.

I wrote a quick and dirty command line tool that does exactly that. It loops
through all posts, parses the YAML front matter with
[`shyaml`](https://github.com/0k/shyaml), and finally orders and sorts tags
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
