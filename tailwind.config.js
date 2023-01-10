module.exports = {
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "primary": "#E4003A",
                    "secondary": "#005577",
                    "accent": "#F7A823",
                    "info": "#005577",
                    "success": "#4CAF50",
                    "warning": "#F7A823",
                    "error": "#E4003A",
                    "neutral": "#212121",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "primary": "#E4003A",
                    "secondary": "#005577",
                    "accent": "#F7A823",
                    "info": "#005577",
                    "success": "#4CAF50",
                    "warning": "#F7A823",
                    "error": "#E4003A",
                    "base-100": "#212121",
                    "neutral": "#212121",
                    "neutral-content": "#E2E2E2",
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
