FlexVara US — images folder
===========================

Drop your nine image files into this folder, using these exact filenames.
The page references these and nothing else; no other image file is used
anywhere in the site.

File                                  Used where                 Rendered box    Suggested source size
------------------------------------  -------------------------  --------------  ---------------------
flexvara-3-bottles-guarantee.webp     Hero (LCP) + 3-bottle card  520 x 520 (1:1)  1040 x 1040
flexvara-6-bottles-guarantee.webp     6-bottle package card       420 x 420 (1:1)   840 x 840
flexvara-2-bottles-guarantee.webp     2-bottle package card       360 x 360 (1:1)   720 x 720
flexvara-review-1.webp                Product photos, first       520 x 390 (4:3)  1040 x 780
flexvara-review-2.webp                Product photos, second      520 x 390 (4:3)  1040 x 780
flexvara-review-3.webp                Product photos, third       520 x 390 (4:3)  1040 x 780
flexvara-guarantee.webp               Guarantee section seal      360 x 360 (1:1)   720 x 720
flexvara-bonus-1.webp                 Bonus section               420 x 560 (3:4)   840 x 1120
favicon.png                           Browser tab + app icon      any              512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   That means your real files do NOT have to match the ratios above exactly:
   nothing will stretch or crop, and the layout will not shift while images
   load (cumulative layout shift stays at zero). Matching the ratio simply
   makes the box fit the artwork more tightly.

2. flexvara-3-bottles-guarantee.webp is the Largest Contentful Paint image.
   It is preloaded with fetchpriority="high" in the page head, so keep it
   lean — ideally under 60 KB. Every other image is lazy-loaded.

3. Keep the .webp extension. The filenames are referenced in index.html,
   sitemap.xml and the Open Graph / Twitter meta tags; renaming one means
   editing all three.

4. favicon.png should be a square PNG. 512 x 512 covers both the browser
   tab and the Android home-screen icon declared in manifest.json.

5. Export WebP at quality 78-82. Above that the file size climbs without a
   visible gain at these rendered sizes.
