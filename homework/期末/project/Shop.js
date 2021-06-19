const Main = {}

Main.html = `
<h1>Welcome to AirPlane's Web<h1>
<p>Do you want to know more about our company?<p>
<p>Join to us<p>
<img src="圖片/Airplane.png" alt="AirPlane" width="700" height="530">
`
const Shop = {
  name: '遠洋航空',
  address: '金門縣金寧鄉環島北路1段356號',
  tel: '082-443333',
  items: {'高雄-->金門': 1800, '台北-->金門': 1400, '台中-->金門': 1350 },
  addons: {'大人': 1.0, '小孩': 0.5, '殘障':0.8, '軍公教': 0.7, '公民': 0.75 },
  orderCount: 0,
}

Shop.html = `
<div>
  <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  <button class="big" onclick="Report.start(flag)">本日報表</button><br/><br/>
  <button class="big" onclick="Setting.start(flag)">商店設定</button><br/><br/>
</div>
`

Shop.start = function () {
  Shop.init()
  Shop.name = localStorage.getItem('Shop.name') || Shop.name
  Shop.address = localStorage.getItem('Shop.address') || Shop.address
  Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
  Ui.id('menuShopName').innerHTML = Shop.name
  const itemsJson = localStorage.getItem('Shop.items')
  const addonsJson = localStorage.getItem('Shop.addons')
  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
  Ui.show(Main.html)
}

Shop.init = function () {
  Shop.orderCount = localStorage.getItem('Pos.Order.count')
  if (Shop.orderCount == null) {
    Shop.orderCount = 0
    localStorage.setItem('Pos.Order.count', Shop.orderCount)
  }
}

Shop.incCount = function () {
  // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
  localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
}

Shop.saveOrder = function (Order) {
  localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
}

Shop.getOrder = function (i) {
  let orderJson = localStorage.getItem('Pos.Order.'+i)
  if (orderJson == null) return null
  return JSON.parse(orderJson)
}
