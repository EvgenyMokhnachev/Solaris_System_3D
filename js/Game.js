function Game(){
    Game.scene = new THREE.Scene();
    Game.render = new THREE.WebGLRenderer();
    Game.camera = new THREE.PerspectiveCamera(50, document.documentElement.clientWidth/document.documentElement.clientHeight, 0.1, 50000);
    Game.camera.position.x = 0;
    Game.camera.position.y = 0;
    Game.camera.position.z = 9000;

    Game.keys = {
        up: false,
        downs: false,
        right: false,
        left: false
    };

    Game.heroes = {};
    Game.update();
    var startGeometry = new THREE.Geometry();
    var startMaterial = new THREE.ParticleBasicMaterial({color: 0xbbbbbb, size: 1, sizeAttenuation: false, opacity: 0.1});
    for(var i=0;i<50000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(50000);
        startGeometry.vertices.push(vertex);
    }
    var stars = new THREE.ParticleSystem(startGeometry, startMaterial);
    stars.scale.set(1.3,1.3,1.3);

    Game.scene.add(stars);
    Game.initMouseEvents();
    Game.render.setSize(document.documentElement.clientWidth-4, document.documentElement.clientHeight-4);
    document.body.appendChild(Game.render.domElement);
    Game.animation();
}

Game.update = function(){
    var sun = new Planet('Sun', 'textures/sunTexture.jpg', 2000, 0, 0, 0);
    Game.heroes[sun.name] = sun;
    Game.scene.add(sun.mesh);

    var mercury = new Planet('Mercury', 'textures/mercuryTexture.jpg', 50, 750, 0, 0);
    Game.heroes[mercury.name] = mercury;
    Game.scene.add(mercury.mesh);

    var venus = new Planet('Venus', 'textures/venusTexture.jpg', 250, 1500, 0 ,0);
    Game.heroes[venus.name] = venus;
    Game.scene.add(venus.mesh);

    var earth = new Planet('Earth', 'textures/earthTexture.jpg', 200, 2250, 0 ,0);
    Game.heroes[earth.name] = earth;
    Game.scene.add(earth.mesh);

    var moon = new Planet('Moon', 'textures/moonTexture.jpg', 20, 2300, 0 ,0);
    Game.heroes[moon.name] = moon;
    Game.scene.add(moon.mesh);

    var mars = new Planet('Mars', 'textures/marsTexture.jpg', 150, 3000 ,0);
    Game.heroes[mars.name] = mars;
    Game.scene.add(mars.mesh);

    var jupiter = new Planet('Jupiter', 'textures/jupiterTexture.jpg', 600, 5000, 0 ,0);
    Game.heroes[jupiter.name] = jupiter;
    Game.scene.add(jupiter.mesh);

    var saturn = new Planet('Saturn', 'textures/saturTexture.jpg', 500, 12000, 0 ,0);
    Game.heroes[saturn.name] = saturn;
    Game.scene.add(saturn.mesh);

    var uranus = new Planet('Uranus', 'textures/uranusTexture.jpg', 400, 15000, 0 ,0);
    Game.heroes[uranus.name] = uranus;
    Game.scene.add(uranus.mesh);

    var neptune = new Planet('Neptune', 'textures/neptuneTexture.jpg', 400, 18000, 0 ,0);
    Game.heroes[neptune.name] = neptune;
    Game.scene.add(neptune.mesh);
};


Game.animation = function(){
    requestAnimationFrame(Game.animation);

    var sun = Game.heroes['Sun'];

    var mercury = Game.heroes['Mercury'];
    var venus = Game.heroes['Venus'];
    var earth = Game.heroes['Earth'];
    var moon = Game.heroes['Moon'];
    var mars = Game.heroes['Mars'];
    var jupiter = Game.heroes['Jupiter'];
    var saturn = Game.heroes['Saturn'];
    var uranus = Game.heroes['Uranus'];
    var neptune = Game.heroes['Neptune'];

    sun.rotation(0.002);
    mercury.rotation(0.002);
    venus.rotation(0.002);
    earth.rotation(0.002);
    moon.rotation(0.002);
    mars.rotation(0.002);
    jupiter.rotation(0.002);
    saturn.rotation(0.002);
    uranus.rotation(0.002);
    neptune.rotation(0.002);

    mercury.whiling(sun, 750, 8, 0);
    venus.whiling(sun, 1500, 7, 0);
    earth.whiling(sun, 2500, 6, 0);
    moon.whiling(earth, 50, 10, 0);
    mars.whiling(sun, 4000, 5, 0);
    jupiter.whiling(sun, 8500, 4, 0);
    saturn.whiling(sun, 12000, 3, 0);
    uranus.whiling(sun, 15000, 2, 0);
    neptune.whiling(sun, 18000, 1, 0);

    if(Game.keys.up) Game.camera.position.z -= 40;
    if(Game.keys.downs) Game.camera.position.z += 40;
    if(Game.keys.right) Game.camera.position.x += 40;
    if(Game.keys.left) Game.camera.position.x -= 40;

    Game.render.render(Game.scene, Game.camera);
};

Game.initMouseEvents = function(){
    //document.onmousedown = function(event){
    //    var clickXPosition = event.pageX;
    //    var clickYPosition = event.pageY;
    //    document.onmousemove = function(event){
    //        var offsetX = (event.pageX-clickXPosition)*0.02;
    //        var offsetY = (event.pageY-clickYPosition)*0.02;
    //        Game.camera.position.x += offsetX > 5 ? 5 : offsetX < -5 ? -5 : offsetX;
    //        Game.camera.position.y += offsetY > 5 ? 5 : offsetY < -5 ? -5 : offsetY;
    //    }
    //};
    //
    //document.onmouseup = function(){
    //    document.onmousemove = function(){};
    //};

    document.onkeydown = function(event){
        switch (event.keyCode){
            case (38): Game.keys.up = true; break;
            case (40): Game.keys.downs = true; break;
            case (39): Game.keys.right = true; break;
            case (37): Game.keys.left = true; break;
        }
    };

    document.onkeyup = function(event){
        switch (event.keyCode){
            case (38): Game.keys.up = false; break;
            case (40): Game.keys.downs = false; break;
            case (39): Game.keys.right = false; break;
            case (37): Game.keys.left = false; break;
        }
    };
};