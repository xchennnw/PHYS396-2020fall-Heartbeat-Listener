requirejs.config({
    base_url: "js",
    paths: {
        "pouchdb": "./node_modules/pouchdb/dist/pouchdb",
        "pouchdbA": "./node_modules/pouchdb-authentication/dist/pouchdb.authentication",
        "luxon": "./node_modules/luxon/build/amd/luxon",
        "slow": "js/lib/slow_control"
    }
});