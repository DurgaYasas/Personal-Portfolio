# World map source

`world-map.ts` contains country outlines derived from Natural Earth's public-domain 1:110m Admin 0 Countries dataset:

https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson

Natural Earth data is public domain: https://www.naturalearthdata.com/about/terms-of-use/

Coordinates use an equirectangular projection into a 1000 × 440 SVG viewBox, rounded to a tenth of a viewBox unit. Antarctica is omitted. The map is a geographic navigation aid, not a representation of work in every country. Singapore is too small to appear in this dataset and is represented by a location marker. The SVG is rendered on the server so the geometry is not included in the interactive component's JavaScript bundle.
