!function(){"use strict";var e,t={259:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,a=window.wp.blockEditor,l=window.wp.components,o=JSON.parse('{"u2":"danstoakes/img-content-two-col"}');(0,e.registerBlockType)(o.u2,{edit:function({attributes:e,setAttributes:o,isSelected:r}){const{title:i,content:c,mediaID:m,mediaURL:s,alignment:u}=e,d=e=>{o({title:e})},g=()=>{o({mediaID:null,mediaURL:""})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,n.__)("Block Settings")},(0,t.createElement)(l.TextControl,{label:(0,n.__)("Title"),value:i,onChange:d}),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)("strong",null,(0,n.__)("Image Alignment"))),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)(a.AlignmentToolbar,{value:u,onChange:e=>o({alignment:e})})))),(0,t.createElement)(a.BlockControls,null,(0,t.createElement)(a.AlignmentToolbar,{value:u,onChange:e=>o({alignment:e})})),(0,t.createElement)("div",{className:`align${u}`},(0,t.createElement)("div",{className:"image"},(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(a.MediaUpload,{onSelect:e=>{o({mediaID:e.id,mediaURL:e.url})},allowedTypes:["image"],value:m,render:({open:e})=>(0,t.createElement)("div",null,m?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("img",{src:s,alt:"",style:{maxWidth:"100%"}}),r&&(0,t.createElement)(l.Button,{isLink:!0,isDestructive:!0,onClick:g},(0,n.__)("Delete Image","danstoakes-img-content-two-col"))):(0,t.createElement)(l.Button,{onClick:e},(0,n.__)("Select Image","danstoakes-img-content-two-col")))}))),(0,t.createElement)("div",{className:"content"},(0,t.createElement)(a.RichText,{tagName:"h2",placeholder:(0,n.__)("Enter title...","danstoakes-img-content-two-col"),value:i,onChange:d}),(0,t.createElement)(a.RichText,{tagName:"div",placeholder:(0,n.__)("Enter content...","danstoakes-img-content-two-col"),multiline:"p",value:c,onChange:e=>{o({content:e})}}))))},save:function({attributes:e}){const{title:n,content:l,mediaURL:o,alignment:r}=e;return(0,t.createElement)("div",{className:`align${r}`},(0,t.createElement)("div",{className:"image"},o&&(0,t.createElement)("img",{src:o,alt:"",style:{maxWidth:"100%"}})),(0,t.createElement)("div",{className:"content"},(0,t.createElement)(a.RichText.Content,{tagName:"h2",value:n}),(0,t.createElement)(a.RichText.Content,{tagName:"div",value:l})))}})}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,n,l,o){if(!n){var r=1/0;for(s=0;s<e.length;s++){n=e[s][0],l=e[s][1],o=e[s][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(s--,1);var m=l();void 0!==m&&(t=m)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,l,o]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,r=n[0],i=n[1],c=n[2],m=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(c)var s=c(a)}for(t&&t(n);m<r.length;m++)o=r[m],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},n=self.webpackChunkdanstoakes_img_content_two_col=self.webpackChunkdanstoakes_img_content_two_col||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=a.O(void 0,[431],(function(){return a(259)}));l=a.O(l)}();