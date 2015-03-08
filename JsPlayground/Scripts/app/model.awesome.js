define('model.awesome',
    ['ko'],
    function(ko) {

        var _dc = null;

        var Awesome = function() {
            var self = this;

            self.id = ko.observable();

            self.data = ko.observable();

            self.isNullo = false;

            return self;
        };

        Awesome.Nullo = new Awesome()
            .id(0)
            .data('');
        Awesome.Nullo.isNullo = true;

        Awesome.datacontext = function(dc) {
            if (dc) {
                _dc = dc;
            }

            return _dc;
        }

        return Awesome;
    });