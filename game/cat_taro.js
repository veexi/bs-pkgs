let guests = [];

// 如果 drrr.users 存在，则初始化访客列表
if (drrr && drrr.users) {
    guests = drrr.users.map((x) => x.name);
}
let foods = ["仰望星空","鲱鱼罐头","超辣火鸡面","超熟面包","超超超大盛拌面","活力清燉雞","烤乳鴿","紅燒鯉魚","板蓝根超大盛泡面"]
let desserts = ["焦糖煎饼","苹果蛋糕","櫻桃布丁","水果舒芙蕾","蛋塔","可可","梅酒冰淇淋","馬卡龍","可麗露","雞蛋糕","黑森林","綿花糖酒",
"鳄鱼豆腐脑","桂花糕","威士忌冰淇淋","公主蛋糕","奶油水果蛋白饼","芒果糯米饭","猫山王榴莲布丁","泡芙","龙须糖","双皮奶","納奈莫條",
"法式千层可丽蛋糕","乌姆·阿里","维也纳巧克力杏仁蛋糕","提拉米苏","红酒果冻","糖浆松糕布丁","圣诞面包","沙河蛋糕","萨芭雍","百利芝士蛋糕",
"戚风蛋糕","欧培拉","年轮蛋糕","奶酪蛋糕","慕斯蛋糕","木材蛋糕","玛德莲贝壳蛋糕","果仁糖蛋糕","舒芙里","长崎蜂蜜蛋糕","布朗尼蛋糕",
"波士顿派蛋糕","威士忌布朗尼","薄荷酒巧克力蛋糕","蛋奶酒","蛋酒焦糖布丁","蛋奶酒","蛋酒焦糖布丁","瑞士卷","红糖糍粑","奶酒巧克力覆盆莓慕斯",
"酒冻荔枝慕斯","梅酒戚风蛋糕","驴打滚","櫻桃布丁","水果舒芙蕾","水信玄餅","台式馬卡龍","焦糖爆米花","奶油車輪餅","烤棉花糖","蟹肉罐頭",
"無花果可麗餅","西米露","觀音拿鐵雪糕","咖啡摩卡泡芙","可麗露","珍珠奶茶冰炫風","巧克力金磚塔"]
let drinks =  [
              {
                "name": "绿色蚱蜢",
                "method": "吉发得绿薄荷甜酒30ml、荷兰白可可甜酒30ml、淡奶30ml，在调酒壶中加冰摇合，随后滤入冰镇过的碟形杯内，再用一片薄荷叶放在中心加以装饰。将制作完成的『绿色蚱蜢（Grasshopper）』 "
              },
              {
                "name": "白兰地亚历山大",
                "method": "人头马1738年干邑白兰地45ml、荷兰黑可可甜酒20ml、荷兰白可可甜酒10ml、淡奶25ml，倒入调酒壶中加冰摇合，随后滤入冰镇过的碟形杯内，撒上一些肉豆蔻粉末加以装饰。将制作完成的『白兰地亚历山大(Brandy Alexander)』 "
              },
              {
                "name": "白色俄罗斯",
                "method": "伏特一号伏特加60ml、BéBo咖啡利口酒30ml，在调酒壶中加冰混合，滤入盛满冰块的冰古典杯中，再缓慢加入鲜奶30ml，撒上些许肉豆蔻粉末加以装饰。将制作完成的『白色俄罗斯(White Russian)』 "
              },
              {
                "name": "黑俄罗斯",
                "method": "伏特一号伏特加60ml、BéBo咖啡利口酒22.5ml，在调酒壶中加冰搅匀，滤入盛满冰块的冰古典杯中，再用柠檬片夹住一颗樱桃放在杯沿处加以装饰。将制作完成的『黑俄罗斯(Black Russian)』 "
              },
              {
                "name": "琴费斯",
                "method": "鲁特干金酒45ml、鲜榨柠檬汁22.5ml、浓糖浆12.5ml，在调酒壶中加冰摇合，滤入冰镇过的海波杯内，再倒满苏打水，杯沿挂上一片柠檬片与薄荷叶加以装饰。将制作完成的『琴费斯(Gin Fizz)』 "
              },
              {
                "name": "横滨",
                "method": "鲁特干金酒30ml、鲜榨柳橙汁30ml、坎特一号伏特加15ml、红石榴糖浆10ml，在调酒壶中加冰摇合，滤入用苦艾酒涮过的冰马天尼杯中。将制作完成的『横滨(Yokohama)』 "
              },
              {
                "name": "莫吉托",
                "method": "新鲜薄荷叶14片、哈瓦那俱乐部朗姆酒60ml、鲜榨酸橙汁15ml、浓糖浆10ml、碎冰、苏打水15ml，往柯林杯中加入薄荷叶与糖浆，用捣棒轻压出薄荷香气，倒入朗姆酒与酸橙汁，搅拌一会儿，再加入更多碎冰，最后倒入苏打水。将制作完成的『莫吉托(Mojito)』"
              },
              {
                "name": "莫斯科骡子",
                "method": "坎特一号伏特加60ml、鲜榨酸橙汁15ml、浓糖浆10ml、托马斯·亨利·姜汁啤酒90ml、柠檬片、薄荷枝，倒入伏特加、酸橙汁、浓糖浆，搅拌后倒入姜汁啤酒，并覆上碎冰，最后用柠檬片与薄荷枝加以装饰。将制作完成的『莫斯科骡子(Moscow Mule)』"
              },
              {
                "name": "止痛药",
                "method": "海军朗姆酒45ml、鲜榨菠萝汁90ml、鲜榨橙汁22.5ml、椰子奶油15ml，在调酒壶中加冰摇合，滤入盛满冰块的Tiki杯中，再撒上一些肉豆蔻粉末，用菠萝角挂在杯沿加以装饰。将制作完成的『止痛药(Painkiller)』"
              },
              {
                "name": "玫瑰",
                "method": "马天尼干威末酒60ml、樱桃水30ml、红浆果糖浆5ml，在调酒壶中加冰搅拌，滤入冰镇过的碟形杯中，再用鸡尾酒针刺透一颗樱桃横挂再杯口上。将制作完成的『玫瑰(Rose)』"
              },
              {
                "name": "汽油",
                "method": "金酒45ml、马天尼干威末酒30ml、吉发德黑加仑利口酒15ml、樱桃水5ml，在调酒壶中加冰摇合，滤入冰镇过的碟形杯中，再用鸡尾酒针刺透樱桃斜放入酒杯中加以装饰。将制作完成的『汽油(Gasoline)』"
              },{
                "name": "玛格丽特",
                "method": "龙舌兰60ml、君度橙酒20ml、鲜榨柠檬汁20ml、纯糖浆10ml，在调酒壶中加冰摇合，滤入冰镇过的盐口马天尼杯中，再用一片柠檬挂在杯口加以装饰。将制作完成的『玛格丽特(Margarita)』"
              },
              {
                "name": "僵尸",
                "method": "高浓度朗姆酒30ml、白朗姆酒45ml、香料朗姆酒20ml、法勒南糖浆15ml、鲜榨凤梨汁60ml、鲜榨葡萄柚汁15ml、鲜榨柠檬汁15ml、红石榴糖浆5ml、法国茴箱酒4滴，在调酒壶中加冰摇合，滤掉冰块倒入Tiki杯中。将制作完成的『僵尸(Zombie)』"
              },
              {
                "name": "长岛冰茶",
                "method": "伏特加15ml、琴酒15ml、白朗姆酒15ml、龙舌兰15ml、君度橙酒5ml、鲜榨柠檬汁20ml、纯糖浆15ml、可乐，在调酒壶中加冰摇合，滤入冰镇的司令杯中，再用冰块填充至九分满，加入适量可乐。将制作完成的『长岛冰茶(Long Island Iced Tea)』"
              },
              {
                "name": "白色佳人",
                "method": "琴酒40ml、君度橙酒20ml、蛋白30ml、鲜榨酸橙汁15ml、纯糖浆5ml，在调酒壶中加冰摇合，双重过滤倒入冰镇过的马天尼杯中。将制作完成的『白色佳人(White Lady)』"
              },
              {
                "name": "曼哈顿",
                "method": "波本威士忌60ml、意式甜香艾酒（红）20ml、安格式原味苦精2 dashes，在调酒杯中加冰搅匀，滤掉冰块倒入冰镇过的马天尼杯中，再用鸡尾酒针刺透樱桃与柳橙皮卷，放入酒杯中加以装饰。将制作完成的『曼哈顿(Manhattan)』"
              },
              {
                "name": "花花公子",
                "method": "波本威士忌、肯巴利苦酒、法式甜香艾酒（红）各30ml，在调酒杯中加冰搅匀，滤掉冰块倒入冰镇过的马天尼杯中，再用一片柳橙皮卷放在杯口，部分没入酒液中加以装饰。将制作完成的『花花公子(Boulevardier)』"
              },
              {
                "name": "血腥玛丽",
                "method": "伏特加60ml、番茄汁90ml、鲜榨柠檬汁25ml、纯糖浆20ml、伍斯特黑醋酱2 dashes、塔巴斯科辣酱2 dashes，在调酒壶中加冰摇合，滤出酒液进长饮杯中再加满冰块，再撒上黑胡椒，放入西洋芹加以装饰。将制作完成的『血腥玛丽(Bloody Mary)』"
              },
              {
                "name": "龙舌兰日出",
                "method": "龙舌兰40ml、鲜榨柳橙汁120ml，倒入装满冰块的冰柯林杯中，搅匀，再缓缓倒入些许红石榴糖浆沉底，用一片柠檬片挂在杯口加以装饰。将制作完成的『龙舌兰日出(Tequila Sunrise)』"
              },
              {
                "name": "天使之吻",
                "method": "以利口酒杯为衡量标准，倒入4/5的可可甜酒、慢慢倒入鲜奶油，使其悬浮在可可甜酒上方，再用鸡尾酒针刺透，横挂在杯口上。将制作完成的『天使之吻(Angel's Kiss)』"
              },
              {
                "name": "自由古巴",
                "method": "在柯林杯中放入冰块进行搅拌冰镇，冰镇后将融水倒出，再倒入朗姆酒60ml、挤入柠檬汁，补满可乐，稍加搅拌，再放入柠檬角加以装饰。将制作完成的『自由古巴(Cuba Libre)』"
              },
              {
                "name": "爱尔兰咖啡",
                "method": "现煮浓缩咖啡120ml倒入温好的薄口杯中、方糖1颗碾放入咖啡中溶解、倒入爱尔兰威士忌45ml，搅拌均匀，在上层补满一层打发过的鲜奶油，再从中间放上一颗咖啡豆浮在中间、撒上肉豆蔻粉末加以装饰。将制作完成的『爱尔兰咖啡(Irish Coffee)』"
              },
              {
                "name": "激情海岸",
                "method": "伏特加45ml、水蜜桃香甜酒15ml、艾絲芮德熔合香甜酒15ml、鲜榨柳橙汁50ml、蔓越莓汁15ml、适量苏打水，在调酒壶中加冰摇合，滤掉冰块倒入冰飓风杯中，再用一片柳橙片与糖渍樱桃加以装饰。将制作完成的『激情海岸(Sex on the Beach)』"
              },
              {
                "name": "暴雪",
                "method": "波本威士忌22.5ml、蔓越莓汁7.5ml、柠檬汁5ml、糖浆10ml，在调酒壶中加冰摇合，滤入装有大量冰块的冰镇古典杯中，再放入一些小红莓在酒液浮面，柠檬片挂在杯角加以装饰。将制作完成的『暴雪(Blizzard)』"
              },
              {
                "name": "薄荷茱莉普",
                "method": "在茱莉普杯中放入4株新鲜薄荷叶与糖浆，用捣棒轻压出薄荷香气，倒入波本威士忌45ml、纯糖浆15ml与碎冰，搅匀，再将碎冰填充至满，加入剩下的波本威士忌30ml，搅拌至杯身结霜，用一片四叶薄荷加以装饰。将制作完成的『薄荷茱莉普(Mint Julep)』"
              },
              {
                "name": "新鲜禁果",
                "method": "水蜜桃香甜酒45ml、鲜榨柳橙汁90ml、鲜榨柠檬汁20ml，在调酒壶中加冰摇和，滤掉冰块倒入装满冰块的古典杯中，再用两片柳橙片加以装饰。将制作完成的『新鲜禁果(Fuzzy Navel)』"
              },
              {
                "name": "杰克玫瑰",
                "method": "苹果白兰地45ml、红石榴糖浆15ml、鲜榨柠檬汁15ml，在调酒壶中加冰摇合，滤掉冰块倒入冰镇过的马天尼杯中。将制作完成的『杰克玫瑰(Jack Rose)』"
              },
              {
                "name": "马丁尼",
                "method": "琴酒60ml、法式不甜香艾酒15ml，在调酒杯中加入冰块搅匀，滤掉冰块倒入冰镇过装有一片柠檬皮卷的马天尼杯中。将制作完成的『马丁尼(Martini)』"
              },
              {
                "name": "蓝月亮",
                "method": "鲁特干金酒60ml、紫罗兰利口酒10ml、鲜榨柠檬汁10ml，在调酒壶中加冰摇合，滤掉冰块倒入碟形杯中。将制作完成的『蓝月亮(Blue Moon)』"
              },
                {
                "name": "银色子弹",
                "method": "琴酒45ml、葛縷子酒15ml、鲜榨柠檬汁15ml、纯糖浆5ml，在调酒壶中加冰摇合，滤掉冰块倒入冰镇的马天尼杯中。将制作完成的『银色子弹(Silver Bullet)』"
              },
              {
                "name": "绿眼睛",
                "method": "白朗姆酒30ml、蜜多麗蜜瓜香甜酒25ml、椰浆15ml、鲜榨凤梨汁45ml、鲜榨柠檬汁15ml，倒入果汁机中加入适量冰块，运转至呈雪妮状后倒入冰镇过的飓风杯中。将制作完成的『绿眼睛(Green Eyes)』"
              },
              {
                "name": "彩虹",
                "method": "石榴糖浆、可可利口酒、紫罗兰利口酒、蓝橙利口酒、蜜瓜利口酒、白兰地各准备10ml，随后依次沿着吧勺背面缓慢倒入杯中，形成一道杯中彩虹。将制作完成的『彩虹(Rainbow)』"
              },
              {
                "name": "水色维瓦尔",
                "method": "伏特加35ml、琴酒35ml、蓝柑橘香甜酒20ml，在调酒壶中加冰摇合，滤掉冰块倒入冰镇古巴飓风杯中，补满冰块，倒满雪碧，再放上糖渍樱桃与两片柳橙半月片，以及一柄小雨伞加以装饰。将制作完成的『水色维瓦尔(Aqua Velva)』"
              },
              {
                "name": "手榴弹",
                "method": "白朗姆酒25ml、琴酒25ml、伏特加25ml、蜜多麗蜜瓜香甜酒35ml、鲜榨凤梨汁35ml，在调酒壶中加冰摇合，滤掉冰块倒入冰镇过的曲线柯林杯中，补满冰块，再放入凤梨叶加以装饰。将制作完成的『手榴弹(Hand grenade)』"
              },
              {
                "name": "接骨木魔杖",
                "method": "苹果白兰地35ml、接骨木香甜酒40ml、鲜榨柠檬汁15ml、纯糖浆5ml，在调酒壶中加冰摇合，滤掉冰块倒入装满冰块的冰镇长饮杯中，再倒满姜汁汽水，放一朵干燥花朵加以装饰。将制作完成的『接骨木魔杖(The Elder Wand)』"
              },
              {
                "name": "鳄鱼的眼泪",
                "method": "甜瓜利口酒30ml、意大利柠檬酒30ml、蓝色夏威夷酒30ml、菠萝利口酒30ml、酸甜汁30ml，在调酒壶中加冰摇合，滤掉冰块倒入装有一半冰块的冰镇柯林杯中，再倒入雪碧90ml拌匀，放入吸管。将制作完成的『鳄鱼的眼泪(Crocodile Tears)』"
              },
              {
                "name": "香迪",
                "method": "冰镇的黑啤酒150ml、冰镇好的姜汁汽水150ml，同时注入冰镇高脚杯中。将制作完成的『香迪(Shandy Gaff)』"
              },
              {
                "name": "灰姑娘",
                "method": "橙汁30ml、柠檬汁30ml、菠萝汁30ml，在调酒壶中加冰摇合，滤掉冰块倒入碟形杯中。将制作完成的『灰姑娘(Cinderella)』"
              },
              {
                "name": "长老会",
                "method": "波本威士忌60ml、苏打水60ml、姜汁啤酒60ml、安格斯图拉苦酒2滴，在加满冰块的冰镇海波杯中拌匀。将制作完成的『长老会(The Presbyterian)』"
              },
              {
                "name": "大卫·马丁内斯",
                "method": "在装满冰块中的古典杯倒入1子弹杯的伏特加，少许蓝可乐，少许黄柠汁，再拿出一个蓝色树枝木剑插入柠檬皮卷，放入杯中。将制作完成的『大卫·马丁内斯（David·Martinez）』"
              },
              {
                "name": "杰克·威尔斯",
                "method": "在铜杯中装满冰块，倒入伏特加45ml、青柠汁15ml，用吧勺搅匀，姜汁啤酒补满，再加入一点爱（樱桃可乐），放上青柠与燃情的辣椒加以装饰。将制作完成的『杰克·威尔斯（Jackie·Welles）』"
              },
              {
                "name": "性感女郎",
                "method": "伏特加45ml、水蜜桃香甜酒30ml、椰子利口酒15ml、菠萝汁30ml、蔓越莓汁30ml，在调酒壶中加冰摇合，连同冰块一起倒入冰镇鸡尾酒杯中。将制作完成的『性感女郎(Sexy Girl)』"
              },
              {
                "name": "红粉佳人",
                "method": "琴酒45ml、鲜榨柠檬汁15ml、蛋白30ml、红石榴糖浆15ml，在调酒壶中加冰摇合，滤掉冰块倒入冰镇马丁尼杯中，再用一颗樱桃挂在杯沿加以装饰。将制作完成的『红粉佳人(Pink Lady)』"
              },
              {
                "name": "螺丝起子",
                "method": "将柯林杯放入冰块搅拌冰镇，倒出融水，随后加入伏特加40ml、鲜榨柳橙汁120ml搅匀，再用一片柳橙片挂在杯沿加以装饰。将制作完成的『螺丝起子(Screwdriver)』"
              },
              {
                "name": "边车",
                "method": "白兰地45ml、君度橙酒15ml、鲜榨柠檬汁20ml、香橙干邑白兰地5ml、纯糖浆5ml，在调酒壶中加冰摇合，滤掉冰块倒入冰镇马天尼杯中，再用一片柳橙皮卷放在杯沿，没入部分进酒液中加以装饰。将制作完成的『边车(Sidecar)』"
              },
              {
                "name": "锈钉",
                "method": "在冰镇古典杯中放入球形冰块，倒入苏格兰调和式威士忌60ml、吉宝蜂蜜威士忌10ml，用吧勺拌匀。将制作完成的『锈钉(Rusty Nail)』"
              },
              {
                "name": "教父",
                "method": "在冰镇好的古典杯中放入球形冰块，倒入苏格兰调和式威士忌90ml、杏仁香甜酒30ml，搅匀。将制作完成的『教父(Godfather)』"
              }
            ]

