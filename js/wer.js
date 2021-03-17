  function weather(wea_txt,app_box){
           var today = ""
           var _time_weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期日"];
           var wer_box = []
           var wer_array = [
              {
                name:"晴",
                class:"u-state1",
                tips:"带上亲们去踏青是个不错的选择，找个有山有水有草地的地方，尽情的放飞自己吧。"
              },
              {
                name:"少云",
                class:"u-state2",
                tips:"喜欢垂钓的朋友，这样的天气再适合不过了，赶紧找个适合垂钓的地方吧！当然你还可以选择和喜欢的人一起去游山玩水，这样的天气最适合室外活动了。"
              },
              {
                name:"晴间多云",
                class:"u-state2",
                tips:"这种比较温暖的天气下，非常适合大家结伴出游，如果你还在家，不如叫上几个小伙伴一起去亲近大自然吧！"
              },
              {
                name:"多云",
                class:"u-state2",
                tips:"可以选择打打篮球，以及其它比较适合户外活动，但是尽量不要早上或傍晚到户外或山多的地方做运动。"
              },
              {
                name:"阴",
                class:"u-state3",
                tips:"这样地天气最好进行室内的一些活动比较好，比如：听歌、画画写字、看书或在家做做家务也不错，若真的很想做运动那不妨做做俯卧撑或仰卧起坐。"
              },
              {
                name:"有风",
                class:"u-state4",
                tips:"这个时候你可以找一个适合的地方，吹一吹风，放松一下平时紧张的心情，也可以约上三两好友一起唠嗑。"
              },
              {
                name:"平静",
                class:"u-state4",
                tips:"这个时候，还是在家里睡睡觉吧，如果你没有更好的选择。"
              },
              {
                name:"微风",
                class:"u-state4",
                tips:"微风绵绵，身上就想睡觉，甚是舒服，适合楼下慢跑锻炼身体。"
              },
              {
                name:"和风",
                class:"u-state4",
                tips:"和风如果没有细雨，建议饭后出去散散步，活动活动有助于消化。"
              },
              {
                name:"清风",
                class:"u-state4",
                tips:"这风吹在身上还是比较舒服的，如果您没有更好的选择，可以出去骑骑车或者到广场上面跳跳舞。"
              },
              {
                name:"强风/劲风",
                class:"u-state4",
                tips:"风比较大，外面的世界太危险，还是待在家里看看电视，做做室内运动吧。"
              },
              {
                name:"疾风",
                class:"u-state4",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"大风",
                class:"u-state4",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"烈风",
                class:"u-state4",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"风暴",
                class:"u-state5",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"狂风暴",
                class:"u-state5",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"飓风",
                class:"u-state5",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"热带风暴",
                class:"u-state5",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"霾",
                class:"u-state6",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"中度霾",
                class:"u-state6",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"重度霾",
                class:"u-state6",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"严重霾",
                class:"u-state6",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"阵雨",
                class:"u-state7",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"雷阵雨",
                class:"u-state8",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"雷阵雨并伴有冰雹",
                class:"u-state9",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"小雨",
                class:"u-state10",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"中雨",
                class:"u-state11",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"大雨",
                class:"u-state12",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"暴雨",
                class:"u-state13",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"大暴雨",
                class:"u-state14",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"特大暴雨",
                class:"u-state15",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"强阵雨",
                class:"u-state16",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"强雷阵雨",
                class:"u-state17",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"极端降雨",
                class:"u-state18",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"毛毛雨/细雨",
                class:"u-state19",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"雨",
                class:"u-state10",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"小于-中雨",
                class:"u-state11",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"中雨-大雨",
                class:"u-state12",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"大雨-暴雨",
                class:"u-state13",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"暴雨-大暴雨",
                class:"u-state14",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"大暴雨-特大暴雨",
                class:"u-state15",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"雨雪天气",
                class:"u-state20",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"雨夹雪",
                class:"u-state21",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"阵雨加雪",
                class:"u-state22",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"冻雨",
                class:"u-state23",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"阵雪",
                class:"u-state24",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"小雪",
                class:"u-state25",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"中雪",
                class:"u-state26",
                tips:"不适合户外运动，建议宅在家里，如果你对打雪仗甚是喜欢的话，可以约上几个好友去打打，当然前提是他们愿意。"
              },
              {
                name:"大雪",
                class:"u-state27",
                tips:"不适合户外运动，建议宅在家里，如果你对打雪仗甚是喜欢的话，可以约上几个好友去打打，当然前提是他们愿意。"
              },
              {
                name:"暴雪",
                class:"u-state28",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"小雪-中雪",
                class:"u-state29",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"中雪-大雪",
                class:"u-state30",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"大雪-暴雪",
                class:"u-state31",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"浮尘",
                class:"u-state32",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"扬沙",
                class:"u-state33",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"沙尘暴",
                class:"u-state34",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"强沙尘暴",
                class:"u-state35",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"龙卷风",
                class:"u-state36",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"雾",
                class:"u-state37",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"浓雾",
                class:"u-state38",
                tips:"不适合户外运动，建议宅在家里，开车的朋友要注意安全。"
              },
              {
                name:"强浓雾",
                class:"u-state39",
                tips:"不适合户外运动，建议宅在家里，开车的朋友要注意安全。"
              },
              {
                name:"轻雾",
                class:"u-state40",
                tips:"建议宅在家里，开车的朋友要注意安全。"
              },
              {
                name:"大雾",
                class:"u-state41",
                tips:"建议宅在家里，开车的朋友要注意安全。"
              },
              {
                name:"特强浓雾",
                class:"u-state42",
                tips:"建议宅在家里，开车的朋友要注意安全。"
              },
              {
                name:"热",
                class:"u-state43",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"冷",
                class:"u-state44",
                tips:"不适合户外运动，建议宅在家里。"
              },
              {
                name:"未知",
                class:"u-state45",
                tips:"根据当天的实际情况，作出自己的选择。"
              },
            ]
    AMap.plugin('AMap.Weather', function() {
        var weather = new AMap.Weather();
        //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
        weather.getLive(wea_txt, function(err, data) {
            console.log(111)
            if (!err) {
              var _time = data.reportTime
              var _time_arr = _time.split(" ")
              var _time_week = new Date;
              var week = _time_week.getDay();
              today = _time_arr[0]
              let weater_html = `<div class="g-wer-20">
                                        <div class="m-wer-20 clearfix">
                                          <div class="m-werl-20 f-fl" id="wer_id">
                                            <h3><span id="u-wer-city">${data.city}</span><em id="u-wer-time">${_time_arr[1]}发布</em></h3>
                                            <span class="u-wer-time" id="u-wer-week">${_time_arr[0]}&nbsp;${_time_weeks[week]}</span>
                                            <span class="u-wer-cel" id="u-wer-wendu">${data.temperature}</span><span class="u-wer-state"><em id="u-state-icon" class="u-state"></em><b id="u-wer-txt">${data.weather}</b></span>
                                            <span class="u-wer-par clearfix">
                                              <em class="u-wer-dir" id="u-wer-dir">${data.windDirection}</em><em class="u-wer-speed" id="u-wer-seed">${data.windPower}</em><em class="u-wer-hum" id="u-wer-hum">${data.humidity}</em>
                                            </span>
                                          </div>
                                          <div class="m-werr-20 f-fl">
                                            <h3>当地未来几天的天气情况</h3>
                                            <ul class="m-wer-list clearfix" id="u-wer-list"></ul>
                                          </div>
                                        </div>
                                        <div class="f-wer-20">
                                          <span>
                                            <b>友情提示</b><p id="f-tips-txt"></p>
                                          </span>
                                        </div>
                                      </div>
                                </div>`
              app_box.append(weater_html)

              //未来4天天气预报
              weather.getForecast(wea_txt, function(err, data) {
                  if (err) {return;}
                  for (var i = 0,dayWeather; i < data.forecasts.length; i++) {
                      dayWeather = data.forecasts[i];
                      var reg = new RegExp("/","g");
                      wer_box.push(dayWeather.dayWeather)
                      var html = '<li class="u-star1 u-wea'+ i +'">'+
                                    '<span class="u-today">' + dayWeather.date.replace(reg,'/') + '</span>'+
                                    '<span class="u-wer-time2">' + _time_weeks[dayWeather.week] + '</span>'+
                                    '<span id="u-state-icon'+ i +'" class="u-state"></span>'+
                                    '<span class="u-wer-txt">' + dayWeather.dayWeather + '</span>'+
                                    '<span class="u-wer-feng">' + dayWeather.dayWindDir + "&nbsp;"+ dayWeather.dayWindPower +'级</span>'+
                                  '</li>'
              // console.log(dayWeather.week)
              $("#u-wer-list").append(html)
              if( dayWeather.date == today ){
                $(".u-today").html("今天")
              } 
                  }
                  $("#u-wer-list").find("li").each(function(){
                    var _txt = $(this).find(".u-wer-txt").text()
                    wer_zy(_txt,$(this).find(".u-state"))
                  })
              });
              wer_box.push(data.weather)
              wer_yq(data.weather,$("#u-state-icon"))          
            }else {
              return;
            }
        });

        // console.log(wer_box)
        function wer_zy(wer_box,wer_lab){
          $.each( wer_array, function(i, val) {
              switch (val.name) {
                case wer_box:
                  wer_lab.addClass(val.class)
                  break;
              }
          });
        }
        //友情提醒
         function wer_yq(wer_box,wer_lab){
            $.each( wer_array, function(i, val) {
                switch (val.name) {
                  case wer_box:
                    wer_lab.addClass(val.class)
                    $("#f-tips-txt").html(val.tips)
                    break;
                }
            });
        }
    });
  }