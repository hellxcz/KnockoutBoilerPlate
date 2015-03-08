define('route-config',
    ['config', 'router', 'vm'],
    function (config, router, vm) {
        var
            logger = config.logger,

            register = function () {

                var routeData = [

                    // Sessions routes
                    {
                        view: config.viewIds.myawesome,
                        routes:
                        [
                            {
                                isDefault: true,
                                route: config.hashes.myawesome,
                                title: 'My awesome',
                                callback: vm.myawesome.activate,
                                group: '.route-top'
                            }


                        ],

                    },
                    // Invalid routes
                    {
                        view: '',
                        route: /.*/,
                        title: '',
                        callback: function () {
                            logger.error(config.toasts.invalidRoute);
                        }
                    }
                ];

                    

                for (var i = 0; i < routeData.length; i++) {
                    router.register(routeData[i]);
                }

                // Crank up the router
                router.run();
            };


        return {
            register: register
        };
    });