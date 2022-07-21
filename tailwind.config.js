module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue"
       
    ],
    theme: {
        extend: {
            keyframes: {

                "slide-tl": {
                    "0%": {
                        transform: "translateY(0) translateX(0)"
                    },
                    to: {
                        transform: "translateY(-100px) translateX(-100px)"
                    },
                    from: {
                        transform: "translateY(100px) translateX(-100px)"
                    },
                },
                "slide-tr": {
                    "0%": {
                        transform: "translateY(0) translateX(0)"
                    },
                    to: {
                        transform: "translateY(-100px) translateX(100px)"
                    },
                    from: {
                        transform: "translateY(100px) translateX(-100px)"
                    }
                },
                "slide-left": {
                    "0%": {
                        transform: "translateX(0)"
                    },
                    to: {
                        transform: "translateX(-100px)"
                    },
                    from: {
                        transform: "translateX(100px)"
                    },
                },

            },
            animation: {
                "tracking-in-expand": "tracking-in-expand 2s ease-in 1s  alternate both",
                "slide-tl": "slide-tl 20s cubic-bezier(0.250, 0.460, 0.450, 0.940)  infinite alternate-reverse both"
                ,
                "slide-tr": "slide-tr 20s cubic-bezier(0.250, 0.460, 0.450, 0.940)  infinite alternate-reverse both",

                "slide-left": "slide-left 10s ease-in-out  infinite alternate-reverse both",

            },



            animations: {
                "tracking-in-expand": {
                    "0%": {
                        "letter-spacing": "-.5em",
                        opacity: "0"
                    },
                    "40%": {
                        opacity: ".6"
                    },
                    to: {
                        opacity: "1"
                    }
                },
                "pulsate-bck": {
                    "0%,to": {
                        transform: "scale(1)"
                    },
                    "50%": {
                        transform: "scale(.9)"
                    }
                },
                "shake-horizontal": {
                    "0%,to": {
                        transform: "translateX(0)"
                    },
                    "10%,30%,50%,70%": {
                        transform: "translateX(-10px)"
                    },
                    "20%,40%,60%": {
                        transform: "translateX(10px)"
                    },
                    "80%": {
                        transform: "translateX(8px)"
                    },
                    "90%": {
                        transform: "translateX(-8px)"
                    }
                },

                "vibrate-1": {
                    "0%,to": {
                        transform: "translate(0)"
                    },
                    "20%": {
                        transform: "translate(-2px, 2px)"
                    },
                    "40%": {
                        transform: "translate(-2px, -2px)"
                    },
                    "60%": {
                        transform: "translate(2px, 2px)"
                    },
                    "80%": {
                        transform: "translate(2px, -2px)"
                    }

                },

                // defaults to {}; the following are examples
                'spin': {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
                'jump': {
                    '0%': {
                        transform: 'translateY(0%)',
                    },
                    '50%': {
                        transform: 'translateY(-100%)',
                    },
                    '100%': {
                        transform: 'translateY(0%)',
                    },
                },

            },

            animationDuration: { // defaults to these values
                'default': '1s',
                '0s': '0s',
                '1s': '1s',
                '2s': '2s',
                '3s': '3s',
                '4s': '4s',
                '5s': '5s',
                '6s': '6s',
                '7s': '7s',
                '100s': '100s',
                '200s': '200s',
                '300s': '300s',
            },
            animationTimingFunction: { // defaults to these values
                'default': 'ease',
                'linear': 'linear',
                'ease': 'ease',
                'ease-in': 'ease-in',
                'ease-out': 'ease-out',
                'ease-in-out': 'ease-in-out',
            },
            animationDelay: { // defaults to these values
                'default': '0s',
                '0s': '0s',
                '1s': '1s',
                '2s': '2s',
                '3s': '3s',
                '4s': '4s',
                '5s': '5s',
            },
            animationIterationCount: { // defaults to these values
                'default': 'infinite',
                'once': '1',
                'infinite': 'infinite',
            },
            animationDirection: { // defaults to these values
                'default': 'normal',
                'normal': 'normal',
                'reverse': 'reverse',
                'alternate': 'alternate',
                'alternate-reverse': 'alternate-reverse',
            },
            animationFillMode: { // defaults to these values
                'default': 'none',
                'none': 'none',
                'forwards': 'forwards',
                'backwards': 'backwards',
                'both': 'both',
            },
            animationPlayState: { // defaults to these values
                'running': 'running',
                'paused': 'paused',
            },
        },


    },
    corePlugins: {},
    // plugins: [require("daisyui")],


    plugins: [
       
        require("tailwindcss-animations",),
    ],
}