event join (user) => {
    let new_user = user.replaceAll("来一杯","来亿杯")
   if (guests.includes(user)){
     drrr.print("欢迎光临 " + new_user +"，这次需要喝什么呢？还是来一次占卜？");
   }else{
      guests.push(user);
      drrr.print("欢迎光临 " + new_user +"，有什么需要的吗？|输入「/me 来一杯 饮品」来获取随机推荐，或「/me 来一杯 忘忧」自定义饮品。|输入「/me 牌阵列表」可以查询如何占卜，对照「」内文字输入即可触发。|");
    }
}

event[msg, me, dm](user, cont: "来一杯\\s+\\S") => {
    let random_drink = drinks[Math.floor(Math.random() * drinks.length)];
    if(cont.indexOf("来一杯") === 0 || cont.indexOf("来一杯") === 1){
        if(cont.includes("来一杯")){
            let new_user = user.replaceAll("来一杯","来一\u200B杯");
            let new_user1 = new_user.replaceAll("猫Taro","猫\u200BTaro");
            drink = cont.replaceAll("来一杯", "").trim()
            if(drink !== ("饮品")){
                let foundDrink = drinks.find(d => d.name === drink);
                    if(foundDrink) {
                        // 如果找到了指定饮品，使用其配方
                        drrr.print("" + foundDrink.method + "递给 " + new_user1);
                    } else {
                        // 如果没找到指定饮品，使用通用回复
                        drrr.print("给 " + new_user1 + " 递上 " + drink);
                    }

            }else{
                drrr.print(""+ random_drink.method +"递给 "+new_user1);
            }
        }
    }
}
event[msg, me, dm](user, cont: "来一份\\s+\\S") => {
    let random_food = foods[Math.floor(Math.random() * foods.length)];
    let random_dessert = desserts[Math.floor(Math.random() * desserts.length)];
    if(cont.indexOf("来一份") === 0 || cont.indexOf("来一份") === 1){
        if(cont.includes("来一份")){
            let new_user = user.replaceAll("来一份","来一\u200B份");
            let new_user1 = new_user.replaceAll("猫Taro","猫\u200BTaro");
            food = cont.replaceAll("来一份", "").trim()
            if(food === ("甜品")){
                drrr.print("给 " + new_user1 + " 递上 " +random_dessert);
            }else if(food === ("食品")){
                drrr.print("给 " + new_user1 + " 递上 " +random_food);
            }else{
                drrr.print("给 " + new_user1 + " 递上 " +food);
            }
        }

    }
}

