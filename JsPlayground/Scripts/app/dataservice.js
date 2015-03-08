define('dataservice',
    [
        'dataservice.awesome'
    /*    'dataservice.attendance',
        'dataservice.lookup',
        'dataservice.person',
        'dataservice.session'*/
    ],
    function (awesome
        //attendance, lookup, person, session
        ) {
        return {
            awesome: awesome
          /*  attendance: attendance,
            lookup: lookup,
            person: person,
            session: session*/
        };
    });