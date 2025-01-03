# Dynamic Server

## Idea

Using a `Static Web Server` is sometimes limited because it only allows us to serve hosted files as they are. That is, we can only serve content that are static in nature. However, sometimes we may need to serve dynamic content according to our users. `Dynamic Servers` comes in handy for this use case.

A `Dynamic Web Server` is usually composed of an `Application Server` to process business logic and `Database` to store and retrieve data. For example, if we want a user to access a website containing a `header` with their name, the following steps will happen.

1. The user sends a request to the `Web server` using a browser passing in their `user id`.
2. The `Web server` forwards the request to the `Application Server`.
3. The `Application Server` performs some processing on the `user id` before getting the `user` details corresponding to the `id` from the `Database`.
4. The `Database` returns the `user details`
5. The `Application Server` generates an HTML document with the name of the user and returns that document to the `Web Server`.
6. The `Web Server` sends that document to the requesting user.

## Application

There are `three` files for this modules:

1. `databse.js`
    - Mocks a simple `Database` with `Users` Table,
2. `application-server.js` 
    - Simulates an `Application Server`
    - This uses HTTP for communicating, but `Application Server` could be protocol-agnostic.
    - Input: an `id` query parameter.
    - Gets the name of the `user` corresponding to the `id` and generate the `HTML` file with `Hello <user-name>`.
3. `web-server.js`
    - What sets `Web Servers` from `Application Servers` is that they only focus on handling HTTP requests and routing, can be used for load balancing etc.
    - This program simply forwards the HTTP request from the `client` to the `Application Server` (to generate dynamic content).

To use this example, run the three program in this order:

```
databse.js
application-server.js
web-server.js
```