//猫Taro
let tarotCards = [
    {
      "name": "O·猫",
      "positions": {
        "逆位": "纯粹偶然的生活将会是困难的甚至是愚蠢的。徘徊地太多会让你离群索居和孤独，特别在晚年的时候，活在当下不能成为草率和不负责任的借口。要脚踏实地。",
        "正位": "你想走一走猫的旅程么？第一步就是现在完全地展现你自己所处何地。问问什么能让你快乐。欢迎随后的机会。如果你愿意，你的鼻子将引领你找到天赐予你的福。为美丽张开眼睛。为奇迹唤醒你的灵魂。"
      }
    },
    {
      "name": "I·猫法师",
      "positions": {
        "逆位": "你可能觉得自己无法控制发生在自己身上的事情，不管你多么努力，仍然被困住和备受挫折。审视你对可能发生事情的态度以及你在自己生命历程所扮演的角色。你愿意使用你天生的力量去塑造自己的世界么？",
        "正位": "你有创造自己实现的力量，而且只要你关注这种力量就是增长。关注积极的，不要消极的。相信你能为自己带来你想要的。魔法的诱导和工具并不重要；相信自己才是猫法师的秘密。"
      }
    },
    {
      "name": "II·猫祭司",
      "positions": {
        "逆位": "你可能抗拒或不信任自己内在的声音，也许是因为听从他寻常采取你不愿意采取的行动。否定自己的精神需要智慧导致痛苦。若果需要做出牺牲，你就会找到做出牺牲的力量。当心不要允许其他人否定自己深处的智慧。",
        "正位": "你准备好进入你灵魂发展的下一阶段：信任自己的内在指引。对于增强自己内心指引的召唤不应被否认。找一个能让自己平静的听从神令的地方，不管这对你意味着什么。你也抓住你祖先传承下来的古老的智慧。"
      }
    },
    {
      "name": "III·猫皇后",
      "positions": {
        "逆位": "若你曾受到母亲的伤害（可能来自你自己的母亲或是其他母亲般的人），你就会避开自己母性的涌现。或有你可能不会让别人养育你，因为担心受到异物的束缚。找到排解的方法和治愈这些就好了。",
        "正位": "你所需要的欢喜和支持都在。这可能通过物质上的财富或者养育上的帮助的形式出现，但不论是何种情形，你都要相信这是爱的给予并且不附带任何期望和条件。你自己内心也有这种无条件的爱。让这种爱养育着一样。爱的轮回是无止境的。"
      }
    },
    {
      "name": "IV·猫皇帝",
      "positions": {
        "逆位": "压制其他人并要求他们默许你的愿意不是真正的领导力。学会分享权利，这样每个人都会感到有用和有价值。如果你在压榨者的铁蹄下，要敢于说出来，要做出改变。",
        "正位": "坚持你认为公正的事物。明智地使用你的力量为你关心的人谋利。如果你自己需要支持，确保你寻求帮助的那个人值得你信任。不论在何种情况下，都要坚持划清界限。不要埋没自己的力量。"
      }
    },
    {
      "name": "V·猫教皇",
      "positions": {
        "逆位": "教条和僵化的思维会扼杀精神的成长。不要将自己的信仰强加给别人也不让别人把信仰强加给你。不要把宗教的诱惑与真正的宗教经历混为一谈。拒绝那些反对真理探索的人。",
        "正位": "灵魂生命里更多结构和规矩会对我们现在很有帮助。即使最独立思考者也能从那些对圣洁教义理解透彻和有经验的指引中获益。伟大的宗教和神话都是智慧的巨大宝藏，这些智慧都是在来自对的理解和意义的渴望。从可信的地方寻求真理。"
      }
    },
    {
      "name": "VI·恋人",
      "positions": {
        "逆位": "现在看来爱好像是争斗，但记住这种争斗也是有价值的。把自己的爱深深地埋下对于找到精神伴侣是非常有意义的。如果情势不是以建立关系为目标的，这可能是身心异向。清楚的了解什么才是你的真爱。",
        "正位": "让自己去爱，不要管爱的方式。也许是那个让你心跳不已的伴侣。也可能是你很爱并希望为之付出全部的东西，生活的改变，一个项目，宗族或是友谊。知道自己会收获满满的爱，自己会在安全的地方打开自己的梦想。"
      }
    },
    {
      "name": "VII·战车",
      "positions": {
        "逆位": "你前进的步伐失速了而且停滞了。弄清原因以便重新出发。缺乏自信？他人对你成功的机会持观望态度？计划缺关键步骤？这不是终点，只是中途暂停，为重新出发做修整。",
        "正位": "你自己掌握着自己的生活。当你相信自己的目标，全世界都助你前进。你肯定能成功，但你必须采取行动。不要让任何人控制你的生活；他人的介入，甚至是不必要的帮助都会阻碍你前进的步伐。明确目标，制定计划，整合资源，行动。"
      }
    },
    {
      "name": "VIII·力量",
      "positions": {
        "逆位": "不要找借口说这些事你无法控制的。你要为自己的决定和行为负责。你有足够的力量克服任何障碍包括那些来自你内心深处的。使用你内心的勇气和高尚。",
        "正位": "其他人可能会因自己的卑鄙的冲动和动机而行动，但是你却坚持自己的道德信念。你已经克服了低级的天性，而选择了更高级的。你的勇气和力量远远高于你所了解的。好好的使用您的勇气和力量战胜挑战。"
      }
    },
    {
      "name": "IX·隐者",
      "positions": {
        "逆位": "太多的独处跟太多的社交活动一样有害。甚至最专注的独居者也需要跟他人联系，正确地看待事物并防止内心的螺旋沉沦。考虑一下是否离世界太远了，如果是，想想原因。",
        "正位": "远离日常生活的忙乱，找到你内心的平静。如果你不断地忙于各种活动和忙碌，就不要期望懂得生活的深层含义。智慧需要花时间来进行自我反省。"
      }
    },
    {
      "name": "X·命运之轮",
      "positions": {
        "逆位": "命运之轮的牌倒了与正着都基本一个意思，只是你会觉得命运之轮的中心，它的平衡就会将你拉回自己的中心。",
        "正位": "运动着的事物远远超出我们的控制，现在的任务就是将自己和宇宙想要给予你的综合一起。关注那些引导你下一步人生的现象。相信这都会好的，记住不论你在命运之轮何处，都会很快到别处；就等轮子的转动吧。"
      }
    },
    {
      "name": "XI·后果",
      "positions": {
        "逆位": "消极的纠缠始于松懈，慎重着就会找到走出困境和不公平境况的路。重新按照来的路回去并懂得这一路所收到的教训，然后看看下次是否能做的更好。",
        "正位": "审视自己的行为预计其可能的长期后果。你的选择是负责任的合伦理的？注意到自己的前进方向了么？当心不要陷入不必要的纠缠中，这种纠缠就会使事物复杂化并阻碍你的进步。而事物开始的方式将会影响其最终结果。"
      }
    },
    {
      "name": "XII·漂浮的猫",
      "positions": {
        "逆位": "漂浮的猫倒了跟正着的意义差不多，但增添了可能是充满挑战的日常生活中的展现你想象力和灵性的警告意味。为加强你对可能性的扩展感觉，找到其他跟你有相同扩展思维的人。",
        "正位": "抛开那些你知道是可能的成见。把已成的观点倒过来就允许创造性思维的灵光可以自由流动。牵牛花是思维扩展的象征，就像那只猫，你所需要的就是制造惊喜和意愿。放开重心，剩下的就是轻率了。镇静并拓展到无限的可能中去。"
      }
    },
    {
      "name": "XIII·死神",
      "positions": {
        "逆位": "你可能会让悲伤和失落主宰你的思想和感觉，而不是迎接新事物。对回忆的保持和继续不是对你的爱的尊重或是你能平和地释放。对逝者举行一个仪式表达你的尊重和拥抱解决感。",
        "正位": "熟悉事物的有限性。若是该放开则放开。强留不能再继续的将会使你在自己的革命道路上停滞不前。放弃结束的这样新的才会奔向您。感谢你这一路上的教训和礼物。"
      }
    },
    {
      "name": "XIV·优雅",
      "positions": {
        "逆位": "目前找到自己平静的情势会让人无法承受。了解自己的局限性；有时事情只是失去平衡和倾覆了。照顾好自己的健康并管理你的压力，确保尊重自己的身、心和神安然度过这具有挑战性的时刻。",
        "正位": "找到能让自己泰然和优雅地迎接挑战的内心的协调。若发现自己要失去平衡，就猜测自己需要什么来保持平衡。适应千变万化的环境的能力会让你不管在什么样恶劣的条件下都能泰然处之，寻求安宁。"
      }
    },
    {
      "name": "XV·猫妖",
      "positions": {
        "逆位": "你的精神已经转向光明，自由触手可及。控制你的坏习惯或行为正在消退，或可能一起完全消失。利用自己的意念战胜，取得永远的积极变化。在这过渡时期寻求给你鼓励的同伴的支持。",
        "正位": "恶魔已控制你，让你从自己的良知分离。你觉得自己陷入无尽的黑暗中，看不到光亮。如果你没有正在跟恶魔斗争，注意这张牌的警告。避免自己陷入歧途的情形。果然感到害怕，就转身向反向奔跑。远离恶魔猫的爪子。"
      }
    },
    {
      "name": "XVI·高塔",
      "positions": {
        "逆位": "变化可能已经让你漂浮和根基不稳，无法稳健地收回自己的爪子。灵魂的眩晕让你无法分辨哪是上，确定下一步的方向。等它出来，在进行下一步前让尘埃落尽。",
        "正位": "只要你觉得自己根基开始震动，或是你能预测自己的跌倒，这时候就让要生存的直觉介入。这样你就有时间在空中转身，稳稳地降落。充分利用跌落的这个高度，这个高度太矮可能就无法允许优雅的旋转和稳健的降落，从这次跌落中学到教训；适应性，洞察力，和细心。这些技能能在变化和危机时帮助你。"
      }
    },
    {
      "name": "XVII·星星",
      "positions": {
        "逆位": "害怕甚至信仰危机都会让你感到在宇宙中自己是渺小的和单独的。尽管别人可以支持你，安抚你，希望的精华来自内心。把这些富有挑战的时刻当成弄清自己精神价值的机会，找到自己相信的基础。",
        "正位": "不要怀疑自己是独一无二的和珍贵的。你是宇宙整体舞曲中至关重要的一份子，相信生命中的每件事情都是按照其本意展现的，相信这种形式会随着时间的推移变得越来越清晰。相信你是受到神灵保佑的，再采取下一步行动。"
      }
    },
    {
      "name": "XVIII·月亮",
      "positions": {
        "逆位": "在依靠理想和分析探索白天无法感知的可能性中，你可能遇到了困难。这可能困住你的天资和梦所传递的信息，甚至会完全清除你的梦不留一点痕迹。探索再深入的阻力。",
        "正位": "月亮的黑亮，月亮的盈亏圆缺中所隐含的寓意无法立马感知，给予更多的时间等其慢慢显现，不要相信你看到的就是全部的事实。是要用我们的内在和外在的眼睛一起才能看到秘密、奥秘和不是很明显的东西。"
      }
    },
    {
      "name": "XIX·太阳",
      "positions": {
        "逆位": "太阳牌倒了跟正着的意义是一样的，只是增加了你可能对相信好事情是真的，心存怀疑。",
        "正位": "甜蜜幸福的时刻，护佑是令人愉快的。放松，相信所有的都是好的而且会继续好。任何残存的疑虑都将像晨光中的薄雾一样消散干净。迎接无限的快乐曙光吧。"
      }
    },
    {
      "name": "XX·好猫咪",
      "positions": {
        "逆位": "当你需要自我接受，认清自己的地方时，你就该转向更大的群体家庭，宗族，任何你影响力所及的范围。你会如何帮助别人？你会如何拓展你的感情佑护，给每个人带来益处？在哪里你需要饶恕？",
        "正位": "诚实地评价自己，预测为了实现生活的目标你需要做出什么样的改变。清晰的剖析自己的过错和失败，宽恕自己并让因此导致的任何责备或羞愧得到释放。接受猫神的爱，让这种爱在自己身上发光发亮。把爪子舔舐干净轻装前行。"
      }
    },
    {
      "name": "XXI·世界",
      "positions": {
        "逆位": "你可能感到自己从这个世界里移除了，被分离了，对那些通常给予生命意义的事物也兴趣索然。这就表明一直困扰你的事情处于结束的边缘，或者你不愿承认已起作用的某些事情也要结束。顺其自然会让你展望新希望的地平线。",
        "正位": "现在所有的事情都一起来了，你一直寻求的目标也触手可及。这是圆满的时刻，有的到了成熟可以满意地释放了。世界正按照你的喜好为你带来和平和现实的所有东西。比如人类诗人‘罗伯特·路易斯·史蒂文森’说过的「世界就是一系列事物，我确认我们会跟国王一样快乐」或者像猫一样快乐。"
      }
    }
  ]

