---
layout: post
title: "More accessible cubic bezier functions"
date: 2015-12-21 21:08:00 +0000
categories:
- technical
tags:
- dev ux
---

I haven't been involved in a lot of web development for the better half of
2015, having been <del>stuck with</del> enjoying XCode and Objective C instead.
When I finally discovered the new built-in cubic bezier editor in Chrome
DevTools (released earlier this year), I felt more than a little late to the
party.

![The cubix bezier editor in action](/assets/cubicbezier.gif)

The feature is simple, conceptually no different than, say, the colour
picker: it indicates your current choice of easing function, and allows you to
manipulate it in real time. But the vocal appreciation of the community shows
what difference a bit of visual feedback can make, especially in the case of
concepts like cubic bezier formulae that are notoriously difficult to grasp
intuitively. The tool not only allows for more efficient programming, but
helps to internalise an aspect of animation design that all developers will no
doubt be working more and more with in the future. 

This makes me happy: we seem to be getting closer to what Bret Victor
describes in his talk [Inventing on Principle](https://vimeo.com/36579366).
