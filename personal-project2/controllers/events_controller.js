module.exports = {
    createEvent: (req, res, next) => {
        let { title, description, date, starttime, endtime, venue, address, city, zipcode, imgUrl, perks, category, quantofvols } = req.body;
    //   console.log(req.body)  

        // console.log(req.app.get('db'));
        req.app.get('db').create_event([title, description, date, starttime, endtime, venue, address, city, zipcode, imgUrl, perks, category, quantofvols]).then(event => {
            console.log('event', event);
            res.status(200).send(event);
        }).catch((err) => res.status(500).send(err))

    },
    getEvents: (req, res, next) => {
        req.app.get('db').get_events()
            .then(events => {
                res.status(200).send(events) 
            })

    },
    getEventById: (req, res, next) => {
        let {params} = req;

        req.app.get('db').get_event_by_id([req.params.id])
            .then(event => res.status(200).send(event))
            .catch(() => res.status(500).send());

    },
    getEventsByCat: (req, res, next) => {
        let {query} = req;

        req.app.get('db').get_events_by_category([req.query.id])
            .then(events => res.status(200).send(events))
            .catch(() => res.status(500).send());
    },
    getEventsByZip: (req, res, next) => {
        let {query} = req;

        req.app.get('db').get_events_by_zipcode([req.query])
            .then(events => res.status(200).send(events))
            .catch(() => res.status(500).send());
    },            
    deleteEvent: (req, res, next) => {
        let {params} = req;

        req.app.delete('db').delete_event([req.params.id])
            .then(() => res.status(200).send("You successfully deleted your event."))
            .catch(() => res.status(500).send("You did not delete the event"));
    }
};