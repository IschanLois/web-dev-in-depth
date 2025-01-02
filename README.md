# Web Dev In Depth

A repo compiling my notes and practical exercises on studying fundamental web development (mostly vanilla html/css)

## Topics

1. 01-parsing
   - Covers how web browsers parses web components (html/css/javascript)

## Resources

https://developer.mozilla.org/en-US/docs/Learn/

## Terms

1. **Internet**
   - Is simply an infrastructure of a large interconnected networks.
2. **Web**
   - A service built on top of the `Internet`.
   - A service where web servers sends documents that are understandable by `web clients/browsers`
   - It is important to note that there are more service built on top of the `Internet`. Since the internet is just a big network, we can send data apart from web documents.
3. **Web Page**
   - A document that are understood by `web browser` (HTML documents)
4. **Web Site**
   - A group of of `web pages` access through the same `domain`
5. **Web Server**
   - A machine that host websites.
   - Basically, where web data comes from.
6. **Domain names**
   - Human readable-address (for IP address) for any web server available on the internet.
   - **Top-Level Domain**
      - The general purpose of the service behind the domain name.
      - `.com`, `.org`, `.edu`
   - **Label** -> Subdomains
7. **URL**
   - Used to identify a specific `web resource`
   - `Protocol` - Protocol for resource sharing
   - `Authority` -> Domain Name and Port
   - `Path` -> Used to be a physical file location on the server, now just an abstraction for locating a resources.
   - `Parameters` -> Provide extra values to web servers
   - `Anchor` -> Bookmark to a part of a resource (a time bookmark for videos or a section bookmark for html documents).
      - The `fragment identifier` (after `#`) is not sent to the server (responsibility of the browser)
```
Protocol://DomainName:Port/Path?Parameter=value#Anchor
```
   

