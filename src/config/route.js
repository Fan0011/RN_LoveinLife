export default {
    'public': [
        {
            'path': '/',
            'component': 'Home'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ],
    'client': [
        {
            'path': '/',
            'component': 'Home'
        }, {
            'path': '/profile/*',
            'component': 'Home'
        }, {
            'path': '/mail/*',
            'component': 'Home'
        }, {
            'path': '/girls',
            'component': 'Home'
        }, {
            'path': '/contacts/*',
            'component': 'Home'
        }, {
            'path': '/member/:id',
            'component': 'Member'
        }, {
            'path': '/member/:id/shop',
            'component': 'Shop'
        }, {
            'path': '/member/:id/shop/:prodId',
            'component': 'Shop'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ],
    'girl': [
        {
            'path': '/',
            'component': 'Home'
        }, {
            'path': '/profile/*',
            'component': 'Home'
        }, {
            'path': '/mail/*',
            'component': 'Home'
        }, {
            'path': '/contacts/*',
            'component': 'Home'
        }, {
            'path': '/member/:id',
            'component': 'Member'
        }, {
            'path': '*',
            'component': 'NotFound'
        }
    ]
}