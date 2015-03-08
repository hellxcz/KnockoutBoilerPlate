define('dataservice.awesome',
    ['amplify'],
    function (amplify) {
        var
            init = function() {
                amplify.request.define('data', function(settings) {
                    settings.success(
                        [
                            {
                                id: 1,
                                data: 'some data 1'
                            }, {
                                id: 2,
                                data: 'some data 2'
                            }
                        ]
                    );
                });
            };


        var getAwesomeData = function(callbacks) {
            return amplify.request({
                resourceId: 'data',
                success: callbacks.success,
                error: callbacks.error
            });
        }

        init();

        return {
            getAwesomeData: getAwesomeData
        }
    });