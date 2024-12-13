# Parsing Web Components

## Idea

Fundamentally, a `web browser` is just a process that sends request 
(http, https, ftp, etc.) to the location specified in the `URL` and
displays the data obtained from that location.

What sets `web browsers` apart from simply just curling the `URL` is 
their ability to parse that data that is visually appealing to the user.
If a `web browser` gets an `HTML` file, it is able to render the file
according to its structure instead of showing it plain text.

When a `web browser` parses an html file, it does the following:

1. Parse the HTML file
2. If `<link>` or `<scripts>` tags are seen, it sends a request back
to location for the files in those tags.
3. Generates an in-memory `DOM` Tree from the HTML. a `CSSOM` tree for
the CSS, and parses JavaScript Files.
4. As these structures are build, the browser renders the visual
representation to the screen.

## Application
In the folder, there are 3 files

- `server.js`
- `index.html`
- `styles.css`

Makes sure that you have `node` to make this work.

The application have a file `server.js` that locally hosts/serves the
contents of the directory

1. Go to the `01-parsing` directory
2. Run
```
node server [--no-css]
``` 
3. Open a browser and go to
```
http://localhost:3000
```
This will serve the `index.html` file. 


Running the script without `--no-css` flag will make the server serve the
`CSS` file. Experiment on toggling this flag and observe the `node console`
for the requests.

## Observation
Upon observing the `node console`, when the browser request the request and parses the html file, it sends another request for the `CSS` file as it encounters the `<link>` tag. When the CSS file is fetched, the styles are 
applied to the document.

However, toggling the `--no-css` flag will not apply any css as it is not
being sent by the server.