event[msg, me, dm](user, cont: "猫Taro", tc, url, req) => {
    let randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position = Math.random() < 0.5 ? "正位" : "逆位";
    let user_name = user.replaceAll("猫Taro","猫\u200BTaro");
    if(user.includes("猫Taro")){
        if(cont.includes("猫Taro")){
            if (req.type == "dm"){
                drrr.dm(user,"很抱歉，麻烦"+user+"名称避免酒馆关键字！");
            }else{
                drrr.print("很抱歉，麻烦"+user+"名称避免酒馆关键字！");
            }
        }
    }else{
        if(cont.indexOf("猫Taro") === 1 || cont.indexOf("猫Taro") === 0){
                if(cont.includes("猫Taro")){
                    let taro_string = randomCard.name + "-" + position;
                    if (req.type == "dm"){
                         drrr.dm(user,"["+taro_string+"]");
                         drrr.dm(user,"["+ randomCard.positions[position]+"]");
                    }else{
                        drrr.print("["+taro_string+"]");
                        drrr.print("["+ randomCard.positions[position]+"]");
                    }
                }
        }

    }
}
// 今日压力展开法
event[msg, me, dm](user, cont: "今日压力展开法", tc, url, req) => {
    // 抽取第一张牌
    let card1 = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position1 = Math.random() < 0.5 ? "正位" : "逆位";

    // 创建不包含第一张牌的新数组，从中抽取第二张牌
    let remainingCards = tarotCards.filter(card => card.name !== card1.name);
    let card2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];
    let position2 = Math.random() < 0.5 ? "正位" : "逆位";
    if(cont.indexOf("今日压力展开法") === 0 || cont.indexOf("今日压力展开法") === 1 ){
        if (req.type == "dm"){
            // 输出牌阵解读
            drrr.dm(user,"1、今日"+user+"的身心状态:");
            drrr.dm(user,"[" + card1.name + "-" + position1 + "]");
            drrr.dm(user,"[" + card1.positions[position1] + "]");

            drrr.dm(user,"2、今日"+user+"可能面对的压力:");
            drrr.dm(user,"[" + card2.name + "-" + position2 + "]");
            drrr.dm(user,"[" + card2.positions[position2] + "]");
        }else{
               // 输出牌阵解读
               drrr.print("1、今日"+user+"的身心状态:");
               drrr.print("[" + card1.name + "-" + position1 + "]");
               drrr.print("[" + card1.positions[position1] + "]");

               drrr.print("2、今日"+user+"可能面对的压力:");
               drrr.print("[" + card2.name + "-" + position2 + "]");
               drrr.print("[" + card2.positions[position2] + "]");
        }
    }
}
// 今日压力展开法
event[msg, me, dm](user, cont: "明日压力展开法", tc, url, req) => {
    // 抽取第一张牌
    let card1 = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position1 ="正位";

    // 创建不包含第一张牌的新数组，从中抽取第二张牌
    let remainingCards = tarotCards.filter(card => card.name !== card1.name);
    let card2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];
    let position2 ="正位";
    if(cont.indexOf("明日压力展开法") === 0 || cont.indexOf("明日压力展开法") === 1 ){
        if (req.type == "dm"){
            // 输出牌阵解读
            drrr.dm(user,"1、明日"+user+"的身心状态:");
            drrr.dm(user,"[" + card1.name + "-" + position1 + "]");
            drrr.dm(user,"[" + card1.positions[position1] + "]");

            drrr.dm(user,"2、明日"+user+"可能面对的压力:");
            drrr.dm(user,"[" + card2.name + "-" + position2 + "]");
            drrr.dm(user,"[" + card2.positions[position2] + "]");
        }else{
               // 输出牌阵解读
               drrr.print("1、明日"+user+"的身心状态:");
               drrr.print("[" + card1.name + "-" + position1 + "]");
               drrr.print("[" + card1.positions[position1] + "]");

               drrr.print("2、明日"+user+"可能面对的压力:");
               drrr.print("[" + card2.name + "-" + position2 + "]");
               drrr.print("[" + card2.positions[position2] + "]");
        }
    }
}
// 今日工作展开法
event[msg, me, dm](user, cont: "今日工作展开法", tc, url, req) => {
    // 抽取第一张牌
    let card1 = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position1 = Math.random() < 0.5 ? "正位" : "逆位";

    // 创建不包含第一张牌的新数组，从中抽取第二张牌
    let remainingCards = tarotCards.filter(card => card.name !== card1.name);
    let card2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];
    let position2 = Math.random() < 0.5 ? "正位" : "逆位";
    if(cont.indexOf("今日工作展开法") === 0 || cont.indexOf("今日工作展开法") === 1 ){
        if (req.type == "dm"){
            // 输出牌阵解读
            drrr.dm(user,"1、今日"+user+"的身心状态:");
            drrr.dm(user,"[" + card1.name + "-" + position1 + "]");
            drrr.dm(user,"[" + card1.positions[position1] + "]");

            drrr.dm(user,"2、今日"+user+"的工作状态:");
            drrr.dm(user,"[" + card2.name + "-" + position2 + "]");
            drrr.dm(user,"[" + card2.positions[position2] + "]");
        }else{
               // 输出牌阵解读
               drrr.print("1、今日"+user+"的身心状态:");
               drrr.print("[" + card1.name + "-" + position1 + "]");
               drrr.print("[" + card1.positions[position1] + "]");

               drrr.print("2、今日"+user+"的工作:");
               drrr.print("[" + card2.name + "-" + position2 + "]");
               drrr.print("[" + card2.positions[position2] + "]");
        }
    }
}
// 今日工作展开法
event[msg, me, dm](user, cont: "明日工作展开法", tc, url, req) => {
    // 抽取第一张牌
    let card1 = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position1 = "正位";

    // 创建不包含第一张牌的新数组，从中抽取第二张牌
    let remainingCards = tarotCards.filter(card => card.name !== card1.name);
    let card2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];
    let position2 = "正位";
    if(cont.indexOf("明日工作展开法") === 0 || cont.indexOf("明日工作展开法") === 1 ){
        if (req.type == "dm"){
            // 输出牌阵解读
            drrr.dm(user,"1、明日"+user+"的身心状态:");
            drrr.dm(user,"[" + card1.name + "-" + position1 + "]");
            drrr.dm(user,"[" + card1.positions[position1] + "]");

            drrr.dm(user,"2、明日"+user+"的工作状态:");
            drrr.dm(user,"[" + card2.name + "-" + position2 + "]");
            drrr.dm(user,"[" + card2.positions[position2] + "]");
        }else{
               // 输出牌阵解读
               drrr.print("1、明日"+user+"的身心状态:");
               drrr.print("[" + card1.name + "-" + position1 + "]");
               drrr.print("[" + card1.positions[position1] + "]");

               drrr.print("2、明日"+user+"的工作:");
               drrr.print("[" + card2.name + "-" + position2 + "]");
               drrr.print("[" + card2.positions[position2] + "]");
        }
    }
}
// 今日工作展开法
event[msg, me, dm](user, cont: "快速解答展开法", tc, url, req) => {
    // 抽取第一张牌
    let card1 = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position1 = Math.random() < 0.5 ? "正位" : "逆位";

    // 创建不包含第一张牌的新数组，从中抽取第二张牌
    let remainingCards = tarotCards.filter(card => card.name !== card1.name);

    let card2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];

    let remainingCards3 = remainingCards.filter(card => card.name !== card2.name);

    let card3 = remainingCards3[Math.floor(Math.random() * remainingCards3.length)];

    let position2 = Math.random() < 0.5 ? "正位" : "逆位";
    let position3 = Math.random() < 0.5 ? "正位" : "逆位";

    if(cont.indexOf("快速解答展开法") === 0 || cont.indexOf("快速解答展开法") === 1 ){
            if (req.type == "dm"){
                // 输出牌阵解读
                drrr.dm(user,"1、问题的类型:");
                drrr.dm(user,"[" + card1.name + "-" + position1 + "]");
                drrr.dm(user,"[" + card1.positions[position1] + "]");

                drrr.dm(user,"2、问题的原因:");
                drrr.dm(user,"[" + card2.name + "-" + position2 + "]");
                drrr.dm(user,"[" + card2.positions[position2] + "]");

                drrr.dm(user,"3、问题的解决方法:");
                drrr.dm(user,"[" + card3.name + "-" + position3 + "]");
            }else{
                // 输出牌阵解读

                drrr.print("1、问题的类型:");
                drrr.print("[" + card1.name + "-" + position1 + "]");
                drrr.print("[" + card1.positions[position1] + "]");

                drrr.print("2、问题的原因:");
                drrr.print("[" + card2.name + "-" + position2 + "]");
                drrr.print("[" + card2.positions[position2] + "]");

                drrr.print("3、问题的解决方法:");
                drrr.print("[" + card3.name + "-" + position3 + "]");
        drrr.print("[" + card3.positions[position3] + "]");
            }

    }
}

