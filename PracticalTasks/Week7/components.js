// Task 1
Vue.component('global-component', {
    template: '<div> {{ message }} </div>',
    data: function() {
        return {
            message: 'This a global component'
        }
    }
})

var localComponent = {
    template: '<div>This is a local component</div>'
};

// Task 2
var component2 = {
    template: '<div>This is a component for task {{ weeklyTasks.task }} in week {{ weeklyTasks.week }}</div>',
    props: ['weeklyTasks'],
};

// Task 3
var component3 = {
    template: '#component3',
    methods: {
        add: function () {
            this.$emit('add', Math.random());
        },
    },
};

// Task 4
var component4 = {
    template: '<div class="component4"><slot></slot></div>',
}

var app = new Vue({
    el: '#app',
    data: {
        weeklyTasks: {
            week: '7',
            task: '2',
        },
        count: 0,
    },
    methods: {
        add: function (add) {
            this.count = add;
        },
    },
    components: {
        localComponent,
        component2,
        component3,
        component4,
    },
});