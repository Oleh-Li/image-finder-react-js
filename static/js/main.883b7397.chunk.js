(this["webpackJsonpimage-finder-react-js"]=this["webpackJsonpimage-finder-react-js"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__3Yudc",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__30rL4"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__30j23",Modal:"Modal_Modal__2PRNh"}},24:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__3nitn",ImageGalleryItem:"imageGallery_ImageGalleryItem__3sAL1",ImageGalleryItemImage:"imageGallery_ImageGalleryItemImage__tVxdR"}},26:function(e,t,a){e.exports={spinnerContainer:"loader_spinnerContainer__MPf45"}},27:function(e,t,a){e.exports={button:"Button_button__3ykPE"}},34:function(e,t,a){},35:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=(a(34),a(13)),l=a(4),s=a(5),u=a(7),h=a(6),m=a(28),d=a(29),p=(a(35),a(23)),g=a.n(p),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dog",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="15354044-5c6c2e030b5f90cfcf13d54e3";return g.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=5")).then((function(e){return e.data.hits}))},b=a(8),j=a.n(b),v=a(1),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.queryChange(e.state.value),e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(v.jsx)("header",{className:j.a.Searchbar,children:Object(v.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(v.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(v.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(v.jsx)("input",{onChange:this.handleChange,className:j.a.SearchFormInput,value:e,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=a(24),I=a.n(O),_=a(11),S=a.n(_),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).galleryRef=Object(n.createRef)(),e.handleClicklPic=function(t){t.target.id&&e.props.onLargeImageURL(t.target.id)},e.photosArr=function(t){return t.map((function(t){var a=t.id,n=t.url,r=t.alt;return Object(v.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(v.jsx)("img",{onClick:e.handleClicklPic,ref:e.galleryRef,id:a,src:n,alt:r,className:S.a.ImageGalleryItemImage})},a)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleClicklPic)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleClicklPic)}},{key:"render",value:function(){var e=this.props.photos;return this.photosArr(e)}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).listRef=Object(n.createRef)(),e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.props.dataPhotoArr!==e.dataPhotoArr&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props,t=e.dataPhotoArr,a=e.onLargeImageURL;return Object(v.jsx)("ul",{ref:this.listRef,className:I.a.ImageGallery,onClick:this.handleClicklPic,children:Object(v.jsx)(x,{photos:t,onLargeImageURL:a})})}}]),a}(n.Component),k=(a(56),a(25)),C=a.n(k),R=a(26),w=a.n(R),M=function(){return Object(v.jsx)("div",{className:w.a.spinnerContainer,children:Object(v.jsx)(C.a,{type:"Oval",color:"#00BFFF",height:150,width:150,timeout:1e3})})},N=function(e){var t=e.text;return Object(v.jsxs)("h1",{children:["Whoops, something went wrong: ",t]})},P=a(27),U=a.n(P),G=function(e){var t=e.loadMore;return Object(v.jsx)("button",{onClick:t,className:U.a.button,children:"Load more"})},F=a(12),A=a.n(F),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).backDropRef=Object(n.createRef)(),e.handlePressKey=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackDropClick=function(t){var a=e.backDropRef.current;a&&t.target!==a||e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlePressKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlePressKey)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(v.jsx)("div",{className:A.a.Overlay,onClick:this.handleBackDropClick,ref:this.backDropRef,children:Object(v.jsx)("div",{className:A.a.Modal,children:Object(v.jsx)("img",{src:e,alt:"largePic"})})})}}]),a}(n.Component),D=["webformatURL","type"],E=function(e){return e.map((function(e){var t=e.webformatURL,a=e.type,n=Object(d.a)(e,D);return Object(m.a)({url:t,alt:a},n)}))};window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!1,error:null,photos:[],pageNum:1,inputValue:"dog",isModalOpen:!1,largeImageURL:""},e.closeModal=function(){e.setState({isModalOpen:!1})},e.findLargeImage=function(e,t){return e.find((function(e){return e.id.toString()===t}))},e.onLargeImageURL=function(t){var a=e.findLargeImage(e.state.photos,t).largeImageURL;e.setState({largeImageURL:a,isModalOpen:!0})},e.fetchPhotos=function(t){e.setState({isLoading:!0}),f(t).then((function(t){return e.setState({photos:E(t)})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.loadMore=function(){return e.setState((function(e){return{pageNum:e.pageNum+=1}}))},e.queryChange=function(t){e.setState({inputValue:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchPhotos()}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.pageNum!==this.state.pageNum&&f(this.state.inputValue,this.state.pageNum).then((function(e){return a.setState((function(t){return{photos:[].concat(Object(i.a)(t.photos),Object(i.a)(E(e)))}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.photos,a=e.isLoading,r=e.error,o=e.inputValue,c=e.isModalOpen,i=e.largeImageURL;return Object(v.jsxs)("div",{className:"App",children:[r&&Object(v.jsx)(N,{text:r.response.data}),a&&Object(v.jsx)(M,{}),Object(v.jsx)(y,{onSubmit:this.fetchPhotos,queryChange:this.queryChange}),t.length>0&&o&&Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(L,{dataPhotoArr:t,onLargeImageURL:this.onLargeImageURL}),Object(v.jsx)(G,{loadMore:this.loadMore}),c&&Object(v.jsx)(B,{closeModal:this.closeModal,largeImageURL:i})]})]})}}]),a}(n.Component);c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__tqhbt",SearchForm:"Searchbar_SearchForm__2RzUi",SearchFormButton:"Searchbar_SearchFormButton__n4tqt",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__bQzE_",SearchFormInput:"Searchbar_SearchFormInput__3jziT"}}},[[77,1,2]]]);
//# sourceMappingURL=main.883b7397.chunk.js.map