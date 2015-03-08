define('model',
    [
        'model.awesome'
       /* 'model.attendance',
        'model.person',
        'model.room',
        'model.session',
        'model.timeslot',
        'model.track'*/
    ],
    function (awesome
        //attendance, person, room, session, timeslot, track
        ) {
        var
            model = {
                Awesome: awesome
          /*      Attendance: attendance,
                Person: person,
                Room: room,
                Session: session,
                TimeSlot: timeslot,
                Track: track*/
            };

        model.setDataContext = function (dc) {

            awesome.datacontext(dc);

            // Model's that have navigation properties 
            // need a reference to the datacontext.
            /*model.Attendance.datacontext(dc);
            model.Person.datacontext(dc);
            model.Session.datacontext(dc);*/
        };

        return model;
    });