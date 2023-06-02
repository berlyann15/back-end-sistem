const routes = [
{
    method: '*',
    path: '/',
    handler: (request, h) => {
        return 'Halaman tidak dapat diakses dengan method tersebut';
    },
},
{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Homepage';
    },
},
{
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        return 'About Page';
    },
},
];

// Menambahkan versi di belakang response pada method GET
const versionedRoutes = routes.map(route => {
    if (route.method === 'GET') {
        const originalHandler = route.handler;
        route.handler = (request, h) => {
            const originalResponse = originalHandler(request, h);
            const version = 1; // Ubah angka versi sesuai kebutuhan
            return originalResponse + ' - v' + version;
        };
    }
    return route;
});

module.exports = versionedRoutes;