// 今日工作展开法
event[msg, me, dm](user, cont: "快速解答展开法(改)") => {
    // 抽取第一张牌
    let card1 = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    let position1 = Math.random() < 0.5 ? "正位" : "逆位";

    // 创建不包含第一张牌的新数组，从中抽取第二张牌
    let remainingCards = tarotCards.filter(card => card.name !== card1.name);

    let card2 = remainingCards[Math.floor(Math.random() * remainingCards.length)];

    let remainingCards3 = remainingCards.filter(card => card.name !== card2.name);

    let card3 = remainingCards3[Math.floor(Math.random() * remainingCards3.length)];

    let position2 = Math.random() < 0.5 ? "正位" : "逆位";
    let position3 = Math.random() < 0.5 ? "正位" : "逆位";

    if(cont.indexOf("快速解答展开法") === 0 || cont.indexOf("快速解答展开法") === 1 ){
        // 输出牌阵解读
        drrr.print("1、问题的类型:");
        drrr.print("[" + card1.name + "-" + position1 + "]");
        drrr.print("[" + card1.positions[position1] + "]");

        drrr.print("2、问题的原因:");
        drrr.print("[" + card2.name + "-" + position2 + "]");
        drrr.print("[" + card2.positions[position2] + "]");

        drrr.print("3、问题的解决方法:");
        drrr.print("[" + card3.name + "-" + position3 + "]");
        drrr.print("[" + card3.positions[position3] + "]");
    }
}
//圣火与猫的故事
event[msg, me, dm](user, cont: "圣火与猫", tc, url, req) => {
    if(cont.indexOf("圣火与猫") === 1 || cont.indexOf("圣火与猫") === 0){
        if(cont.includes("圣火与猫")){
            if (req.type == "dm"){
                drrr.dm(user,"所有的猫都崇拜热量。我们寻找有阳光的地点，在热乎乎的石头上伸展开身体，跟同伴温暖地蜷缩在一起。对于圣火与猫宗教而言，比起单纯的温暖，火焰意味着更多。是内在闪耀的光亮，是激励人心的高贵的猫族精神在追求卓越。充满激情的恋人们在选择伴侣时，理由正当，圣火与猫是技巧超高的战士。勇敢的历险和形象化，它们热爱黑夜也热爱点亮黑夜的火焰。好奇心和勇气通常引领它们进入充满挑战的境地，因为它们都是无畏的。火族猫的起源随着时间的流逝和神话的传承已变得模糊，在英勇和征服故事中夸张地把火族猫描述成伟大的纺纱工。它们称自己是太阳女神 Sekhment 的后代，它们作为圣殿守护者和猫教皇的传承由来已久的故事是真的。它们是宗族中最高尚的，火族猫寻求能滋养它们灵魂的神秘猎物。");
            }else{
                drrr.print("所有的猫都崇拜热量。我们寻找有阳光的地点，在热乎乎的石头上伸展开身体，跟同伴温暖地蜷缩在一起。对于圣火与猫宗教而言，比起单纯的温暖，火焰意味着更多。是内在闪耀的光亮，是激励人心的高贵的猫族精神在追求卓越。充满激情的恋人们在选择伴侣时，理由正当，圣火与猫是技巧超高的战士。勇敢的历险和形象化，它们热爱黑夜也热爱点亮黑夜的火焰。好奇心和勇气通常引领它们进入充满挑战的境地，因为它们都是无畏的。火族猫的起源随着时间的流逝和神话的传承已变得模糊，在英勇和征服故事中夸张地把火族猫描述成伟大的纺纱工。它们称自己是太阳女神 Sekhment 的后代，它们作为圣殿守护者和猫教皇的传承由来已久的故事是真的。它们是宗族中最高尚的，火族猫寻求能滋养它们灵魂的神秘猎物。");
            }
        }
    }
}
//海洋与猫的故事
event[msg, me, dm](user, cont: "海洋与猫", tc, url, req) => {
    if(cont.indexOf("海洋与猫") === 1 || cont.indexOf("海洋与猫") === 0){
        if(cont.includes("海洋与猫")){
            if (req.type == "dm"){
                drrr.dm(user,"猫与水是老朋友了，当然我们可以选择友谊的方式。有的会游泳，从高空跳水。有的仅在玩耍时向喷泉伸出自己漂亮的小爪子，或只是单纯地看着闪闪发光的喷泉。水是水族猫的母亲，恋人，家和幸福。他们的心向往海边由月亮引起的潮汐运动，河流动时创造的音乐，阳光照耀下的湖光粼粼波光。水族猫是所有猫中最超然的。他们知晓你所想，你可以相信他们并分享你的秘密。水族猫情绪化，喜怒无常，深沉和明智。宗族神话说水族猫来自一个大岛，现已沉入海底，一些猫变成 MERCAT 仍然生活在海底。当它们凝视时，流露出只有他们宗族可以看到的那种梦幻般的眼神，也许它们听到的就是 MERCAT 的歌声。");
            }else{
                drrr.print("猫与水是老朋友了，当然我们可以选择友谊的方式。有的会游泳，从高空跳水。有的仅在玩耍时向喷泉伸出自己漂亮的小爪子，或只是单纯地看着闪闪发光的喷泉。水是水族猫的母亲，恋人，家和幸福。他们的心向往海边由月亮引起的潮汐运动，河流动时创造的音乐，阳光照耀下的湖光粼粼波光。水族猫是所有猫中最超然的。他们知晓你所想，你可以相信他们并分享你的秘密。水族猫情绪化，喜怒无常，深沉和明智。宗族神话说水族猫来自一个大岛，现已沉入海底，一些猫变成 MERCAT 仍然生活在海底。当它们凝视时，流露出只有他们宗族可以看到的那种梦幻般的眼神，也许它们听到的就是 MERCAT 的歌声。");
            }
        }
    }
}

