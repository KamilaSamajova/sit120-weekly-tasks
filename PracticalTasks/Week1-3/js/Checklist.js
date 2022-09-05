let vue = new Vue({
    el: "#checklist",
    data: {
        countries: [
            { title: "Iceland", checked: true},
            { title: "France", checked: false},
            { title: "New Zealand", checked: false},
            { title: "Australia", checked: true},
            { title: "Indonesia", checked: false},
        ],
    },
});