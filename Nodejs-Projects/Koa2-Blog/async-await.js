async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();

// await won’t work in the top-level code
// But we can wrap it into an anonymous async function, like this:

(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
})();


// Error handling
async function f() {

    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch (err) {
        // catches errors both in fetch and response.json
        alert(err);
    }
}

f()