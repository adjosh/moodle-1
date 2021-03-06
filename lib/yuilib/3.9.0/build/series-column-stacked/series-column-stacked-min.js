/* YUI 3.9.0 (build 5827) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
YUI.add("series-column-stacked",function(e,t){var n=e.Lang;e.StackedColumnSeries=e.Base.create("stackedColumnSeries",e.ColumnSeries,[e.StackingUtil],{drawSeries:function(){if(this.get("xcoords").length<1)return;var t=n.isNumber,r=e.clone(this.get("styles").marker),i=r.width,s=r.height,o=this.get("xcoords"),u=this.get("ycoords"),a=0,f=o.length,l=u[0],c=this.get("type"),h=this.get("seriesTypeCollection"),p,d=this.get("order"),v=this.get("graphOrder"),m,g,y,b,w,E,S,x=d===0,T=f*i,N={width:[],height:[]},C=[],k=[],L=this.get("groupMarkers");n.isArray(r.fill.color)&&(y=r.fill.color.concat()),n.isArray(r.border.color)&&(b=r.border.color.concat()),this._createMarkerCache(),T>this.get("width")&&(p=this.get("width")/T,i*=p,i=Math.max(i,1));if(!x){w=h[d-1],E=w.get("negativeBaseValues"),S=w.get("positiveBaseValues");if(!E||!S)x=!0,S=[],E=[]}else E=[],S=[];this.set("negativeBaseValues",E),this.set("positiveBaseValues",S);for(a=0;a<f;++a){m=o[a],l=u[a];if(!t(l)||!t(m)){x&&(E[a]=this._bottomOrigin,S[a]=this._bottomOrigin),this._markers.push(null);continue}x?(s=Math.abs(this._bottomOrigin-l),l<this._bottomOrigin?(S[a]=l,E[a]=this._bottomOrigin):l>this._bottomOrigin?(S[a]=this._bottomOrigin,E[a]=l,l-=s):(S[a]=l,E[a]=l)):l>this._bottomOrigin?(l+=E[a]-this._bottomOrigin,s=l-E[a],E[a]=l,l-=s):l<=this._bottomOrigin&&(l=S[a]-(this._bottomOrigin-l),s=S[a]-l,S[a]=l),!isNaN(s)&&s>0?(m-=i/2,L?(N.width[a]=i,N.height[a]=s,C.push(m),k.push(l)):(r.width=i,r.height=s,r.x=m,r.y=l,y&&(r.fill.color=y[a%y.length]),b&&(r.border.color=b[a%b.length]),g=this.getMarker(r,v,a))):L||this._markers.push(null)}L?this._createGroupMarker({fill:r.fill,border:r.border,dimensions:N,xvalues:C,yvalues:k,shape:r.shape}):this._clearMarkerCache()},updateMarkerState:function(t,r){if(this._markers&&this._markers[r]){var i,s,o=this._getState(t),u=this.get("xcoords"),a=this._markers[r],f=0,l,c;i=this.get("styles").marker,f=i.width*.5,s=o=="off"||!i[o]?e.clone(i):e.clone(i[o]),s.height=a.get("height"),s.x=u[r]-f,s.y=a.get("y"),s.id=a.get("id"),l=s.fill.color,c=s.border.color,n.isArray(l)?s.fill.color=l[r%l.length]:s.fill.color=this._getItemColor(s.fill.color,r),n.isArray(c)?s.border.color=c[r%c.length]:s.border.color=this._getItemColor(s.border.color,r),a.set(s)}},_getPlotDefaults:function(){var e={fill:{type:"solid",alpha:1,colors:null,alphas:null,ratios:null},border:{weight:0,alpha:1},width:24,height:24,shape:"rect",padding:{top:0,left:0,right:0,bottom:0}};return e.fill.color=this._getDefaultColor(this.get("graphOrder"),"fill"),e.border.color=this._getDefaultColor(this.get("graphOrder"),"border"),e}},{ATTRS:{type:{value:"stackedColumn"},negativeBaseValues:{value:null},positiveBaseValues:{value:null}}})},"3.9.0",{requires:["series-stacked","series-column"]});
