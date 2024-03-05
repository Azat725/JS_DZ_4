function parseURL(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash
    };
}

console.log(parseURL("https://itstep.org/ua/about"));