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
import ListRenderingVForWithObject from "../components/ListRenderingVForWithObject.vue";
import RenderFunctionWithArguments from "../components/RenderFunctionWithArguments.vue";
import CompositionAPIWithTemplates from "../components/CompositionAPIWithTemplates.vue";
import EventHandling from "../components/EventHandling.vue";
import Routing from "../components/Routing.vue";
import HelloWorld from "../components/HelloWorld.vue";
import HelloGeek from "../components/HelloGeek.vue";
import Created from "../components/Created.vue";
import Mount from "../components/Mount.vue";
import ShadowDOM from "../components/ShadowDOM.vue";
import VirtualDOM from "../components/VirtualDOM.vue";


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
    { path: "/ListRenderingVForWithObject", name:"ListRenderingVForWithObject", component: ListRenderingVForWithObject},
    { path: "/RenderFunctionWithArguments", name:"RenderFunctionWithArguments", component: RenderFunctionWithArguments},
    { path: "/CompositionAPIWithTemplates", name:"CompositionAPIWithTemplates", component: CompositionAPIWithTemplates},
    { path: "/EventHandling", name: "EventHandling",component: EventHandling},
    { path: "/Routing", name: "Routing", component: Routing},
    {
      path: "/helloworld",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/hellogeek",
      name: "HelloGeek",
      component: HelloGeek,
    },
    {
      path: "/Created",
      name: "Created",
      component: Created
    },
    {
      path: "/Mount",
      name: "Mount",
      component: Mount
    },
    ,
    {
      path: "/ShadowDOM",
      name: "ShadowDOM",
      component: ShadowDOM
    },
    ,
    {
      path: "/VirtualDOM",
      name: "VirtualDOM",
      component: VirtualDOM
    },
  ],
});
