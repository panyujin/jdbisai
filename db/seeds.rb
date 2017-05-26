# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Initialize Admin User
 if User.find_by(email: "admin@test.com").nil?
   u = User.new
   u.email = "admin@test.com"           # 可以改成自己的 email
   u.password = "123456"                # 最少要六码
   u.password_confirmation = "123456"   # 最少要六码
   u.is_admin = true
   u.save
   puts "Admin 已经建立好了，帐号为#{u.email}, 密码为#{u.password}"
 else
   puts "Admin 已经建立过了，脚本跳过该步骤。"
 end

 # Initialize Product

  Product.create!(title: "奔富407干红葡萄酒",
    description: "奔富407干红葡萄酒 澳洲BIN407 原瓶进口红酒 2014年木塞整箱 750ml*6",
    price: 2999,
    quantity: 35,
    image: open("http://oq3mpwc6v.bkt.clouddn.com/%E5%A5%94%E5%AF%8C1.jpg")
    )

    Product.create!(title: "奔富洛神干红葡萄酒",
      description: "奔富洛神山庄 干红葡萄酒750ml*6瓶装 澳州原瓶进口红酒整箱 奔富系列",
      price: 229,
      quantity: 35,
      image: open("http://oq3mpwc6v.bkt.clouddn.com/%E6%BE%B3%E6%B4%B21.jpg")
      )

      Product.create!(title: "黄尾袋鼠西拉红葡萄酒",
        description: "酒仙网 澳大利亚原瓶原装进口红酒 黄尾袋鼠西拉红葡萄酒（6瓶装)",
        price: 269,
        quantity: 28,
        image: open("http://oq3mpwc6v.bkt.clouddn.com/%E9%85%92%E4%BB%99%E7%BD%911.png")
        )

        Product.create!(title: "路易拉菲干红葡萄酒",
          description: "法国原瓶进口红酒 路易拉菲干红葡萄酒整箱六支装750ml*6",
          price: 299,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E6%8B%89%E8%8F%B26.jpg")
          )

        Product.create!(title: "贵州茅台酒",
          description: "陈年老酒 贵州茅台酒（大木漆珍品）2012年 53度 500ml*4瓶整箱 盛世陈香,
          price: 11399,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E8%8C%85%E5%8F%B02.jpg")
          )

        Product.create!(title: "五粮液酒",
          description: "华致酒行 50°五粮液陈酿年份酒10年消费装（2016版）500ml",
          price: 9999,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E4%BA%94%E7%B2%AE%E6%B6%B21.jpg")
          )

        Product.create!(title: "五粮液酒",
          description: "陈年老酒 五粮液酒 原瓶老酒 约22年酒龄 1995年52度浓香型500ML",
          price: 2350,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E4%BA%94%E7%B2%AE%E6%B6%B22.jpg")
          )

        Product.create!(title: "白兰地",
          description: "宝树行 轩尼诗XO700mL 整箱六支装 干邑白兰地法国原装进口洋酒0.7L",
          price: 7620,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E5%AE%9D%E6%A0%91%E8%A1%8C1.jpg")
          )

        Product.create!(title: "白兰地",
          description: "轩尼诗（Hennessy）XO 干邑白兰地 40度法国进口洋酒 700ml整箱6瓶装",
          price: 8288,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/xo3.jpg")
          )

        Product.create!(title: "白兰地",
          description: "宝树行 人头马路易十三700mL Remy Martin LouisXIII干邑白兰地洋酒",
          price: 17800,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E5%AE%9D%E6%A0%91%E8%A1%8C2.jpg")
          )

        Product.create!(title: "红葡萄酒",
          description: "法国原瓶进口红酒 波尔多AOC级圣马丁王子干红葡萄酒玛嘉唯诺750ml 13%vol重瓶型六支装+酒具套装",
          price: 208,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E7%BA%A2%E8%91%A1%E8%90%843.jpg")
          )

        Product.create!(title: "牛栏山 经典",
          description: "牛栏山 经典 52度 500ml*6瓶 整箱装",
          price: 2199,
          quantity: 28,
          image: open("http://oq3mpwc6v.bkt.clouddn.com/%E4%BA%8C%E9%94%85%E5%A4%B41.jpg")
          )
