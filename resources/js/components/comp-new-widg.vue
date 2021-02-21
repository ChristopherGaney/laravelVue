Vue.component('comp-new-widg', {
  name: 'comp-new-widg',
  data: function() {
        return {
            message: 'testing a new component'
        };
    },
  template: '<div>{{ message }}</div>'
})
export default compNewWidg;
