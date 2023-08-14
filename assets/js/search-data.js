---
layout: null
sitemap: false
---

var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp: 'doc', 'doc.search != false' -%}
    {%- for doc in docs -%}
      // {% assign _excerpt = doc.excerpt | replace: "#", ""  | strip_html | strip_newlines | split: " " %}
      {
        "type": {{ doc.type | jsonify }},
        "title": {{ doc.title | jsonify }},
        "excerpt": {{ doc.excerpt | strip_html | strip_newlines | jsonify }},
        // "_excerpt": {{ doc._excerpt | strip_html | strip_newlines | jsonify }},
        "about": {{ doc.excerpt | strip_html | strip_newlines | jsonify }},
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }}
      } {%- unless forloop.last and l -%}, {%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}
]

console.log(store);