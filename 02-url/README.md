# Absolute vs Relative URLs

## Idea

The context in which a URL is used affects how affects how it is interpreted. URL in an address bar doesn't have much context so we'll have to use `Absolute URL` (`https://google.com`). However if the URL is used in the context of a document, web browsers can fill the missing information in the URL allowing us to pass only some parts of the URL (`Relative URL`).

1. Schemere-relative URL: `//google.com/path/to/resource` - the web browser will use the same protocol as the one used to load the document.
2. Domain-relative URL: `/path/to/resource` - the web browser will use the protocol and same domain name used to load the resource.
3. Sub-resources: `another/resource` (`/path/to/another/resource`) - the web browser will use the same `path directory` that contains the current resource.
4. `../path/to` - similar to UNIX file system which goes back to a higher directory

## Application

Boot up `server.js` using
```
node server
```

Go to a address to IP address running the server (if same device then use loopback address). Go the the path `/path/to/file` as the entry point.
```
http://localhost/path/to/file
```

Observe the structure of the different URL and how they lead to the same server and access resource relative to the entry resource.