//天空与猫的故事
event[msg, me, dm](user, cont: "天空与猫", tc, url, req) => {
    if(cont.indexOf("天空与猫") === 1 || cont.indexOf("天空与猫") === 0){
        if(cont.includes("天空与猫")){
            if (req.type == "dm"){
                drrr.dm(user,"就跟他们的齿爪一样，风族猫的性格也是非常的犀利。他们不信任任何人，甚至他们自己的族人。他们一年四季露天生活，他们怀疑墙的保护是限制和诱惑。这一弱点使他们防范心强，紧张，好斗。风族猫是机智无情的敌人。如果他们不能找到真正的猎物，他们就会知道麻烦。那些不合群的就待在宗群领地的边缘处，其他的拉帮结伙成抢劫团伙欺负那些大摇大摆通过他们领地的比较温和的猫。打架是家常便事，在交配季节尤其激烈。风族的猫只在意他们的爪子，对公共意识毫不关心。最明智的是学会控制自己的脾气，充分利用自己的智慧。其他的生命则是短暂充满暴力的。风族起源于那些流放猫，和平和地生活而被迫离开的。经历数代后，等级就逐渐形成，他们的国王和王后都是通过战争取得的，通过世袭传承固定下来的。目前没有人敢挑战他们。");
            }else{
                drrr.print("就跟他们的齿爪一样，风族猫的性格也是非常的犀利。他们不信任任何人，甚至他们自己的族人。他们一年四季露天生活，他们怀疑墙的保护是限制和诱惑。这一弱点使他们防范心强，紧张，好斗。风族猫是机智无情的敌人。如果他们不能找到真正的猎物，他们就会知道麻烦。那些不合群的就待在宗群领地的边缘处，其他的拉帮结伙成抢劫团伙欺负那些大摇大摆通过他们领地的比较温和的猫。打架是家常便事，在交配季节尤其激烈。风族的猫只在意他们的爪子，对公共意识毫不关心。最明智的是学会控制自己的脾气，充分利用自己的智慧。其他的生命则是短暂充满暴力的。风族起源于那些流放猫，和平和地生活而被迫离开的。经历数代后，等级就逐渐形成，他们的国王和王后都是通过战争取得的，通过世袭传承固定下来的。目前没有人敢挑战他们。");
            }
        }
    }
}

