(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[3],{307:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1WSDg",dialogsItems:"Dialogs_dialogsItems__3bjv9",line:"Dialogs_line__2SYE5",messagesField:"Dialogs_messagesField__1NgB3",messages:"Dialogs_messages__3apIQ",answerField:"Dialogs_answerField__1hM6v",inputField:"Dialogs_inputField__3wGxi",sendMessage:"Dialogs_sendMessage__3OVHo",companion:"Dialogs_companion__3f3cO",textareaFiled:"Dialogs_textareaFiled__FtUw7",error:"Dialogs_error__GBICm",messagesFiller:"Dialogs_messagesFiller__o41OG"}},308:function(e,a,s){e.exports={message:"Message_message__1GtsN",me:"Message_me__2rugh",you:"Message_you__2RIN_",messageTextFiled:"Message_messageTextFiled__TLaxr"}},309:function(e,a,s){e.exports={dialog:"DialogItem_dialog__2EsNO",avatar:"DialogItem_avatar__2dWX9",name:"DialogItem_name__1aT2G",active:"DialogItem_active__1XuwC"}},311:function(e,a,s){"use strict";s.r(a);var t=s(80),i=s(11),c=s(1),n=s(307),r=s.n(n),l=s(308),o=s.n(l),g=s(0),d=function(e){return Object(g.jsx)("div",{className:o.a.message,children:Object(g.jsxs)("div",{className:o.a[e.owner],children:["me"!==e.owner&&Object(g.jsx)("img",{src:e.friendAvatar,alt:"ava"}),Object(g.jsx)("div",{className:o.a.messageTextFiled,children:e.message}),"me"===e.owner&&Object(g.jsx)("img",{src:e.myAvatar,alt:"ava"})]})})},m=s(309),u=s.n(m),j=function(e){var a=e.activeInterlocutor!==e.id?u.a.dialog:"".concat(u.a.dialog," ").concat(u.a.active);return Object(g.jsxs)("div",{className:a,onClick:function(){e.changeActiveCompanion(e.id)},children:[Object(g.jsx)("img",{src:e.avatar,alt:"",className:u.a.avatar}),Object(g.jsx)("div",{className:u.a.name,children:e.name})]})},_=s(8),v=s(12),b=s(77),O=s(24);a.default=Object(v.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage,authorizedUserId:e.auth.userId}}),(function(e){return{sendMessage:function(a,s){e(Object(t.c)(a,s))},getUserProfile:function(a){e(Object(O.e)(a))},changeActiveCompanion:function(a){e(Object(t.a)(a))}}})),b.a)((function(e){var a=Object(c.useRef)(null);Object(c.useEffect)((function(){e.authorizedUserId&&e.getUserProfile(e.authorizedUserId)}),[]),Object(c.useEffect)((function(){a.current&&a.current.scrollIntoView({behavior:"smooth",block:"start"})}),[e.dialogsPage.messages,e.dialogsPage.activeInterlocutor]);var s=e.dialogsPage.dialogs.map((function(a){return Object(g.jsx)(j,{name:a.name,id:a.id,avatar:a.avatar,changeActiveCompanion:e.changeActiveCompanion,activeInterlocutor:e.dialogsPage.activeInterlocutor},a.id)})),t=e.dialogsPage.messages[e.dialogsPage.activeInterlocutor].map((function(a){return Object(g.jsx)(d,{message:a.message,owner:a.owner,myAvatar:e.dialogsPage.myAvatar,friendAvatar:a.avatar},a.id)})),n=t.length>0?t:Object(g.jsx)("div",{className:r.a.messagesFiller,children:"There are no messages yet..."}),l=Object(c.useState)(""),o=Object(i.a)(l,2),m=o[0],u=o[1],_=Object(c.useState)(""),v=Object(i.a)(_,2),b=v[0],O=v[1],h=function(){m&&"\n"!==m?(e.sendMessage(m,e.dialogsPage.activeInterlocutor),u("")):O("Message cannot be empty")};return Object(g.jsxs)("div",{className:r.a.dialogs,children:[Object(g.jsxs)("div",{className:r.a.dialogsItems,children:[Object(g.jsx)("div",{children:s}),Object(g.jsx)("div",{className:r.a.line})]}),Object(g.jsxs)("div",{className:r.a.messagesField,children:[Object(g.jsxs)("div",{className:r.a.messages,children:[Object(g.jsxs)("div",{className:r.a.companion,children:[Object(g.jsx)("img",{src:e.dialogsPage.dialogs[e.dialogsPage.activeInterlocutor].avatar,alt:""}),Object(g.jsx)("div",{children:e.dialogsPage.dialogs[e.dialogsPage.activeInterlocutor].name})]}),n]}),Object(g.jsxs)("div",{className:r.a.answerField,children:[Object(g.jsxs)("div",{className:r.a.textareaFiled,children:[Object(g.jsx)("textarea",{placeholder:"Type a message...",value:m,onChange:function(e){if(O(""),"\n"===e.currentTarget.value[e.currentTarget.value.length-1])return h();u(e.currentTarget.value)},className:r.a.inputField}),b&&Object(g.jsx)("div",{className:r.a.error,children:b})]}),Object(g.jsx)("div",{ref:a,children:Object(g.jsx)("button",{className:r.a.sendMessage,onClick:h,children:"Send"})})]})]})]})}))}}]);
//# sourceMappingURL=3.6f1f5afa.chunk.js.map