/*!CK:1687451950!*//*1443565214,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["U3Ypv"]); }

__d('GamesImageSlideshow.react',['Animation','React','ReactDOM','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=1500,n=250,o=i.createClass({displayName:'GamesImageSlideshow',getInitialState:function(){return {previous:0,active:0};},propTypes:{image_urls:l.array.isRequired,height:l.number.isRequired,width:l.number.isRequired,autoplay:l.bool},getDefaultProps:function(){return {autoplay:false};},componentDidMount:function(){if(this.props.autoplay)this.timeout=setTimeout(this._startSlideshow,m);},componentWillUnmount:function(){this._clearInterval();},_startSlideshow:function(){if(this.running)return;this.running=true;var p=(function(){var q=(this.state.active+1)%this.props.image_urls.length,r=this.props.image_urls[q],s=new Image(),t=(function(){if(!this.running)return;this._switchImage(q);this.interval=setTimeout(p,m);}).bind(this);s.onload=t;s.src=r;}).bind(this);p();},_switchImage:function(p){this.setState({previous:this.state.active,active:p},this._fadeImage);},_fadeImage:function(){if(this.state.active!==this.state.previous){var p=j.findDOMNode(this.refs[this.state.previous]),q=j.findDOMNode(this.refs[this.state.active]);this.anims=[new h(p).from('opacity',1).to('opacity',0).duration(n).go(),new h(q).from('opacity',0).to('opacity',1).duration(n).go()];}},_clearInterval:function(){if(this.interval){clearTimeout(this.interval);this.interval=null;}},_stopSlideshow:function(){this.running=false;this._clearInterval();if(this.anims)this.anims.map(function(p){p.stop();});this._switchImage(0);},_createImage:function(p){return i.createElement('img',{ref:p,key:p,src:this.props.image_urls[p]});},_getCurrentImages:function(){var p=this.state.previous,q=this.state.active;if(p==q){return [this._createImage(p)];}else return [this._createImage(p),this._createImage(q)];},render:function(){return (i.createElement('div',{style:{height:this.props.height+'px',width:this.props.width+'px'},onMouseEnter:!this.props.autoplay?this._startSlideshow:null,onMouseLeave:!this.props.autoplay?this._stopSlideshow:null,className:"_4x1w"},this._getCurrentImages()));}});f.exports=o;},null);
__d("XMobileMeasurementGetAdNetworksAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/insights\/mm\/ajax\/get_ad_networks\/",{});},null,{});