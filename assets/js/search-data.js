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
        "title": {{ doc.title | replace: '&colon;', ' ' | replace: '&newline;', ' ' | replace: '&hash;', ' ' | strip_html | jsonify }},
        "about": {{ doc.about | replace: '&colon;', ' ' | replace: '&newline;', ' ' | replace: '&hash;', ' ' | strip_html | jsonify }},
        "excerpt": {{ doc.excerpt | replace: '&colon;', ' ' | replace: '&newline;', ' ' | replace: '&hash;', ' ' | strip_html | jsonify }},
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }}
      } {%- unless forloop.last and l -%}, {%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}
]

// console.log(store);