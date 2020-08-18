// get cookie expire date
const getCookieExpire = () => {
    let d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    console.log('cookie expire :', d.toGMTString());
    return d.toGMTString();
}