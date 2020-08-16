const checkLogin = (username, password) => {

    if (username === 'xing' && password === '123') {
        return true;
    }
    return false;
}

module.exports = {
    checkLogin
}