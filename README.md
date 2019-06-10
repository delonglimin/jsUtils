## 安装
```javascript
    npm install fe_common-utils
```
## 导入
```javascript
    import _ from 'fe_common_utils'
```
## api

 1. TypeFn (判断操作)
    - isString(object) //是否字符串
    - isNumber(object) //是否数字
    - isBoolean(object) //是否boolean
    - isFunction(object) //是否函数
    - isNull(object) //是否为null
    - isUndefined(object) //是否undefined
    - isObj(object) //是否对象
    - isArray(object) //是否数组
    - isDate(object) //是否时间
    - isRegExp(object) //是否正则
    - isError(object) //是否错误对象
    - isSymbol(object) //是否Symbol函数
    - isPromise(object) //是否Promise对象
    - isSet(object) //是否Set对象
    - isFalse(object) //
    - isTrue(object) //
    - isIos() //
    - isPC() //
    - browserType() //
    - checkStr(string,type) //type:'phone','tel(座机)','card(身份证)','pwd（密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线）','postal（邮编）','QQ','email','money（金额(小数点2位)）','URL','IP','date','number','english','lower','upper','HTML'
 2. DateFn (时间操作)
   - formatTime(time,fomat)
   - getMonths(time, len, direction)//方向：1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
   - getDays(time, len, diretion) //方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 3
   - formatHMS(s)//formatHMS(3610)  -> 1h0m10s
   - getMonthOfDay (time) //获取某月有多少天
   - getYearOfDay (time)//获取某年有多少天
   - getFirstDayOfYear (time)//获取某年的第一天
   - getLastDayOfYear (time)//获取某年最后一天
   - getDayOfYear (time)//获取某个日期是当年中的第几天
   - getDayOfYearWeek (time)//获取某个日期在这一年的第几周
 5. NumberFn(数字操作)
    - random (min, max)//随机数范围
    - numberToChinese (num)//将阿拉伯数字翻译成中文的大写数字
    - changeToChinese (Num)//将数字转换为大写金额
    - 
 6. Http(请求操作)
    - ajax(setting)//{method,url,async,dataType,data,success,error}
    - fetch(url, setting) return promise
 7. DomFn(DOM操作)
    - $ (selector)//#、.
    - hasClass (ele, name)//检测类名
    - addClass (ele, name)//添加类名
    - removeClass (ele, name)//删除类名
    - replaceClass (ele, newName, oldName)//替换类名
    - siblings (ele)//获取兄弟节点
    - getByStyle (obj,name)//获取行间样式属性
 8. StorageFn(储存操作)
    - setCookie (name, value, day) //设置cookie
    - getCookie (name)//获取cookie
    - removeCookie (name)//删除cookie
    - setLocal(key, val)//设置localStorage
    - getLocal(key) //获取localStorage
    - removeLocal(key)//移除localStorage
    - clearLocal()//移除所有localStorage
    - setSession(key, val)//设置sessionStorage
    - getSession(key)//获取sessionStorage
    - removeSession(key)//移除sessionStorage
    - clearSession()//移除所有sessionStorage
 9. OtherFn(其它操作)
    - deepClone (obj)//深度克隆
    - debounce(fn, delay, immediate)//防抖动
    - throttle (func,delay)//节流
    - photoCompress(file, obj, cb)//图片压缩
    - getURL(name)//获取网址参数
    - getUrlAllParams (url)//获取全部url参数,并转换成json对象
    - delParamsUrl(url, name)//删除url指定参数，返回url
    - getRandomColor ()//获取十六进制随机颜色
    - imgLoadAll(arr,callback)//图片加载
    - loadAudio(src, callback)//音频加载
    - domToStirng(htmlDOM)//DOM转字符串
    - stringToDom(htmlString)//字符串转DOM
    - setCursorPosition (dom,val,posLen)//光标所在位置插入字符，并设置光标位置
    -  insertAtCursor(dom, val)//光标所在位置插入字符
    
    
