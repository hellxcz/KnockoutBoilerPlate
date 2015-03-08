define('vm.myawesome', ['jquery', 'underscore', 'ko', 'datacontext', 'router', 'utils', 'messenger', 'config', 'store'],
    function($, _, ko, datacontext, router, utils, messenger, config, store) {
        var

            data = ko.observable(),

            goBackCmd = ko.asyncCommand({
                execute: function(complete) {
                    router.navigateBack();
                    complete();
                }
            }),

            canEditEval = ko.computed(function () {
                return true;
            }),

            validationErrors = ko.computed(function () {
                var valArray = [];
                return valArray;
            }),

            isValid = ko.computed(function () {
                return (canEditEval()) ? validationErrors().length === 0 : true;
            }),

            isDirty = ko.computed(function () {
               return false;
            }),

            canLeave = function () {
                return !isDirty() && isValid();
            },

            activate = function(routeData, callback) {
                messenger.publish.viewModelActivated({ canleaveCallback: canLeave });
                getData(callback);
            },

            getData = function(completeCallback, forceRefresh) {
                var callback = function() {
                    if (completeCallback) {
                        completeCallback();
                    }
                }

                $.when(datacontext.awesome.getAwesomeData({ results: data }))
                    .always(callback);
                
            },

            tmplName = function() {
                return 'myawesome.view';
            };

        return {
            activate: activate,
            goBackCmd: goBackCmd,
            canEditEval: canEditEval,
            canLeave: canLeave,
            isValid: isValid,
            isDirty: isDirty,
            tmplName: tmplName,
            data: data
        }

    }
)