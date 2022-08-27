export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx7199e92cc6b9fd84",
    // 公众号appSecret
    appSecret: "c05c9a2be1aedbd21acec23d2e3efb7b",
    // 模板消息id
    templateId: "MSko-rHLQZvNZ4x4rTQ016JDDAoIPrWwFg640UgUme4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [‘aq_miraitowa’,'fe_polaris'],
     
    // 信息配置
    // 所在省份
    province: "山西",
    // 所在城市
    city: "晋中",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "安老师", "year": "2001", "date": "02-24", "type": 'new'},
      {"name": "董老师", "year": "2001", "date": "07-27", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-05-28",
    // 结婚纪念日
    marryDate: ""
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
