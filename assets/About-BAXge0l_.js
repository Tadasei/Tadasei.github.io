import{s as w,c as l,o as n,a as o,m as s,B as y,d as C,e as k,f as p,r as m,g as u,h as f,t as $,i as x,u as i,p as S,j as L,b as d,F as j,k as I}from"./index-BgaMiwFG.js";import{s as g}from"./index-DvK5c4vK.js";const z="/assets/resume-DUqg03-0.pdf";var b={name:"TimesCircleIcon",extends:w};function B(e,t,h,r,c,a){return n(),l("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}b.render=B;var P=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding-block: ${e("chip.padding.y")};
    padding-inline: ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-inline-start: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(${e("chip.padding.y")} / 2);
    padding-block-end: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,M={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},_=y.extend({name:"chip",style:P,classes:M}),T={name:"BaseChip",extends:C,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:_,provide:function(){return{$pcChip:this,$parentInstance:this}}},v={name:"Chip",extends:T,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return k({removable:this.removable})}},components:{TimesCircleIcon:b}},K=["aria-label","data-p"],V=["src"];function D(e,t,h,r,c,a){return c.visible?(n(),l("div",s({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":a.dataP}),[m(e.$slots,"default",{},function(){return[e.image?(n(),l("img",s({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,V)):e.$slots.icon?(n(),u(f(e.$slots.icon),s({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(n(),l("span",s({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):p("",!0),e.label?(n(),l("div",s({key:3,class:e.cx("label")},e.ptm("label")),$(e.label),17)):p("",!0)]}),e.removable?m(e.$slots,"removeicon",{key:0,removeCallback:a.close,keydownCallback:a.onKeydown},function(){return[(n(),u(f(e.removeIcon?"span":"TimesCircleIcon"),s({class:[e.cx("removeIcon"),e.removeIcon],onClick:a.close,onKeydown:a.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):p("",!0)],16,K)):p("",!0)}v.render=D;const N={class:"flex flex-col gap-4 md:flex-row bg-surface-0 dark:bg-surface-900"},q=["src"],A={class:"flex justify-center flex-1"},E={class:"p-6 pt-12 md:p-12"},H={class:"flex items-center justify-center gap-6 md:justify-start"},U={class:"flex justify-center flex-1"},Z={class:"p-6 pt-12 md:p-12"},F={class:"flex flex-wrap gap-2"},J=["href"],G={__name:"About",setup(e){const t=x([{label:"HTML",url:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{label:"Bootstrap CSS",url:"https://getbootstrap.com/"},{label:"Tailwind CSS",url:"https://tailwindcss.com/"},{label:"JavaScript",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{label:"PHP",url:"https://www.php.net/"},{label:"Go",url:"https://go.dev/"},{label:"Python",url:"https://www.python.org/"},{label:"MySQL",url:"https://www.mysql.com/"},{label:"Laravel",url:"https://laravel.com/"},{label:"Livewire",url:"https://laravel-livewire.com/"},{label:"Vue",url:"https://vuejs.org/"},{label:"Inertia.js",url:"https://inertiajs.com/"},{label:"Elasticsearch",url:"https://www.elastic.co/elasticsearch"},{label:"Docker",url:"https://www.docker.com/"}]);return(h,r)=>(n(),l("div",N,[o("img",{src:i(S),alt:"hero-1",class:"md:size-1/4 md:[clip-path:polygon(0%_0,88%_0%,100%_100%,0_100%)]"},null,8,q),o("div",A,[o("div",E,[r[0]||(r[0]=L('<h1 class="mb-4 text-3xl font-bold text-center md:text-5xl text-surface-900 dark:text-surface-0 md:leading-normal md:text-left"> About me </h1><p class="mb-8 leading-normal text-center text-surface-700 dark:text-surface-200 md:text-left"> I&#39;m a web developer who likes to write less code while providing convenient results that can be grasped by both clients and fellow developers. </p><p class="mb-8 leading-normal text-center text-surface-700 dark:text-surface-200 md:text-left"> The trade itself is pretty complicated so i&#39;m all for flexible and easily reusable code. <a href="https://laravel.com/" target="_blank" class="text-red-500 hover:underline">Laravel</a> and <a href="https://vuejs.org/" target="_blank" class="text-green-500 hover:underline">Vue</a> are two frameworks that embrace a thinking aligning with such values, which is why i got hooked up on learning more about them. </p><p class="mb-8 leading-normal text-center text-surface-700 dark:text-surface-200 md:text-left"> That being said, web development can quickly grow tedious when some tasks become repetitive and cumbersome with regard to a project&#39;s main features, which is why you&#39;ll find among my projects a few packages i&#39;ve built (and still doing so) to help relieve the hassle of it. </p>',4)),o("div",H,[d(i(g),{as:"RouterLink",label:"My Projects",raised:"",rounded:"",to:{name:"projects"},class:"px-8 py-4 font-bold whitespace-nowrap"}),d(i(g),{as:"a",label:"My Resume",rounded:"",outlined:"",class:"px-8 py-4 font-bold whitespace-nowrap",href:i(z),target:"_blank"},null,8,["href"])])])]),o("div",U,[o("div",Z,[r[1]||(r[1]=o("h1",{class:"mb-4 text-3xl font-bold text-center md:text-5xl text-surface-900 dark:text-surface-0 md:leading-normal md:text-left"}," My Skills ",-1)),o("div",F,[(n(!0),l(j,null,I(t.value,({label:c,url:a})=>(n(),l("a",{key:a,href:a,target:"_blank"},[d(i(v),{label:c,pt:{root:["hover:text-green-500"]}},null,8,["label"])],8,J))),128))])])])]))}};export{G as default};
