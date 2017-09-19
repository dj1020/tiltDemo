// http://blog.tonycube.com/2017/05/vuejs-10-single-file-components.html
import Vue from 'vue';
import MyApp from './MyApp';

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<div><MyApp></MyApp></div>',
	components: { MyApp }
})
