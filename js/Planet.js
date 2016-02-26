function Planet(name, textureSrc, radius, x, y, z){
    this.name = name;
    this.texture = THREE.ImageUtils.loadTexture(textureSrc);
    this.geometry = new THREE.SphereGeometry(radius, 100, 100, 100);
    this.material = new THREE.MeshBasicMaterial({map: this.texture});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = x;
    this.mesh.position.y = y;
    this.mesh.position.z = z;
    this.radius = radius;

    this.period = 0;
}

Planet.prototype.rotation = function(count){
    this.mesh.rotation.y += count;
};

Planet.prototype.whiling = function(target, remoteness, speed, angle){
    this.period += Math.PI/180*speed;

    //this.mesh.position.x = Math.sin(this.period*0.1)*(target.radius+remoteness);
    //this.mesh.position.z = Math.cos(this.period*0.1)*(target.radius+remoteness);

    this.mesh.position.x = Math.sin(this.period*0.1)*(target.radius+remoteness)+target.mesh.position.x;
    this.mesh.position.y = Math.cos(this.period*0.1)*angle+target.mesh.position.y;
    this.mesh.position.z = Math.cos(this.period*0.1)*(target.radius+remoteness)+target.mesh.position.z;

    //this.mesh.position.x = Math.sin(this.period*0.1)*(target.mesh.position.x+remoteness);
    //this.mesh.position.z = Math.cos(this.period*0.1)*(target.mesh.position.y+remoteness);
};