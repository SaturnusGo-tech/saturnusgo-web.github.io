"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8346],{68140:function(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{A:function(){return i}}),(0,a(82005).e)(i,"populateCommonDb")},28346:function(e,t,a){a.d(t,{diagram:function(){return A}});var i=a(68140),l=a(69673),r=a(23551),n=a(79215),s=a(86360),o=a(82005),c=a(56205),d=a(19600),p=a(72451),h=n.vZ.pie,g={sections:new Map,showData:!1,config:h},u=g.sections,f=g.showData,m=structuredClone(h),x=(0,o.e)(()=>structuredClone(m),"getConfig"),$=(0,o.e)(()=>{u=new Map,f=g.showData,(0,n.ZH)()},"clear"),w=(0,o.e)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,t),s.c.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),b=(0,o.e)(()=>u,"getSections"),S=(0,o.e)(e=>{f=e},"setShowData"),v=(0,o.e)(()=>f,"getShowData"),y={getConfig:x,clear:$,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:w,getSections:b,setShowData:S,getShowData:v},C=(0,o.e)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),T={parse:(0,o.e)(async e=>{let t=await (0,c.Qc)("pie",e);s.c.debug(t),C(t,y)},"parse")},k=(0,o.e)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),D=(0,o.e)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return(0,d.ve)().value(e=>e.value).sort(null)(a)},"createPieArcs"),A={parser:T,db:y,renderer:{draw:(0,o.e)((e,t,a,i)=>{s.c.debug("rendering pie chart\n"+e);let o=i.db,c=(0,n.nV)(),h=(0,r.Rb)(o.getConfig(),c.pie),g=(0,l.P)(t),u=g.append("g");u.attr("transform","translate(225,225)");let{themeVariables:f}=c,[m]=(0,r.VG)(f.pieOuterStrokeWidth);m??=2;let x=h.legendPosition,$=h.textPosition,w=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,b=(0,d.Nb)().innerRadius(185*w).outerRadius(185),S=(0,d.Nb)().innerRadius(185*$).outerRadius(185*$),v=u.append("g");v.append("circle").attr("cx",0).attr("cy",0).attr("r",185+m/2).attr("class","pieOuterCircle");let y=o.getSections(),C=D(y),T=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],k=0;y.forEach(e=>{k+=e});let A=C.filter(e=>"0"!==(e.data.value/k*100).toFixed(0)),O=(0,p.PK)(T).domain([...y.keys()]);v.selectAll("mySlices").data(A).enter().append("path").attr("d",b).attr("fill",e=>O(e.data.label)).attr("class",e=>{let t="pieCircle";return"hover"===h.highlightSlice?t+=" highlightedOnHover":h.highlightSlice===e.data.label&&(t+=" highlighted"),t}),v.selectAll("mySlices").data(A).enter().append("text").text(e=>(e.data.value/k*100).toFixed(0)+"%").attr("transform",e=>"translate("+S.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let M=u.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),R=[...y.entries()].map(([e,t])=>({label:e,value:t})),z=u.selectAll(".legend").data(R).enter().append("g").attr("class","legend");z.append("rect").attr("width",18).attr("height",18).style("fill",e=>O(e.label)).style("stroke",e=>O(e.label)),z.append("text").attr("x",22).attr("y",14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let H=Math.max(...z.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),N=450,F=490,P=22*R.length;switch(x){case"center":z.attr("transform",(e,t)=>"translate("+(-H/2-22)+","+(22*t-22*R.length/2)+")");break;case"top":N+=P,z.attr("transform",(e,t)=>`translate(${-H/2-22}, ${22*t-185})`),v.attr("transform",()=>`translate(0, ${P+22})`);break;case"bottom":N+=P,z.attr("transform",(e,t)=>"translate("+(-H/2-22)+","+(22*t- -207)+")");break;case"left":F+=22+H,z.attr("transform",(e,t)=>"translate(-207,"+(22*t-22*R.length/2)+")"),v.attr("transform",()=>`translate(${H+18+4}, 0)`);break;default:F+=22+H,z.attr("transform",(e,t)=>"translate(216,"+(22*t-22*R.length/2)+")")}let E=M.node()?.getBoundingClientRect().width??0,W=Math.min(0,225-E/2),_=Math.max(F,225+E/2)-W;g.attr("viewBox",`${W} 0 ${_} ${N}`),(0,n.v2)(g,N,_,h.useMaxWidth)},"draw")},styles:k}}}]);