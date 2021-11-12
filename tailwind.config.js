module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            main: 'proxima-nova, sans-serif',
            title: 'futura-pt, sans-serif',
            article: 'Noto Serif, Georgia'
        },
        extend: {
            colors: {
                'dark-333': '#333',
                'dark-444': '#444',
                'dark-555': '#555',
                'dark-666': '#666'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}