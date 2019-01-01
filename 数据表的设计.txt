1.品种表 （breed）
  |     列名     |  数据类型     |  是否为空  |  注释
    breedid          NUMBER(10)            否       品种id
    name             string            否       品种名称
    CREATETIME       date              否       创建时间
    

2.商品表结构（commodity）
  |     列名     |  数据类型     |  是否为空  |  注释
   commodityid      string            否       商品id 
   name             string            否       商品名称
   breedid          NUMBER(10)        否       品种id
   price            number(10,2)      0        价格
   Onsale           number(10,2)      0        优惠价
   Sellwell         number            0        热销度
   logourl          string            是       图片路径
   CREATETIME       date              否       创建时间
   status           int               0        0：正常 1下市

3.商品信息（commoditymessage）
  |     列名     |  数据类型     |  是否为空  |  注释
   commodityid      string            否       商品id 
   pictureurl       string            是        图片路径
   details          BLOB              是        详情描述

4.用户信息（Firm）
  |     列名     |  数据类型     |  是否为空  |  注释
     firmid         string            否       用户id
     name           string            否       用户名
     phone          string            否       电话    
     Headportrait   BLOB              是       头像
     CREATETIME     date              否       创建时间
     modifyTIME     date              否       创建时间
     status         int               0        0：正常 1冻结 2 注销


 
