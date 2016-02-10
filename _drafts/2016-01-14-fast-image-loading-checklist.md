---
layout: post
title: "Image files on the modern web: a checklist"
date: 2016-01-14 21:10:00 +0000
categories:
- technical
tags:
- optimisation
---

The past few days I have been working on [a simple landing
page](http://monogram.me) made technically challenging only by the requirement
to display very large images (some hefty gifs, too, as the cherry on top).
When the graphic is the centerpiece of your site you do not want to compromise
on loading speed.

Here's what I noted down over the course of the project about optimising
images on the modern web; some of it has been relevant [for more than a
decade](http://alistapart.com/article/sprites), other points include tips that
I personally applied for the first time only just now, in 2016.

---

## Network performance

1. Fewer requests: use sprites
2. Conditional loading for non-retina screens
3. Use an image optimiser
4. Choose the correct format
5. Defer loading of images that are not immediately required
6. Serve different sizes of the same image, if necessary; avoid having images
at larger sizes than they are displayed.
7. srcset/picture

## Rendering performance

8. Consider progressive jpgs for photos
9. Animating image switching: use opacity and background-image

## Perceived performance

- Consider having a light-weight placeholder image until the actual one is
  loaded.
