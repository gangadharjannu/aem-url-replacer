# aem-url-replacer
Web extension for adding `.html` into URL which fixes broken navigation between pages in AEM environment.

## Problem
While navigating from one page to another page in AEM, pages are not being served properly as there was no `.html` extension added in hyper links.

As a workaround we had to manually add `.html` in the url and load the page to continue which is quite frustrating.

## Workaround with web extension
So I created a web extension (now only for chrome, later will port this into firefox also) to capture the URL navigation and add `.html` extension when the URL matches with AEM instance


### TODO:

- [ ] Use URL filter instead of manually filtering the URL
- [ ] Port this extension into firefox
  