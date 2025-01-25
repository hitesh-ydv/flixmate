import{r as a,H as U,u as $,I as A,j as s,b as e,J as B,F as o}from"./index.e1610387.js";import{b as T,d as I,c as P,u as z,i,A as n,a as g,_ as R,e as V}from"./useUpdateLikedMovies.6625ab25.js";import{F as D}from"./Footer.69fcd09a.js";/* empty css                       */import"./index.89785bd7.js";function Q(){const[d,u]=a.exports.useState(""),[l,p]=a.exports.useState({}),[v,b]=a.exports.useState(!1),[f,k]=a.exports.useState(!1),[N,y]=a.exports.useState(!1),[M,x]=a.exports.useState([]),[m,L]=a.exports.useState([]),{addToMyList:h,removeFromMyList:_,PopupMessage:j}=T(),{addToLikedMovies:C,removeFromLikedMovies:F,LikedMoviePopupMessage:E}=I(),{removeFromWatchedMovies:S,removePopupMessage:G}=P(),{playMovie:W}=z(),{id:r}=U(),H=$(),c=A();return a.exports.useEffect(()=>{c.state.From==="MyList"&&b(!0),c.state.From==="LikedMovies"&&k(!0),c.state.From==="WatchedMovies"&&y(!0),window.scrollTo({top:0,behavior:"smooth"}),i.get(`/movie/${r}/videos?api_key=${n}&language=en-US`).then(t=>{console.log(t.data,"This is the data"),t.data.results.length!==0?(u(t.data.results[0]),x(t.data.results)):console.log("Array Emptey")}),d===""&&i.get(`/tv/${r}/videos?api_key=${n}&language=en-US`).then(t=>{t.data.results.length!==0?(console.log(t.data.results[0],"This is using find "),u(t.data.results[0]),x(t.data.results),console.log(M)):console.log("Array Emptey")}),i.get(`/movie/${r}?api_key=${n}&language=en-US`).then(t=>{console.log(t.data,"Movie deatils"),p(t.data),console.log(t.data.genres[0]),i.get(`movie/${r}/recommendations?api_key=${n}&language=en-US&page=1`).then(w=>{console.log(w.data.results.slice(0,8),"ksdjfk ahdsfjksadhfjsdahf"),L(w.data.results.slice(0,8))})})},[]),s("div",{children:[e(B,{}),j,e("div",{className:"mt-12 h-[31vh] sm:h-[42vh] md:h-[45vh] lg:h-[55vh] lg:mt-0 xl:h-[98vh]",children:d?e("iframe",{width:"100%",style:{height:"inherit"},src:`//www.youtube.com/embed/${d.key}?modestbranding=1&autoplay=1`,frameborder:"0",allow:"autoplay fullscreen",allowFullScreen:!0}):e("img",{src:`${g+l.backdrop_path}`})}),l.id?s(o,{children:[s("section",{style:{backgroundImage:`linear-gradient(90deg, #000000f0 0%, #000000e6 35%, #000000c3 100%), url(${g+l.backdrop_path})`},className:"bg-cover bg-center object-contain flex flex-col p-5 sm:p-14 lg:flex-row lg:items-center lg:justify-center lg:gap-8 2xl:py-24",children:[s("div",{className:"lg:w-[45%]",children:[e("h1",{className:"text-white font-bold text-3xl mb-2",children:l.original_title||l.title}),e(R,{rating:l.vote_average/2,starRatedColor:"#065F46",numberOfStars:5,name:"rating",starDimension:"1rem",starSpacing:"0.2rem"}),e("p",{className:"text-neutral-400 mt-3",children:l.overview}),e("div",{className:"bg-neutral-600 w-full h-[0.1rem] my-5"}),s("div",{className:"hidden lg:grid",children:[s("h1",{className:" text-emerald-700 ",children:["Released on :"," ",e("a",{className:"text-white ml-1",children:l.release_date||l.air_date})]}),s("h1",{className:"text-emerald-700",children:["Language :"," ",e("a",{className:"text-white ml-1",children:l.original_language})]}),s("h1",{className:"text-emerald-700",children:["Geners :"," ",l.genres&&l.genres.map(t=>e(o,{children:e("span",{className:"text-white ml-2",children:t.name})}))]}),s("div",{className:"hidden lg:flex lg:mt-3",children:[v?s("button",{onClick:()=>_(l),className:"group flex items-center border-[0.7px] border-white text-white font-medium sm:font-bold text-xs sm:text-lg sd:text-xl py-3 lg:px-10 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mt-4 mb-3 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6 mr-1  ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Remove Movie"]}):N?s("button",{onClick:()=>S(l),className:"group flex items-center border-[0.7px] border-white text-white font-medium sm:font-semibold text-xs sm:text-lg lg:px-10 xl:font-bold py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mt-4 mb-3 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6 mr-1  ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Remove Movie"]}):s("button",{onClick:()=>h(l),className:"group flex items-center border-[0.7px] border-white text-white font-medium sm:font-semibold text-xs sm:text-lg lg:px-10 xl:font-bold py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mt-4 mb-3 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1  ml-2 text-white hover:text-emerald-700 group-hover:text-emerald-700 ease-linear transition-all duration-150",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Add To My List"]}),f?e("button",{onClick:()=>F(l),className:"border-white text-white p-4 rounded-full border-2 sm:ml-4 text-xs sm:mt-4 sm:text-lg md:text-xl shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mb-3 ease-linear transition-all duration-150",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"})})}):e("button",{onClick:()=>C(l),className:"border-white text-white p-4 rounded-full border-2 sm:ml-4 text-xs sm:mt-4 sm:text-lg md:text-xl shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mb-3 ease-linear transition-all duration-150",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"})})})]})]})]}),s("div",{className:"flex justify-between",children:[s("div",{className:"lg:hidden",children:[s("div",{children:[s("h1",{className:" text-emerald-700 text-sm leading-7 sm:text-lg sm:leading-9 lg:text-2xl lg:leading-10",children:["Released on :"," ",e("a",{className:"text-white ml-2",children:l.release_date||l.air_date})]}),s("h1",{className:" text-emerald-700 text-sm leading-7 sm:text-lg sm:leading-9 lg:text-2xl lg:leading-10",children:["Language :"," ",e("a",{className:"text-white ml-2",children:l.original_language})]}),s("h1",{className:"text-emerald-700 text-sm leading-7 sm:text-lg sm:leading-9 lg:text-2xl lg:leading-10",children:["Geners :"," ",l.genres&&l.genres.slice(0,2).map(t=>e(o,{children:e("span",{className:"text-white ml-2",children:t.name})}))]})]}),s("div",{children:[s("button",{onClick:()=>h(l),className:"group flex items-center justify-center w-full border-[0.7px] border-white text-white font-medium sm:font-bold text-xs sm:px-12 sm:text-lg md:px-16 sd:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mt-4 mb-3 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1  ml-2 text-white hover:text-emerald-700 group-hover:text-emerald-700 ease-linear transition-all duration-150",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Add To My List"]}),s("button",{onClick:()=>H("/"),className:"group flex items-center justify-center w-full bg-emerald-600 border-white text-white font-medium sm:font-bold text-xs sm:mt-4 sm:px-12 sm:text-lg md:px-16 md:text-xl py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-emerald-700 outline-none focus:outline-none mb-3 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2 ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),"Back to Home"]})]})]}),e("img",{src:l.poster_path&&`${g+(window.innerWidth>1024?l.backdrop_path?l.backdrop_path:"https://i.ytimg.com/vi/Mwf--eGs05U/maxresdefault.jpg":l.poster_path)}`,className:"w-40 rounded-sm lg:w-[45rem] ml-4 lg:ml-0"})]})]}),m.length!==0&&e("section",{children:e("div",{className:"flex flex-wrap justify-center bg-[#000000ac]",children:s("div",{className:"p-4 sm:p-14",children:[e("h1",{className:"text-white text-4xl font-semibold my-10 border-l-4 border-emerald-800 pl-3",children:"Similar Movies"}),e("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4",children:m&&m.map(t=>s("div",{class:"max-w-sm shadow mb-4",children:[e("img",{src:t.backdrop_path?V+t.backdrop_path:"https://i.ytimg.com/vi/Mwf--eGs05U/maxresdefault.jpg",alt:"",className:"cursor-pointer",onClick:()=>{W(t),window.location.reload(!0)}}),s("div",{class:"p-1",children:[e("h5",{class:"mt-1 mb-2 text-xl sm:text-2xl font-bold tracking-tight text-white dark:text-white",children:t.original_title||t.title}),s("div",{className:"flex justify-between items-center text-white mb-1",children:[s("div",{className:"flex items-center",children:[s("div",{className:"flex sm:flex-col",children:[s("h1",{className:"text-green-500 text-xs lg:text-base",children:[Math.floor(Math.random()*(100-60+1)+60),"% match"]}),e("h1",{className:"text-xs lg:text-base ml-2 sm:ml-0",children:t.release_date||t.first_air_date&&t.release_date||t.first_air_date})]}),e("h1",{className:"hidden sm:grid py-1 px-2 border-2 border-gray-800 rounded-md ml-2",children:"HD"})]}),e("div",{children:e("svg",{onClick:()=>h(t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-9 h-9 cursor-pointer hidden sm:grid",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),e("p",{class:"mb-3 font-normal text-stone-400 line-clamp-3 text-xs sm:text-base",children:t.overview})]})]}))})]})})})]}):e(o,{children:s("div",{className:"px-4 lg:px-10 xl:px-12 animate-pulse",children:[e("div",{className:"w-72 mt-4 sm:ml-0 sm:w-96 py-5 mb-7 xl:py-7 xl:w-45rem bg-neutral-900 rounded-md"}),e("div",{className:"w-full py-1 mb-3 xl:py-2 bg-neutral-900 rounded-md"}),e("div",{className:"w-full py-1 mb-3 xl:py-2 bg-neutral-900 rounded-md"}),e("div",{className:"w-full py-1 mb-3 xl:py-2 bg-neutral-900 rounded-md"}),e("div",{className:"w-full py-1 mb-8 xl:py-2 bg-neutral-900 rounded-md"})]})}),e(D,{})]})}export{Q as default};