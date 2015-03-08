define('vm',
[
    'vm.myawesome',
    'vm.shell'
        /*'vm.favorites',
        'vm.session',
        'vm.sessions',
        'vm.shell',
        'vm.speaker',
        'vm.speakers'*/
],
    function (
        myawesome, shell
        //favorites, session, sessions, shell, speaker, speakers
        ) {
        return {
            myawesome: myawesome,
            shell: shell
          /*  favorites: favorites,
            session: session,
            sessions: sessions,
            shell: shell,
            speaker: speaker,
            speakers: speakers*/
        };
    });