//大地与猫的故事
event[msg, me, dm](user, cont: "大地与猫", tc, url, req) => {
    if(cont.indexOf("大地与猫") === 1 || cont.indexOf("大地与猫") === 0){
        if(cont.includes("大地与猫")){
            if (req.type == "dm"){
                drrr.dm(user,"土族称他们是猫族的第一支。且不论真假，它讲出了最重要的事情：历史，稳定，安全。土族猫深深地隶属于他们的领地。他们一旦找到能给他们和平感觉的好地方，他们就不会再动。从内心深处安于一隅，欣赏自己所拥有的和美食。自然的意趣吸引着他们，他们与其他动物的互动多于另外三个宗族（除了猎物）。尽管若需要，土族猫愿意为自己的所有而战，他们更可能通过共同的努力等待对手退出或把他们排挤出局。他们对自己的宗族感到自豪并保存了宗族的传说并传承着。虽然宗族排首位，土族猫本性慷慨，对贫穷的人也欢迎，关心所有人的福祉。和善，安静，喜欢舒适，土族猫在他们的世界里自在的生活着。");
            }else{
                drrr.print("土族称他们是猫族的第一支。且不论真假，它讲出了最重要的事情：历史，稳定，安全。土族猫深深地隶属于他们的领地。他们一旦找到能给他们和平感觉的好地方，他们就不会再动。从内心深处安于一隅，欣赏自己所拥有的和美食。自然的意趣吸引着他们，他们与其他动物的互动多于另外三个宗族（除了猎物）。尽管若需要，土族猫愿意为自己的所有而战，他们更可能通过共同的努力等待对手退出或把他们排挤出局。他们对自己的宗族感到自豪并保存了宗族的传说并传承着。虽然宗族排首位，土族猫本性慷慨，对贫穷的人也欢迎，关心所有人的福祉。和善，安静，喜欢舒适，土族猫在他们的世界里自在的生活着。");
            }
        }
    }
}
event[msg, me, dm](user, cont: "牌阵列表", tc, url, req) => {
    let user_name = user.replaceAll("猫Taro","猫\u200BTaro");
    if(user.includes("猫Taro")){
        if(cont.includes("猫Taro")){
            drrr.print("很抱歉，麻烦"+user+"名称避免酒馆关键字！");
        }
    }else{
    if(cont.indexOf("牌阵列表") === 1 || cont.indexOf("牌阵列表") === 0){
            if(cont.includes("牌阵列表")){
                if (req.type == "dm"){
                     drrr.dm(user,"4.『快速解答展开法』");
                     drrr.dm(user,"3.『今日工作展开法』");
                     drrr.dm(user,"2.『今日压力展开法』");
                     drrr.dm(user,"1.『猫Taro』");
                 }else{
                     drrr.print("4.『快速解答展开法』");
                     drrr.print("3.『今日工作展开法』");
                     drrr.print("2.『今日压力展开法』");
                     drrr.print("1.『猫Taro』");
                 }

            }
        }
    }
}

