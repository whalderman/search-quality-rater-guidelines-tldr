# TL;DR for Developers

Here we go over various optimizations that can (and should) be made to a site, as well as some tools that can be used.

<div class="note">

Disclaimer: The following content includes opinions and reasoning from the SEO professionals at [Bruce Clay Japan Inc.](https://bruceclay.jpn.com) These opinions and suggestions are an attempt to summarize Google's Quality Rater Guidelines, but are **not in any way** endorsed or backed by Google.

</div>

::: tip A Few Quick Tips

- Every page on the website must be created with the intention of **helping users**. Building pages to take advantage of users (deceptive ad placement, crypto mining) will negatively affect your site's ability to rank.

- Ensure that the `<h1>` tag on each page **accurately summarizes** the page's [main content](/qrg/page-quality-rating-guideline/2-understanding-webpages-and-websites.html#identifying-the-main-content-mc).

- The logo of a website (if used as a link) is used as a strong indicator of a website's home page.

- If your site or its content creators/authors receive any awards, show them off by linking to them from the site's "About" page.
:::

## HTTP/2 and Beyond

::: tip Implement newer protocols (HTTP/2, HTTP/3)
These newer protocols can significantly reduce the effects of latency by combining requests and making fewer roundtrips.
:::

Before you upgrade your web server, check the following:

1. **Your website must be using HTTPS.**  
HTTP/2 and newer cannot be implemented without HTTPS. Fortunately, making a site secure can be automated and done for free using a service like [LetsEncrypt](https://letsencrypt.org/).

2. **Your website must redirect from HTTP to HTTPS**.  
Ideally using a `301` redirect.

3. **Your web server must be capable of handling the newer protocol.**  
If your server matches the minimum version requirements listed below, you should be good to go.

   - Apache 2.4.12
   - NGINX 1.9.5 (without Server Push), 1.13.9 (with Server Push)
   - IIS 10.0
   - LiteSpeed 5.0

   For CDNs and less common servers, [see here](https://en.wikipedia.org/wiki/HTTP/2#Server_software).

## Pages That Should Not Be Indexed

::: warning Avoid indexing the following types of pages
Ideally, the page types below should not be indexed (and oftentimes should not even be crawlable).

- Pages with no content
- Receipt pages
- Search pages (e.g. [https://www.bruceclay.com/?s=seo&id=m](https://www.bruceclay.com/?s=seo&id=m))
- Q&A pages without any answers
- Pages giving dangerous advice
:::

Avoiding indexation simply requires the following meta tag to be added to the page.

``` html
<meta name='robots' content='noindex'>
```

If preferred, you could instead use the HTTP `X-Robots-Tag` header:

<div class="note">

This is the only way to remove non-XML documents (PDFs, etc.) from search results.

</div>

``` http
X-Robots-Tag: noindex
```

## Resource Caching

::: tip Setup cache-control
Setting the `cache-control` header for larger files (like images and fonts) can significantly increase the browsing speed for returning users.
:::

A couple of examples for cache-control directives are listed below:

### Apache / LiteSpeed

``` apacheconf
# in server config, virtual host, directory, or .htaccess
<filesMatch ".*">
    Header set Cache-Control "max-age=28800, public, no-transform"
</filesMatch>
<filesMatch ".(ico|jpe?g|png|gif)$">
    Header set Cache-Control "max-age=28800, public, no-transform"
</filesMatch>

# if using mod_expires
<IfModule mod_expires.c>
    ExpiresDefault "access plus 8 hours"
    ExpiresByType image/* "access plus 1 month"
</IfModule>
```

### NGINX

``` nginx
# all files
location ~* .*$ {
    expires 8h;
    add_header Cache-Control "public, no-transform";
}

# images
location ~* \.(png|jpe?g|gif|ico)$ {
    expires 30d;
    add_header Cache-Control "public, no-transform"
}
```

### IIS

We recommend going through the UI in this case.

## Image Optimization

::: tip Automate image optimization
Images are often a website's largest use of bandwidth — and bandwidth costs users money.

In most parts of the world, and especially when it comes to cell phones, users do not or cannot pay for "unlimited data." Save your users and yourself both time and money by implementing automated image optimization.
:::

Image optimization is one of the most difficult, yet most beneficial areas of optimization for many websites. Instead of image size and mobile responsiveness we focus on image format

::: tip Image ideals

- The size of an image rendered on-page should match it's intrinsic (original) size, especially larger images. If an image is larger than necessary, resize it.
- Use `.svg` for simple logos and designs.
- Use modern image formats like `.webp`.
- Instead of using animated images (`.gif`/`.apng`/`webp`), use a video format (`.webm`/`.mp4`) for signifcantly smaller file size and increased load speed.
:::

### GUI Tools

Some image compression/conversion tools and programs include:

- [E-Mage](https://emage.js.org/) (Mac OS, Windows, *nix)
  - Only does lossless compression
  - Easy to use
  - **Overwrites images**, though this shouldn't be a problem with only lossless conversions
- [XnConvert](https://www.xnview.com/en/xnconvert/) (Mac OS, Windows, *nix)
  - Highly configurable
  - More challenging to use
  - Can remove unnecessary image meta data
  - Able to convert images to modern formats like [.webp](https://developers.google.com/speed/webp/) and .jp2.

### Command-Line Tools and Libraries

Some example image optimization libraries include:

#### imagemin

[Imagemin](https://github.com/imagemin/imagemin) is a tool for automating the compression of a wide array of image file types. There are multiple compression plugins available (and referenced below) for every popular image format supported on the web.

#### WebP

- [project page](https://developers.google.com/speed/webp/)

#### JPEG

- [mozjpeg](https://github.com/mozilla/mozjpeg), ([imagemin plugin](https://github.com/imagemin/imagemin-mozjpeg))
- [jpegoptim](https://github.com/tjko/jpegoptim), ([imagemin plugin](https://github.com/imagemin/imagemin-jpegoptim))
- [jpegtran](https://jpegclub.org/reference/reference-sources/), ([imagemin plugin](https://github.com/imagemin/imagemin-jpegtran))

#### PNG

- [advpng](https://github.com/amadvance/advancecomp) (part of advancecomp), ([imagemin plugin](https://github.com/imagemin/imagemin-advpng))
- [optipng](http://optipng.sourceforge.net/), ([imagemin plugin](https://github.com/imagemin/imagemin-optipng))
- [pngcrush](https://pmt.sourceforge.io/pngcrush/), ([imagemin plugin](https://github.com/imagemin/imagemin-pngcrush))
- [zopfli](https://github.com/google/zopfli), ([imagemin plugin](https://github.com/imagemin/imagemin-zopfli))

#### SVG

- [svgo](https://github.com/svg/svgo), ([imagemin plugin](https://github.com/imagemin/imagemin-svgo))

#### GIF

- [gifsicle](https://github.com/kohler/gifsicle), ([imagemin plugin](https://github.com/imagemin/imagemin-gifsicle))
