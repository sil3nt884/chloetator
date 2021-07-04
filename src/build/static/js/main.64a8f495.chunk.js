(this.webpackJsonpchloetarot=this.webpackJsonpchloetarot||[]).push([[0],{28:function(e,n,t){},39:function(e,n,t){},51:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var c=t(4),r=t.n(c),a=t(41),s=t.n(a),i=(t(51),t(23)),o=t(6),j=(t(28),t(1));function l(){return Object(j.jsx)("div",{className:"view",children:Object(j.jsx)("h3",{className:"bannerLogo",children:" Chloe Chart - Tarot and Oracle Readings"})})}var d,u,b,O=t(11),h=t.n(O),v=t(18),p=t(14),x=(t(39),t(20)),m=t(77),f=t(79),w=t(78),g=t(80);function N(){return new m.a({uri:"https://localhost/graphql",cache:new f.a}).query({query:Object(w.a)(d||(d=Object(x.a)(["\n        query {\n          allBookings {\n            bookingId\n            name\n            email\n            request\n            state\n          }\n        }\n      "])))}).then((function(e){return{bookings:e.data.allBookings}}))}function k(e,n,t){var c=new m.a({uri:"https://localhost/graphql",cache:new f.a,headers:{password:t}}),r='\n  mutation UpdateBooking {\n     updateBookingOne(filter: {bookingId: "'.concat(e,'"} record: { state: "').concat(n,'"})  {\n        record {\n            state\n        }\n\n    }\n}');c.mutate({mutation:Object(w.a)(u||(u=Object(x.a)(["\n      ","\n    "])),r)})}function I(){return Object(j.jsx)("div",{className:"formHolder",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,n,t){var c=Object(g.a)(),r=new m.a({uri:"https://localhost/graphql",cache:new f.a}),a='\n        mutation CreateBooking {\n          bookingCreateOne(\n            record: {\n              bookingId: "'.concat(c,'"\n              name: "').concat(e,'"\n              email: "').concat(n,'"\n              request: "').concat(t,'"\n              state: "placed"\n            }\n          ) {\n            record {\n              bookingId\n              email\n              request\n              state\n            }\n          }\n        }\n      ');r.mutate({mutation:Object(w.a)(b||(b=Object(x.a)(["\n      ","\n    "])),a)})}(e.target[0].value,e.target[1].value,e.target[2].value)},className:"form",children:[Object(j.jsxs)("div",{className:"inputGroup",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{id:"name",type:"text"})]}),Object(j.jsxs)("div",{className:"inputGroup",children:[Object(j.jsx)("label",{children:"Booking Request"}),Object(j.jsx)("input",{id:"request",type:"text"})]}),Object(j.jsxs)("div",{className:"inputGroup",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{id:"email",type:"email"})]}),Object(j.jsx)("div",{className:"inputGroup",children:Object(j.jsx)("input",{type:"submit"})})]})})}t(56);function C(e){var n=e.order;return e.index%2?Object(j.jsxs)("div",{className:"ordersOdd",children:[Object(j.jsxs)("p",{children:["Order ID: ","".concat(n.bookingId)]}),Object(j.jsxs)("p",{children:["Name: ","".concat(n.name)]}),Object(j.jsxs)("p",{children:["State: ","".concat(n.state)]})]}):Object(j.jsxs)("div",{className:"ordersEven",children:[Object(j.jsxs)("p",{children:["Order ID: ","".concat(n.bookingId)]}),Object(j.jsxs)("p",{children:["Name: ","".concat(n.name)]}),Object(j.jsxs)("p",{children:["State: ","".concat(n.state)]})]})}function y(e){var n=e.bookings;return Object(j.jsx)("div",{className:"orders_holdrs",children:n.bookings.map((function(e,n){return Object(j.jsx)(C,{order:e,index:n},n)}))})}t(57);function R(){var e=Object(c.useState)(!0),n=Object(p.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(null),s=Object(p.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(null),d=Object(p.a)(l,2),u=d[0],b=d[1],O=function(){var e=Object(v.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,N();case 4:n=e.sent,b(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o(e.t0);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),i?Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("p",{children:"Failed to load resource for bookings"}),";"," "]}):t?Object(j.jsx)("div",{className:"view",children:Object(j.jsx)("p",{children:"loading..."})}):Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("h3",{className:"bannerLogo",children:" Chloe Chart - Tarot and Oracle Readings"}),Object(j.jsx)("p",{className:"title",children:"bookings"}),Object(j.jsx)(I,{}),Object(j.jsx)(y,{bookings:u,children:" "})]})}var S,q;t(58);function D(e){var n=e.review;return e.index%2?Object(j.jsxs)("div",{className:"ordersOdd",children:[Object(j.jsxs)("p",{children:["Review ID: ","".concat(n.reviewId)]}),Object(j.jsxs)("p",{children:["Name: ","".concat(n.name)]}),Object(j.jsxs)("p",{children:["Review: ","".concat(n.review)]})]}):Object(j.jsxs)("div",{className:"ordersEven",children:[Object(j.jsxs)("p",{children:["Review ID: ","".concat(n.reviewId)]}),Object(j.jsxs)("p",{children:["Name: ","".concat(n.name)]}),Object(j.jsxs)("p",{children:["Review: ","".concat(n.review)]})]})}function E(e){var n=e.reviews;return Object(j.jsx)("div",{children:n.reviews.map((function(e,n){return Object(j.jsx)(D,{review:e,index:n},n)}))})}var B=new m.a({uri:"https://localhost/graphql",cache:new f.a});function T(){return Object(j.jsx)("div",{className:"formHolder",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,n,t){var c=Object(g.a)(),r='\n      mutation CreateReview {\n    ReviewsCreateOne(record: {name: "'.concat(e,'",review : "').concat(n,'", reviewId:"').concat(c,'"})  {\n        record {\n           name\n           review\n           reviewId\n        }\n    }\n}\n      ');B.mutate({mutation:Object(w.a)(q||(q=Object(x.a)(["\n      ","\n    "])),r)})}(e.target[0].value,e.target[1].value)},className:"form",children:[Object(j.jsxs)("div",{className:"inputGroup",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text"})]}),Object(j.jsxs)("div",{className:"inputGroup",children:[Object(j.jsx)("label",{children:" Review "}),Object(j.jsx)("textarea",{className:"review",name:"review"})]}),Object(j.jsx)("div",{className:"inputGroup",children:Object(j.jsx)("input",{type:"submit"})})]})})}function G(){var e=Object(c.useState)(!0),n=Object(p.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(null),s=Object(p.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(null),d=Object(p.a)(l,2),u=d[0],b=d[1],O=function(){var e=Object(v.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,B.query({query:Object(w.a)(S||(S=Object(x.a)(["\n        query {\n          allReviews {\n            reviewId\n            name\n            review\n          }\n        }\n      "])))}).then((function(e){return{reviews:e.data.allReviews}}));case 4:n=e.sent,b(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),o(e.t0);case 12:return e.prev=12,r(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),i?Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("p",{children:"Failed to load resource for reviews"}),";"," "]}):t?Object(j.jsx)("div",{className:"view",children:Object(j.jsx)("p",{children:"loading..."})}):Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("h3",{className:"bannerLogo",children:" Chloe Chart - Tarot and Oracle Readings"}),Object(j.jsx)("p",{className:"title",children:"Reviews"}),Object(j.jsx)(T,{}),Object(j.jsx)(E,{reviews:u})]})}t(59);function L(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("div",{className:"navLogo",children:"Chloe Chart - Tarot and Oracle Readings "}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"reviews",children:Object(j.jsx)(i.b,{to:"/reviews",children:"Reviews"})}),Object(j.jsx)("li",{className:"bookings",children:Object(j.jsx)(i.b,{to:"/bookings",children:"Booking"})}),Object(j.jsx)("li",{className:"home",children:Object(j.jsx)(i.b,{to:"/",children:"Home"})})]})})]})}function P(){var e=Object(c.useState)(!0),n=Object(p.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(null),s=Object(p.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)({bookings:[]}),d=Object(p.a)(l,2),u=d[0],b=d[1],O=function(){var e=Object(v.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,N();case 4:n=e.sent,b(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o(e.t0);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(v.a)(h.a.mark((function e(n,t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(n,"inProgress",t),window.location.reload();case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(h.a.mark((function e(n,t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(n,"Completed",t),window.location.reload();case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();var f=function(){return new Promise((function(e){w("pwd")||(!function(e,n,t){var c="";if(t){var r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3),c="; expires="+r.toUTCString()}document.cookie=e+"="+(n||"")+c+"; path=/"}("pwd",prompt("Enter Password"),1),e(""))}))};function w(e){for(var n=e+"=",t=document.cookie.split(";"),c=0;c<t.length;c++){for(var r=t[c];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return""}Object(c.useEffect)((function(){f().then(O())}),[]);var g=w("pwd");return i?Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("p",{children:"Failed to load resource for bookings"}),";"," "]}):t?Object(j.jsx)("div",{className:"view",children:Object(j.jsx)("p",{children:"loading..."})}):Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("h3",{className:"bannerLogo",children:" Chloe Chart - Tarot and Oracle Readings"}),u.bookings.map((function(e,n){return t=e,c=n,r=g,n%2?Object(j.jsxs)("div",{className:"ordersOdd",children:[Object(j.jsxs)("p",{children:["Order ID: ","".concat(t.bookingId)]}),Object(j.jsxs)("p",{children:["Name: ","".concat(t.name)]}),Object(j.jsxs)("p",{children:["State: ","".concat(t.state)]}),Object(j.jsx)("button",{id:"progress",onClick:function(){x(t.bookingId,r)},children:"In Progress"}),Object(j.jsx)("button",{id:"complete",onClick:function(){m(t.bookingId,r)},children:"Complete"})]},c):Object(j.jsxs)("div",{className:"ordersEven",children:[Object(j.jsxs)("p",{children:["Order ID: ","".concat(t.bookingId)]}),Object(j.jsxs)("p",{children:["Name: ","".concat(t.name)]}),Object(j.jsxs)("p",{children:["State: ","".concat(t.state)]}),Object(j.jsx)("button",{id:"progress",onClick:function(){x(t.bookingId,r)},children:"In Progress"}),Object(j.jsx)("button",{id:"complete",onClick:function(){m(t.bookingId,r)},children:"Complete"})]},c);var t,c,r}))]})}t(67);var F=function(){return Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(L,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/manage",children:Object(j.jsx)(P,{})}),Object(j.jsx)(o.a,{path:"/reviews",children:Object(j.jsx)(G,{})}),Object(j.jsx)(o.a,{path:"/bookings",children:Object(j.jsx)(R,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(l,{})})]})]})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.64a8f495.chunk.js.map