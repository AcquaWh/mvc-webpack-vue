import Vue from "vue";
import { mapState } from "vuex";
import store from "../store";
import Vuetable from 'vuetable-2';

const vm = new Vue({
    el: "#app-about",
    store,
    components: {
        Vuetable
    },
    data() {
        return {};
    },
    computed: {
        ...mapState(["anotherMessage"])
    }
});