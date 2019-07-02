# TL;DR for Developers

Here we go over various optimizations that can (and should) be made to a site, as well as some tools that can be used.

> Disclaimer: The following content includes opinions and reasoning from the SEO professionals at [Bruce Clay Japan Inc.](https://bruceclay.jpn.com) These opinions and suggestions attempt to summarize Google's Quality Rater Guidelines, but are **not in any way** endorsed or backed by Google.

## Understanding Webpages and Websites

Subdomains made for different purposes (like **finance**.yahoo.com and **sports**.yahoo.com) are more likely to be considered separate websites.

Every page on the website must be created with the intention of **helping users**. Building pages to take advantage of users (deceptive ad placement, crypto mining) will negatively affect the site's rank.

Ensure that the `<h1>` tag on each page **accurately summarizes** the page's [main content](/qrg/page-quality-rating-guideline/2-understanding-webpages-and-websites.html#identifying-the-main-content-mc).

::: tip Make sure your site's logo always links to the home page.
Google uses the logo of a website (if it is hyperlinked) as a strong indicator of a website's home page.
:::

For example, if you have a blog/documentation/FAQs/etc. on a separate subdomain, with a website logo pointing to the home page of the separate subdomain, Google is more likely to treat your subdomain and main site as separate -- which is rarely desired.

::: tip Show off those awards.
If your site has received any awards, show them off by linking to them on the site's "About" page.
:::

::: tip Automate the optimization of images.
Images are often a website's biggest use of bandwidth - and bandwidth costs users money.

Save yourself and your users' time by implementing automated image optimization.
:::

## Pages That Should Not Be Indexed

Ideally, the page types below should not be indexed (and oftentimes should not even be crawlable).

> 🤖 = meta robots inclusion/exclusion can be automated

- 🤖 Pages with no content
- 🤖 Receipt pages
- 🤖 Search pages (e.g. https://www.bruceclay.com/?s=seo&id=m)
- 🤖 Q&A pages without any answers
- Pages giving dangerous advice

Avoiding indexation simply requires the following meta tag to be added to the page.

``` html
<meta name='robots' content='noindex'>
```

If preferred, you could instead use the HTTP `X-Robots-Tag` header:

``` http
X-Robots-Tag: noindex
```

## Image Optimization

Image optimization is often one of the most tedious, most important areas of optimization.

### Image Optimization Libraries

Some example image optimization libraries include:

#### JPEG

- jpegoptim ([source](https://github.com/tjko/jpegoptim), [imagemin plugin](https://github.com/imagemin/imagemin-jpegoptim))
- jpegtran ([project page](https://jpegclub.org/reference/reference-sources/), [imagemin plugin](https://github.com/imagemin/imagemin-jpegtran))
- mozjpeg ([source](https://github.com/mozilla/mozjpeg), [imagemin plugin](https://github.com/imagemin/imagemin-mozjpeg))

#### PNG

- advpng ([part of advancecomp](https://github.com/amadvance/advancecomp), [imagemin plugin](https://github.com/imagemin/imagemin-advpng))
- optipng ([project page](http://optipng.sourceforge.net/), [imagemin plugin](https://github.com/imagemin/imagemin-optipng))
- pngcrush ([project page](https://pmt.sourceforge.io/pngcrush/), [imagemin plugin](https://github.com/imagemin/imagemin-pngcrush))
- pngout ([imagemin plugin](https://github.com/imagemin/imagemin-pngout))
- zopfli ([source](https://github.com/google/zopfli), [imagemin plugin](https://github.com/imagemin/imagemin-zopfli))

#### SVG

- svgo ([source](https://github.com/svg/svgo), [imagemin plugin](https://github.com/imagemin/imagemin-svgo))

#### GIF

- gifsicle ([source](https://github.com/kohler/gifsicle), [imagemin plugin](https://github.com/imagemin/imagemin-gifsicle))

### Image Optimization Tools and Programs

Some image optimization tools and programs include:

- [E-Mage](https://emage.js.org/) (Mac OS, Windows, *nix)
  - Only lossless compression
  - Easy to use
  - **Overwrites images**
- [XnConvert](https://www.xnview.com/en/xnconvert/) (Mac OS, Windows, *nix)
  - Highly configurable
  - More challenging to use
