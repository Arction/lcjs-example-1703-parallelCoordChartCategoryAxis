(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const a=s(377),{lightningChart:i,Themes:r,AxisTickStrategies:n}=a,o=i({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ParallelCoordinateChart({theme:r[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Parallel Coordinate Chart Category + Date-Time Axes");fetch(document.head.baseURI+"examples/assets/1703/training-by-shoe-category.json").then((e=>e.json())).then((e=>{const t=["Other","Izumi","Adidas","Mizuno","Brooks","New Balance"];e=e.map((e=>({...e,shoe_brand:t.indexOf(e.shoe_brand),over_5_miles:e.miles_run>5?1:0,after_2020:e.training_date>15778296e5?1:0})));const s={training_date:0,miles_run:1,training_time:2,shoe_brand:3,over_5_miles:4,after_2020:5};o.setAxes(s),e.forEach((e=>o.addSeries({automaticColorIndex:0}).setData(e).setColor((e=>e.setA(60))))),o.setSeriesStrokeThickness(-1),o.setUnselectedSeriesColor((e=>e.setA(10))),o.getAxis(s.shoe_brand).setTickStrategy(n.Empty,(e=>e.setCursorFormatter((e=>t[Math.round(e)]??"")))),t.forEach(((e,t)=>o.getAxis(s.shoe_brand).addCustomTick().setValue(t).setMouseInteractions(!1))),o.getAxis(s.over_5_miles).setTickStrategy(n.Empty,(e=>e.setCursorFormatter((e=>e?"> 5 miles":"< 5 miles")))),o.getAxis(s.over_5_miles).addCustomTick().setValue(0).setMouseInteractions(!1).setLabelAlignment(-1),o.getAxis(s.over_5_miles).addCustomTick().setValue(1).setMouseInteractions(!1).setLabelAlignment(1),o.getAxis(s.after_2020).setTickStrategy(n.Empty,(e=>e.setCursorFormatter((e=>e?"After 2020":"Before 2020")))),o.getAxis(s.after_2020).addCustomTick().setValue(0).setMouseInteractions(!1).setLabelAlignment(-1),o.getAxis(s.after_2020).addCustomTick().setValue(1).setMouseInteractions(!1).setLabelAlignment(1),o.getAxis(s.training_date).setTitle("Training date").setTickStrategy(n.DateTime),o.getAxis(s.miles_run).setTitle("Miles run"),o.getAxis(s.training_time).setTitle("Training duration").setTickStrategy(n.Time),o.getAxis(s.shoe_brand).setTitle("Shoe brand"),o.getAxis(s.over_5_miles).setTitle("Short or long"),o.getAxis(s.after_2020).setTitle("Time period")}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);