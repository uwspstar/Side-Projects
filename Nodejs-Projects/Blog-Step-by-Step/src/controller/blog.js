const getList = (author, keyword) => {
    // mock data Date.now()
    return [
        {
            id: 1,
            title: "TA",
            content: "CA",
            createTime: 1597525543764,
            author: 'XingWang'
        },
        {
            id: 2,
            title: "TB",
            content: "CB",
            createTime: 1597525617425,
            author: 'SunJoo'
        }

    ];
}
const getDetail = (id) => {
    return {
        id: 1,
        title: "TA",
        content: "CA",
        createTime: 1597525543764,
        author: 'XingWang'
    }
}

module.exports = {
    getList,
    getDetail
}