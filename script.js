const _0xmonths=[{name:"January",days:31},{name:"February",days:28},{name:"March",days:31},{name:"April",days:30},{name:"May",days:31},{name:"June",days:30},{name:"July",days:31},{name:"August",days:31},{name:"September",days:30},{name:"October",days:31},{name:"November",days:30},{name:"December",days:31}];function _0xcalendar(_0xstart,_0xyear){const _0xcal=document.getElementById("calendar");_0xcal.innerHTML="";_0xmonths[1].days=(_0xyear%4===0&&_0xyear%100!==0)||_0xyear%400===0?29:28;let _0xstartDay=_0xstart;for(let _0xi=0;_0xi<25;_0xi++){const _0xcell=document.createElement("div");if(_0xi===12||_0xi===13){_0xcell.className="empty";}else{const _0xindex=_0xi>13?_0xi-2:_0xi;const _0xmonth=_0xmonths[_0xindex];const _0xbox=document.createElement("div");_0xbox.className="month-box";_0xbox.addEventListener("click",()=>{window.location.href=`month-details.html?month=${_0xindex}&year=${_0xyear}&startDay=${_0xstart}`});const _0xheader=document.createElement("div");_0xheader.className="month-header";_0xheader.textContent=_0xmonth.name;const _0xweek=document.createElement("div");_0xweek.className="week-days";["Su","Mo","Tu","We","Th","Fr","Sa"].forEach(_0xday=>{const _0xdayElem=document.createElement("div");_0xdayElem.textContent=_0xday;_0xweek.appendChild(_0xdayElem);});const _0xdays=document.createElement("div");_0xdays.className="days";for(let _0xj=0;_0xj<_0xstartDay;_0xj++){const _0xempty=document.createElement("div");_0xempty.className="empty";_0xdays.appendChild(_0xempty);}for(let _0xj=1;_0xj<=_0xmonth.days;_0xj++){const _0xdayElem=document.createElement("div");_0xdayElem.textContent=_0xj;const _0xdayOfWeek=(_0xstartDay+_0xj-1)%7;if(_0xdayOfWeek===0){_0xdayElem.style.color="red";}_0xdays.appendChild(_0xdayElem);}_0xstartDay=(_0xstartDay+_0xmonth.days)%7;_0xbox.appendChild(_0xheader);_0xbox.appendChild(_0xweek);_0xbox.appendChild(_0xdays);_0xcell.appendChild(_0xbox);}_0xcal.appendChild(_0xcell);}}function _0xtime(){const _0xnow=new Date();document.getElementById("currentTime").textContent=_0xnow.toLocaleTimeString();}setInterval(_0xtime,1e3);_0xtime();const _0xstartDay=1,_0xyear=2024;_0xcalendar(_0xstartDay,_0xyear);
