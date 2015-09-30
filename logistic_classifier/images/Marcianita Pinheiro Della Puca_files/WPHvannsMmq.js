/*!CK:774718541!*//*1442445812,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nqea\/"]); }

__d("PagesHovercardImpressionConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ACT_LOG_MESSAGE_BUTTON_IMPRESSION:"message_button_impression",ACT_LOG_MESSAGE_BUTTON_CLICK:"message_button_click"};},null,{});
__d("XPagesHovercardImpressionController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/hovercard\/impression\/",{});},null,{});
__d('PageHovercardUtilities',['AsyncRequest','Event','PagesHovercardImpressionConstants','XPagesHovercardImpressionController'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={registerMessageButton:function(m,n){i.listen(m,'click',function(){var o=j.ACT_LOG_MESSAGE_BUTTON_CLICK,p=k.getURIBuilder().getURI();new h().setURI(p).setData({pageID:n,action:o}).send();});}};f.exports=l;},null);