    It is important note that 'type="module"' is a must, and the html must be run on some local sever
    Module has its features: 
        1. Module always use 'strict mode' 
        2.Modules can't not share variables with each other except they use `export` & `import` inside them
    We can use several modules with script[type="module"] tags, they all have acccess to the windows objects and vars
    If the exporter (should be a top-level-moduel [a module contains all modules, initialize vars for others])
    have been changed, all impoters will get the updated vars
    IF the second importer changed the vars, then the third one get the updated ones, and so on.
    In the tags of `type="module"` ,the keyword `this` will be refer to `undefined`
    scripts inside `type="module"` always `difer`, they always run after the HTML is ready