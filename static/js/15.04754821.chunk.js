(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[15],{1311:function(e,n,t){"use strict";t.r(n);t(1);var c,i,r,s,a,l,o,d,j=t(2),b=t(337),x=t.n(b),u=t(808),O=t(213),m=t(13),p=t(9),f=t(6),h=t(110),g=t(0),v=f.e.div(c||(c=Object(p.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=f.e.div(i||(i=Object(p.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),w=f.e.div(r||(r=Object(p.a)(["\n  flex: 1;\n"]))),S=f.e.img(s||(s=Object(p.a)(["\n  border-radius: 50%;\n"]))),F=Object(f.e)(j.W).attrs({as:"h3"})(a||(a=Object(p.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=f.e.div(l||(l=Object(p.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),S,(function(e){return e.theme.mediaQueries.md})),z=f.e.div(o||(o=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),S),U=Object(f.e)(j.u)(d||(d=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),I=function(e){var n=e.rank,t=e.team,c=Object(m.b)().t,i=Object(g.jsx)(S,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsx)(U,{id:"team-".concat(t.id),children:Object(g.jsxs)(j.U,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.gc,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(w,{children:[Object(g.jsxs)(j.U,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(k,{children:i}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(j.gc,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:c(t.description)}),Object(g.jsxs)(j.U,{children:[Object(g.jsxs)(j.U,{children:[Object(g.jsx)(j.Kb,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.gc,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.U,{ml:"24px",children:[Object(g.jsx)(j.M,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.gc,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.q,{as:h.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:c("See More")}),Object(g.jsx)(z,{children:i})]})]})})},E=t(889);n.default=function(){var e=Object(m.b)().t,n=Object(u.b)(),t=n.teams,c=n.isLoading,i=Object.values(t),r=x()(i,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(O.b,{children:[Object(g.jsx)(E.a,{}),Object(g.jsxs)(j.U,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.W,{scale:"xl",children:e("Teams")}),c&&Object(g.jsx)(j.j,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(I,{rank:n+1,team:e},e.id)}))]})}},808:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return l}));var c=t(1),i=t(21),r=t(67),s=t(194),a=function(e){var n=Object(i.d)((function(n){return n.teams.data[e]})),t=Object(r.b)();return Object(c.useEffect)((function(){t(Object(s.b)(e))}),[e,t]),n},l=function(){var e=Object(i.d)((function(e){return e.teams})),n=e.isInitialized,t=e.isLoading,a=e.data,l=Object(r.b)();return Object(c.useEffect)((function(){l(Object(s.c)())}),[l]),{teams:a,isInitialized:n,isLoading:t}}},889:function(e,n,t){"use strict";var c,i=t(9),r=(t(1),t(6)),s=t(2),a=t(285),l=t(13),o=t(110),d=t(0),j=function(){var e=Object(l.b)().t;return Object(d.jsx)(s.u,{mb:"32px",isActive:!0,children:Object(d.jsx)(s.v,{children:Object(d.jsxs)(s.U,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(s.W,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(d.jsx)(s.gc,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(d.jsx)(s.q,{as:o.a,to:"/create-profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})},b=r.e.div(c||(c=Object(i.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=function(){var e=Object(l.b)().t,n=Object(a.b)(),t=n.isInitialized,c=n.profile,i=t&&!c;return Object(d.jsxs)(d.Fragment,{children:[i&&Object(d.jsx)(j,{}),Object(d.jsxs)(b,{children:[Object(d.jsx)(s.W,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(d.jsx)(s.gc,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);