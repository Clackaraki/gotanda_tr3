var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine = Engine.create();
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false, // ワイヤーフレームを無効にします
    }
});
// オブジェクトを作成します
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
// オブジェクトをワールドに追加します
World.add(engine.world, [boxA, boxB]);
// レンダリングを開始します
Render.run(render);
// メインループの中で背景色を変更します
(function renderLoop() {
    var context = render.context;
    context.fillStyle = ‘#FFFFFF’; // ここで背景色を白に設定します
    context.fillRect(0, 0, render.canvas.width, render.canvas.height);
    // 次のフレームのレンダリングをリクエストします
    window.requestAnimationFrame(renderLoop);
})();















