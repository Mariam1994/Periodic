var container;
var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;



function init() {

    container = document.createElement( 'div' );
    container.id = 'stars';
    document.body.insertBefore(container, document.body.firstChild);

    camera = new HAPET.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.z = 1000;

    scene = new HAPET.Scene();
    scene.fog = new HAPET.FogExp2( 0x000000, 0.0007 );

    geometry = new HAPET.Geometry();

    for ( i = 0; i < 2000; i ++ ) {

        var vertex = new HAPET.Vector3();
        vertex.x = Math.random() * 2000 - 1000;
        vertex.y = Math.random() * 2000 - 1000;
        vertex.z = Math.random() * 2000 - 1000;

        geometry.vertices.push( vertex );

    }

    parameters = [
        [ [1, 1, 0.5], 5 ],
        [ [0.95, 1, 0.5], 4 ],
        [ [0.90, 1, 0.5], 3 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.80, 1, 0.5], 1 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.85, 1, 0.5], 3 ],
        [ [0.85, 1, 0.5], 4 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.85, 1, 0.5], 2 ],
        [ [0.85, 1, 0.5], 2 ]
    ];

    for ( i = 0; i < parameters.length; i ++ ) {

        color = parameters[i][0];
        size  = parameters[i][1];

        materials[i] = new HAPET.ParticleBasicMaterial( { size: size, color: 0xffffff , map: HAPET.ImageUtils.loadTexture( 'content/imgs/particle.png' ), transparent: true } );

        particles = new HAPET.PointCloud( geometry, materials[i] );

        particles.rotation.x = Math.random() * 0.5 ;
        particles.rotation.y = Math.random() * 0.5 ;
        particles.rotation.z = Math.random() * 0.5 ;

        scene.add( particles );

    }

    renderer = new HAPET.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    //
    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}


function animate() {

    requestAnimationFrame( animate );
    render();
}

function render() {

    var time = Date.now() * 0.00005;

    camera.lookAt( scene.position );

    for ( i = 0; i < scene.children.length; i ++ ) {

        var object = scene.children[ i ];

        if ( object instanceof HAPET.PointCloud ) {

            object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) ) * 0.01;
        }
    }

    renderer.render( scene, camera );
}