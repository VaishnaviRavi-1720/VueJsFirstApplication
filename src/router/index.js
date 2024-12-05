import Vue from "vue";
import Router from "vue-router";
import NewInstance from "../components/New_Instance.vue";
import Watcher from "../components/Watcher.vue";
import Method from "../components/Method.vue";
import EventModifiers from "../components/EventModifiers.vue";
import DocumentObjectModel from "../components/DocumentObjectModel.vue";
import Loops from "../components/Loops.vue";
import ComponentReusing from "../components/ComponentReusing.vue";
import ListRendering from "../components/ListRendering.vue";
import ListRenderingMutationMethods from "../components/ListRenderingMutationMethods.vue";
import RenderingVForWithVIf from "../components/RenderingVForWithVIf.vue";
import RenderingVForWithRange from "../components/RenderingVForWithRange.vue";
import PassingDataToChildWithProps from "../components/PassingDataToChildWithProps.vue";
import TwoWayDataBindingModel from "../components/TwoWayDataBindingModel.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/new-instance", name: "NewInstance", component: NewInstance },
    { path: "/watcher", name: "Watcher", component: Watcher },
    { path: "/method", name: "Method", component: Method },
    { path: "/event-modifiers", name: "EventModifiers", component: EventModifiers },
    { path: "/document-object-model", name: "DocumentObjectModel", component: DocumentObjectModel },
    { path: "/loops", name: "Loops", component: Loops },
    { path: "/two-way-data-binding", name: "TwoWayDataBindingModel", component: TwoWayDataBindingModel },
    { path: "/component-reusing", name: "ComponentReusing", component: ComponentReusing },
    { path: "/list-rendering", name: "ListRendering", component: ListRendering },
    { path: "/list-rendering-mutation", name: "ListRenderingMutationMethods", component: ListRenderingMutationMethods },
    { path: "/passing-data", name: "PassingDataToChildWithProps", component: PassingDataToChildWithProps },
    { path: "/list-rendering-vif", name: "RenderingVForWithVIf", component: RenderingVForWithVIf },
    { path: "/rendering-range", name: "RenderingVForWithRange", component: RenderingVForWithRange },
  ],
});
