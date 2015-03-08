define('dataprimer',
    ['ko', 'datacontext', 'config'],
    function (ko, datacontext, config) {

        var logger = config.logger,

            fetch = function () {

                return $.Deferred(function (def) {

                    def.resolve();

                }).promise();
            };

        return {
            fetch: fetch
        };
    });