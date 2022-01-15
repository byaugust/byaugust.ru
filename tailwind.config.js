module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: "class",
    theme: {
        fontFamily: {
            main: 'IBM Plex Sans, sans-serif',
            title: 'futura-pt, sans-serif',
            article: 'Noto Serif, Georgia'
        },
        extend: {
            colors: {
                'dark-111': '#111',
                'dark-222': '#222',
                'dark-333': '#333',
                'dark-444': '#444',
                'dark-555': '#555',
                'dark-666': '#666',
                'dark-20': '#eaeaea',
                'dark - 999': '#999999'
            }
        },
    },
    variants: {
        extend: {},
        backgroundColor: [
          "dark",
          "dark-hover",
          "dark-group-hover",
          "dark-even",
          "dark-odd"
        ],
        borderColor: ["dark", "dark-focus", "dark-focus-within"],
        textColor: ["dark", "dark-hover", "dark-active"]
    },
    plugins: [],
}