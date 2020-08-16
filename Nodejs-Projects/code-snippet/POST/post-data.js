//sync way
if (method === 'POST' && req.path === '/api/blog/new') {
    let postData = '';
    req.on('data', chunk => {
        postData += chunk.toString();
    })
    req.on('end', () => {
        res.end(
            JSON.stringify(postData)
        )
    })
    return {
        msg: 'Create a new blog'
    }
}

//async way