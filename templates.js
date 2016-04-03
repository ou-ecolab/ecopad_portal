!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["tmpl-ecopad"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,t,e){return'<table class="table table-bordered" style="margin-bottom:3px;">\n                <tbody>\n                <tr>\n                    <td class="col-md-2">Task <br><br> Model</td>\n                    <td > \n                        <div class="form-group input-sm col-sm-6">\n                        <select id="task" class="form-control input-sm">\n                            <option value="simulation">Simulation</option>\n                            <option value="DA">Data Assimilation</option>\n                            <option value="forcasting">Forecasting</option>\n                        </select>\n                        <select id="Model" class="form-control input-sm" >\n                            <option value="teco_spruce">TECO Spruce</option>\n                        </select>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Initial Parameters</td>\n                    <td colspan="2" class="form-group">\n                        <div class="col-sm-6">\n                          <button id="setModelParameter" class="btn btn-primary-outline " type="button" >Set Initial Parameters</button>\n                          <button id="runModel" class="btn btn-info-outline " type="button" >Run Model</button>\n                        </div>\n                    </td>\n                </tr>\n                <tr id="init_data" class="hidden">\n                    <td>Initialize Data</td>\n                    <td colspan="2">\n                        <button aria-disabled="false" role="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" id="fopener" type="button"><span class="ui-button-text">Simulation Weather Years</span></button><br><br>\n                    </td>\n                </tr>\n                <tr style="display: none;" id="init_forcast" class="fdata">\n                      <td>Forecast  Data</td>\n                      <td colspan="2">\n                          <button style="width: 217px;" aria-disabled="false" role="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" id="fyr_opener" type="button"><span class="ui-button-text">Forcasting Weather Years</span></button>\n                      </td>\n                  </tr>\n                <tr id="mw" class="hidden">\n                    <td><input id="mod_weather" value="mod_weather" type="checkbox">&nbsp;Modify Weather</td>\n                    <td colspan="3"><input id="mod_w_txt" style="width: 90%; display: none;" value="{\'T_air\':[(\'add\',0)]}" type="text">\n                    <button aria-disabled="false" role="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" style="display: none;" id="mw_opener" type="button"><span class="ui-button-text">Help</span></button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <div id=\'task_result\'></div>\n'},useData:!0}),l["tmpl-status"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,t,e){var o,s=n.helperMissing,i="function",r=a.escapeExpression;return'<img src="check.png" height="20" width="20" style="display:'+r((o=null!=(o=n.success_display||(null!=l?l.success_display:l))?o:s,typeof o===i?o.call(l,{name:"success_display",hash:{},data:e}):o))+';margin-left:1px;margin-right:2px;"><img src="spinner.gif" height="20" width="20" style="display:'+r((o=null!=(o=n.progress_display||(null!=l?l.progress_display:l))?o:s,typeof o===i?o.call(l,{name:"progress_display",hash:{},data:e}):o))+';margin-left:1px;"><span style="margin-left:5px;">'+r((o=null!=(o=n.status||(null!=l?l.status:l))?o:s,typeof o===i?o.call(l,{name:"status",hash:{},data:e}):o))+"</span>\n"},useData:!0}),l["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,t,e){var o,s=n.helperMissing,i="function",r=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+r((o=null!=(o=n.result||(null!=l?l.result:l))?o:s,typeof o===i?o.call(l,{name:"result",hash:{},data:e}):o))+"');return false;\" >"+r((o=null!=(o=n.task_name||(null!=l?l.task_name:l))?o:s,typeof o===i?o.call(l,{name:"task_name",hash:{},data:e}):o))+"</a></td><td>"+r((o=null!=(o=n.timestamp||(null!=l?l.timestamp:l))?o:s,typeof o===i?o.call(l,{name:"timestamp",hash:{},data:e}):o))+"</td><td>"+r((n.json_metatags||l&&l.json_metatags||s).call(l,null!=l?l.tags:l,{name:"json_metatags",hash:{},data:e}))+"</td></tr>\n"},useData:!0}),l["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,t,e){var o,s=n.helperMissing,i="function",r=a.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+r((o=null!=(o=n.gravator_url||(null!=l?l.gravator_url:l))?o:s,typeof o===i?o.call(l,{name:"gravator_url",hash:{},data:e}):o))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+r((o=null!=(o=n.username||(null!=l?l.username:l))?o:s,typeof o===i?o.call(l,{name:"username",hash:{},data:e}):o))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+r((o=null!=(o=n.name||(null!=l?l.name:l))?o:s,typeof o===i?o.call(l,{name:"name",hash:{},data:e}):o))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+r((o=null!=(o=n.email||(null!=l?l.email:l))?o:s,typeof o===i?o.call(l,{name:"email",hash:{},data:e}):o))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+r((o=null!=(o=n.csrftoken||(null!=l?l.csrftoken:l))?o:s,typeof o===i?o.call(l,{name:"csrftoken",hash:{},data:e}):o))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+r((o=null!=(o=n.first_name||(null!=l?l.first_name:l))?o:s,typeof o===i?o.call(l,{name:"first_name",hash:{},data:e}):o))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+r((o=null!=(o=n.last_name||(null!=l?l.last_name:l))?o:s,typeof o===i?o.call(l,{name:"last_name",hash:{},data:e}):o))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+r((o=null!=(o=n.email||(null!=l?l.email:l))?o:s,typeof o===i?o.call(l,{name:"email",hash:{},data:e}):o))+'">\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+r((o=null!=(o=n.csrftoken||(null!=l?l.csrftoken:l))?o:s,typeof o===i?o.call(l,{name:"csrftoken",hash:{},data:e}):o))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0}),l["tmpl-workflow"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,t,e){var o,s=n.helperMissing,i="function",r=a.escapeExpression;return'     <div>    \n        <form id="parameters" class="form-stacked">\n            <fieldset>\n            <div class="col-sm-3.5" style="float:left">\n                <div class="form-group hidden">\n                    <label for="latitude">Latitude</label>\n                    <input type="latitude" name="latitude" class="form-control input-sm"  id="latitude" value="'+r((o=null!=(o=n.lat||(null!=l?l.lat:l))?o:s,typeof o===i?o.call(l,{name:"lat",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group hidden">\n                    <label for="longitude"> Longitude </label>\n                    <input type="longitude" name="longitude" class="form-control input-sm" id="longitude" value="'+r((o=null!=(o=n.longitude||(null!=l?l.longitude:l))?o:s,typeof o===i?o.call(l,{name:"longitude",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="wsmax"> Maximum soil water (wsmax) </label>\n                    <input type="wsmax" name="wsmax" class="form-control input-sm" id="wsmax" value="'+r((o=null!=(o=n.wsmax||(null!=l?l.wsmax:l))?o:s,typeof o===i?o.call(l,{name:"wsmax",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="wsmin"> Minimum soil water (wsmin) </label>\n                    <input type="wsmin" name="wsmin" class="form-control input-sm" id="wsmin" value="'+r((o=null!=(o=n.wsmin||(null!=l?l.wsmin:l))?o:s,typeof o===i?o.call(l,{name:"wsmin",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="LAIMAX"> Maximum Leaf Area Index (LAIMAX) </label>\n                    <input type="LAIMAX" name="LAIMAX" class="form-control input-sm" id="LAIMAX" value="'+r((o=null!=(o=n.LAIMAX||(null!=l?l.LAIMAX:l))?o:s,typeof o===i?o.call(l,{name:"LAIMAX",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="LAIMIN"> Minimum Leaf Area Index (LAIMIN) </label>\n                    <input type="LAIMIN" name="LAIMIN" class="form-control input-sm" id="LAIMIN" value="'+r((o=null!=(o=n.LAIMIN||(null!=l?l.LAIMIN:l))?o:s,typeof o===i?o.call(l,{name:"LAIMIN",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="rdepth"> Root Depth (rdepth) </label>\n                    <input type="rdepth" name="rdepth" class="form-control input-sm" id="rdepth" value="'+r((o=null!=(o=n.rdepth||(null!=l?l.rdepth:l))?o:s,typeof o===i?o.call(l,{name:"rdepth",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="Rootmax"> Maximum root biomass (Rootmax) </label>\n                    <input type="Rootmax" name="Rootmax" class="form-control input-sm" id="Rootmax" value="'+r((o=null!=(o=n.Rootmax||(null!=l?l.Rootmax:l))?o:s,typeof o===i?o.call(l,{name:"Rootmax",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="Stemmax"> Maximum Stem Biomass (Stemmax) </label>\n                    <input type="Stemmax" name="Stemmax" class="form-control input-sm" id="Stemmax" value="'+r((o=null!=(o=n.Stemmax||(null!=l?l.Stemmax:l))?o:s,typeof o===i?o.call(l,{name:"Stemmax",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="SapR"> Proportion of Sapwood in Root (SapR) </label>\n                    <input type="SapR" name="SapR" class="form-control input-sm" id="SapR" value="'+r((o=null!=(o=n.SapR||(null!=l?l.SapR:l))?o:s,typeof o===i?o.call(l,{name:"SapR",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="SapS"> Proportion of Sapwood in Stem (SapS) </label>\n                    <input type="SapS" name="SapS" class="form-control input-sm" id="SapS" value="'+r((o=null!=(o=n.SapS||(null!=l?l.SapS:l))?o:s,typeof o===i?o.call(l,{name:"SapS",hash:{},data:e}):o))+'">\n                </div>\n		<div class="form-group">\n                    <label for="SLA"> Specific Leaf Area (SLA) </label>\n                    <input type="SLA" name="SLA" class="form-control input-sm" id="SLA" value="'+r((o=null!=(o=n.SLA||(null!=l?l.SLA:l))?o:s,typeof o===i?o.call(l,{name:"SLA",hash:{},data:e}):o))+'">\n                </div>\n                <div class="form-group">\n                    <label for="GLmax"> Maximum Leaf Growth Rate (GLmax) </label>\n                    <input type="GLmax" name="GLmax" class="form-control input-sm" id="GLmax" value="'+r((o=null!=(o=n.GLmax||(null!=l?l.GLmax:l))?o:s,typeof o===i?o.call(l,{name:"GLmax",hash:{},data:e}):o))+'">\n                </div>\n	    </div> \n\n            <div class="span1" style="float:left;COLOR:white;">.</div>\n            <div class="col-sm-3.5" style="float:left">\n                <div class="form-group">\n                    <label for="GRmax"> Maximum Root Growth Rate (GRmax) </label>\n                    <input type="GRmax" name="GRmax" class="form-control input-sm" id="GRmax" value="'+r((o=null!=(o=n.GRmax||(null!=l?l.GRmax:l))?o:s,typeof o===i?o.call(l,{name:"GRmax",hash:{},data:e}):o))+'">\n                </div>\n                <div class="form-group">\n                    <label for="Gsmax"> Maximum Stem Growth Rate (Gsmax) </label>\n                    <input type="Gsmax" name="Gsmax" class="form-control input-sm" id="Gsmax" value="'+r((o=null!=(o=n.Gsmax||(null!=l?l.Gsmax:l))?o:s,typeof o===i?o.call(l,{name:"Gsmax",hash:{},data:e}):o))+'">\n                </div>\n                <div class="form-group">\n                    <label for="stom_n"> Stoma Number (stom_n) </label>\n                    <input type="stom_n" name="stom_n" class="form-control input-sm" id="stom_n" value="'+r((o=null!=(o=n.stom_n||(null!=l?l.stom_n:l))?o:s,typeof o===i?o.call(l,{name:"stom_n",hash:{},data:e}):o))+'">\n                </div>\n                <div class="form-group">\n                    <label for="a1"> a1 coefficient </label>\n                    <input type="a1" name="a1" class="form-control input-sm" id="a1" value="'+r((o=null!=(o=n.a1||(null!=l?l.a1:l))?o:s,typeof o===i?o.call(l,{name:"a1",hash:{},data:e}):o))+'">\n                </div>\n                <div class="form-group">\n                    <label for="Ds0"> Ds0 coefficient </label>\n                    <input type="Ds0" name="Ds0" class="form-control input-sm" id="Ds0" value="'+r((o=null!=(o=n.Ds0||(null!=l?l.Ds0:l))?o:s,typeof o===i?o.call(l,{name:"Ds0",hash:{},data:e}):o))+'">\n                </div>                \n\n		<div class="form-group">\n                    <label for="Vcmx0"> Maximum rate of Carboxylation (vcmx0) </label>\n                    <input type="Vcmx0" name="Vcmx0" class="form-control input-sm" id="Vcmx0" value="'+r((o=null!=(o=n.Vcmx0||(null!=l?l.Vcmx0:l))?o:s,typeof o===i?o.call(l,{name:"Vcmx0",hash:{},data:e}):o))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="extkU"> extkU </label>\n                    <input type="extkU" name="extkU" class="form-control input-sm" id="extkU" value="'+r((o=null!=(o=n.extkU||(null!=l?l.extkU:l))?o:s,typeof o===i?o.call(l,{name:"extkU",hash:{},data:e}):o))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="xfang"> Coefficient in Photosythesis Subroutine </label>\n                    <input type="xfang" name="xfang" class="form-control input-sm" id="xfang" value="'+r((o=null!=(o=n.xfang||(null!=l?l.xfang:l))?o:s,typeof o===i?o.call(l,{name:"xfang",hash:{},data:e}):o))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="alpha"> Light use efficiency(alpha) </label>\n                    <input type="alpha" name="alpha" class="form-control input-sm" id="alpha" value="'+r((o=null!=(o=n.alpha||(null!=l?l.alpha:l))?o:s,typeof o===i?o.call(l,{name:"alpha",hash:{},data:e}):o))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="Tau_Leaf"> Turnover rate of foliage pool (Tau_Leaf)</label>\n                    <input type="Tau_Leaf" name="Tau_Leaf" class="form-control input-sm" id="Tau_Leaf" value="'+r((o=null!=(o=n.Tau_Leaf||(null!=l?l.Tau_Leaf:l))?o:s,typeof o===i?o.call(l,{name:"Tau_Leaf",hash:{},data:e}):o))+'">\n               </div>  \n		<div class="form-group">\n                    <label for="Tau_Wood"> Turnover rate of woody pool (Tau_Wood) </label>\n                    <input type="Tau_Wood" name="Tau_Wood" class="form-control input-sm" id="Tau_Wood" value="'+r((o=null!=(o=n.Tau_Wood||(null!=l?l.Tau_Wood:l))?o:s,typeof o===i?o.call(l,{name:"Tau_Wood",hash:{},data:e}):o))+'">\n               </div>  \n            </div>\n            <div class="span1" style="float:left;COLOR:white;">.</div>\n            <div class="col-sm-3.5" style="float:left">\n               <div class="form-group">\n                    <label for="Tau_Root"> Turnover rate of root pool (Tau_Root) </label>\n                    <input type="Tau_Root" name="Tau_Root" class="form-control input-sm" id="Tau_Root" value="'+r((o=null!=(o=n.Tau_Root||(null!=l?l.Tau_Root:l))?o:s,typeof o===i?o.call(l,{name:"Tau_Root",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_F"> Turnover rate of fine-root pool (Tau_F) </label>\n                    <input type="Tau_F" name="Tau_F" class="form-control input-sm" id="Tau_F" value="'+r((o=null!=(o=n.Tau_F||(null!=l?l.Tau_F:l))?o:s,typeof o===i?o.call(l,{name:"Tau_F",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_C"> Turnover rate of course-root pool (Tau_C) </label>\n                    <input type="Tau_C" name="Tau_C" class="form-control input-sm" id="Tau_C" value="'+r((o=null!=(o=n.Tau_C||(null!=l?l.Tau_C:l))?o:s,typeof o===i?o.call(l,{name:"Tau_C",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_Micro"> Turnover rate of microbial pool (Tau_Micro) </label>\n                    <input type="Tau_Micro" name="Tau_Micro" class="form-control input-sm" id="Tau_Micro" value="'+r((o=null!=(o=n.Tau_Micro||(null!=l?l.Tau_Micro:l))?o:s,typeof o===i?o.call(l,{name:"Tau_Micro",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_SlowSOM"> Turnover rate of slow SOM (Tau_SlowSOM) </label>\n                    <input type="Tau_SlowSOM" name="Tau_SlowSOM" class="form-control input-sm" id="Tau_SlowSOM" value="'+r((o=null!=(o=n.Tau_SlowSOM||(null!=l?l.Tau_SlowSOM:l))?o:s,typeof o===i?o.call(l,{name:"Tau_SlowSOM",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_Passive"> Turnover rate Passive Soil(Tau_Passive) </label>\n                    <input type="Tau_Passive" name="Tau_Passive" class="form-control input-sm" id="Tau_Passive" value="'+r((o=null!=(o=n.Tau_Passive||(null!=l?l.Tau_Passive:l))?o:s,typeof o===i?o.call(l,{name:"Tau_Passive",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="gddonset"> Growing degree days (gddonset) </label>\n                    <input type="gddonset" name="gddonset" class="form-control input-sm" id="gddonset" value="'+r((o=null!=(o=n.gddonset||(null!=l?l.gddonset:l))?o:s,typeof o===i?o.call(l,{name:"gddonset",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Q10"> Q10 </label>\n                    <input type="Q10" name="Q10" class="form-control input-sm" id="Q10" value="'+r((o=null!=(o=n.Q10||(null!=l?l.Q10:l))?o:s,typeof o===i?o.call(l,{name:"Q10",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Rl0"> Rl0 </label>\n                    <input type="Rl0" name="Rl0" class="form-control input-sm" id="Rl0" value="'+r((o=null!=(o=n.Rl0||(null!=l?l.Rl0:l))?o:s,typeof o===i?o.call(l,{name:"Rl0",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Rs0"> Rs0 </label>\n                    <input type="Rs0" name="Rs0" class="form-control input-sm" id="Rs0" value="'+r((o=null!=(o=n.Rs0||(null!=l?l.Rs0:l))?o:s,typeof o===i?o.call(l,{name:"Rs0",hash:{},data:e}):o))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Rr0"> Rr0 </label>\n                    <input type="Rr0" name="Rr0" class="form-control input-sm" id="Rr0" value="'+r((o=null!=(o=n.Rr0||(null!=l?l.Rr0:l))?o:s,typeof o===i?o.call(l,{name:"Rr0",hash:{},data:e}):o))+'">\n               </div>\n            </div>\n            </fieldset>\n        </form>\n    \n     </div>\n\n'},useData:!0})}();
