import{r as i,A as v,a as p,s as h,d as f,j as o,b as t}from"./index.e1610387.js";import{B as g,t as r,R as e,A as l,o as n,a as d,S as x,U as A,c as M,b as W,h as S,W as F}from"./URLs.af2d4d38.js";import{F as U}from"./Footer.69fcd09a.js";import"./useUpdateLikedMovies.6625ab25.js";import"./index.89785bd7.js";import"./MoviePopUp.ce6bf92d.js";/* empty css                       */function N(){const{User:u}=i.exports.useContext(v),[s,c]=i.exports.useState([]);return i.exports.useEffect(()=>{p(h(f,"WatchedMovies",u.uid)).then(a=>{if(a.exists()){const m=a.data();c(m.movies)}})},[]),o("div",{children:[t(g,{url:r}),o("div",{className:"w-[99%] ml-1",children:[t(e,{first:!0,title:"Trending",url:r},r),t(e,{title:"Animated",url:l},l),s.length!=0?t(e,{title:"Watched Movies",movieData:s},"Watched Movies"):null,t(e,{title:"Netflix Originals",islarge:!0,url:n},n),t(e,{title:"Trending Series",url:d},d),t(e,{title:"Science Fiction",url:x}),t(e,{title:"Upcoming Movies",url:A}),t(e,{title:"Comedy",url:M}),t(e,{title:"Adventure",url:W}),t(e,{title:"Horror",url:S}),t(e,{title:"War",url:F})]}),t(U,{})]})}export{N as default};
