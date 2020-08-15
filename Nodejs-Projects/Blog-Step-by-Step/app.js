const serverHandle = (req, res) => {
    //step1 : setHeader
    res.setHeader('Content-type', 'application/json');

    const resData = {};

    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serverHandle;