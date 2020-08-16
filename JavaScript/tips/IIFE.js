// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// 1 .
(function () {
    console.log('I can run as IIFE...')
})();

/* 

why this follow cannot run as IIFE ?

function foo() { }()

*/
// 2.
!function foo() { console.log('I can run ...')}()