// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 1;
	var canvasHeight = window.innerHeight * 1;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
    
        var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.2, 0.2, 0.2 ) );
	migeometria.vertices.push( new THREE.Vector3( -0.2, 0.2, 0.2 ) );
	migeometria.vertices.push( new THREE.Vector3( -0.2, -0.2, 0.2 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.2, -0.2, 0.2 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.2, -0.2, -0.5 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.2, 0.2, -0.5 ) );
	migeometria.vertices.push( new THREE.Vector3( -0.2, 0.2, -0.5 ) );
	migeometria.vertices.push( new THREE.Vector3( -0.2, -0.2, -0.5 ) );


	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria.faces.push( new THREE.Face3( 0, 2, 3 ) );
	migeometria.faces.push( new THREE.Face3( 0, 3, 4 ) );
	migeometria.faces.push( new THREE.Face3( 0, 4, 5 ) );
	migeometria.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria.faces.push( new THREE.Face3( 6, 5, 4 ) );
	migeometria.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometria.faces.push( new THREE.Face3( 5, 6, 1 ) );
	migeometria.faces.push( new THREE.Face3( 5, 1, 0 ) );
	migeometria.faces.push( new THREE.Face3( 3, 2, 7 ) );
	migeometria.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x633F08 } ); // Material de color rojo
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto




	// REGALO 1
	
    
        var regalo1 = new THREE.Geometry();
	regalo1.vertices.push( new THREE.Vector3( -1, -0.8, 0.1 ) );
	regalo1.vertices.push( new THREE.Vector3( -1.4, -0.8, 0.1 ) );
	regalo1.vertices.push( new THREE.Vector3( -1.4, -1.4, 0.1 ) );
	regalo1.vertices.push( new THREE.Vector3( -1, -1.4, 0.1 ) );
	regalo1.vertices.push( new THREE.Vector3( -1, -1.4, -0.5 ) );
	regalo1.vertices.push( new THREE.Vector3( -1, -0.8, -0.5 ) );
	regalo1.vertices.push( new THREE.Vector3( -1.4, -0.8, -0.5 ) );
	regalo1.vertices.push( new THREE.Vector3( -1.4, -1.4, -0.5 ) );


	regalo1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	regalo1.faces.push( new THREE.Face3( 0, 2, 3 ) );
	regalo1.faces.push( new THREE.Face3( 0, 3, 4 ) );
	regalo1.faces.push( new THREE.Face3( 0, 4, 5 ) );
	regalo1.faces.push( new THREE.Face3( 1, 6, 7 ) );
	regalo1.faces.push( new THREE.Face3( 1, 7, 2 ) );
	regalo1.faces.push( new THREE.Face3( 6, 5, 4 ) );
	regalo1.faces.push( new THREE.Face3( 6, 4, 7 ) );
	regalo1.faces.push( new THREE.Face3( 5, 6, 1 ) );
	regalo1.faces.push( new THREE.Face3( 5, 1, 0 ) );
	regalo1.faces.push( new THREE.Face3( 3, 2, 7 ) );
	regalo1.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xF84E28 } ); // Material de color rojo
    var miregalo1 = new THREE.Mesh (regalo1, material); // Crea el objeto


    // REGALO 2
	
    
        var regalo2 = new THREE.Geometry();
	regalo2.vertices.push( new THREE.Vector3( -1, 0.7, 0.2 ) );
	regalo2.vertices.push( new THREE.Vector3( -1.4, 0.7, 0.2 ) );
	regalo2.vertices.push( new THREE.Vector3( -1.4, -0.7, 0.2 ) );
	regalo2.vertices.push( new THREE.Vector3( -1, -0.7, 0.2 ) );
	regalo2.vertices.push( new THREE.Vector3( -1, -0.7, -0.5 ) );
	regalo2.vertices.push( new THREE.Vector3( -1, 0.7, -0.5 ) );
	regalo2.vertices.push( new THREE.Vector3( -1.4, 0.7, -0.5 ) );
	regalo2.vertices.push( new THREE.Vector3( -1.4, -0.7, -0.5 ) );


	regalo2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	regalo2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	regalo2.faces.push( new THREE.Face3( 0, 3, 4 ) );
	regalo2.faces.push( new THREE.Face3( 0, 4, 5 ) );
	regalo2.faces.push( new THREE.Face3( 1, 6, 7 ) );
	regalo2.faces.push( new THREE.Face3( 1, 7, 2 ) );
	regalo2.faces.push( new THREE.Face3( 6, 5, 4 ) );
	regalo2.faces.push( new THREE.Face3( 6, 4, 7 ) );
	regalo2.faces.push( new THREE.Face3( 5, 6, 1 ) );
	regalo2.faces.push( new THREE.Face3( 5, 1, 0 ) );
	regalo2.faces.push( new THREE.Face3( 3, 2, 7 ) );
	regalo2.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xEB4D2A } ); // Material de color rojo
    var miregalo2 = new THREE.Mesh (regalo2, material); // Crea el objeto


    // REGALO 3
	
    
        var regalo3 = new THREE.Geometry();
	regalo3.vertices.push( new THREE.Vector3( 1.2, 1.2, -0.1 ) );
	regalo3.vertices.push( new THREE.Vector3( 0.8, 1.2, -0.1 ) );
	regalo3.vertices.push( new THREE.Vector3( 0.8, 0.8, -0.1 ) );
	regalo3.vertices.push( new THREE.Vector3( 1.2, 0.8, -0.1 ) );
	regalo3.vertices.push( new THREE.Vector3( 1.2, 0.8, -0.5 ) );
	regalo3.vertices.push( new THREE.Vector3( 1.2, 1.2, -0.5 ) );
	regalo3.vertices.push( new THREE.Vector3( 0.8, 1.2, -0.5 ) );
	regalo3.vertices.push( new THREE.Vector3( 0.8, 0.8, -0.5 ) );


	regalo3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	regalo3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	regalo3.faces.push( new THREE.Face3( 0, 3, 4 ) );
	regalo3.faces.push( new THREE.Face3( 0, 4, 5 ) );
	regalo3.faces.push( new THREE.Face3( 1, 6, 7 ) );
	regalo3.faces.push( new THREE.Face3( 1, 7, 2 ) );
	regalo3.faces.push( new THREE.Face3( 6, 5, 4 ) );
	regalo3.faces.push( new THREE.Face3( 6, 4, 7 ) );
	regalo3.faces.push( new THREE.Face3( 5, 6, 1 ) );
	regalo3.faces.push( new THREE.Face3( 5, 1, 0 ) );
	regalo3.faces.push( new THREE.Face3( 3, 2, 7 ) );
	regalo3.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xE05030 } ); // Material de color rojo
    var miregalo3 = new THREE.Mesh (regalo3, material); // Crea el objeto


     // REGALO 4
	
    
        var regalo4 = new THREE.Geometry();
	regalo4.vertices.push( new THREE.Vector3( 0.5, -0.4, -0.3 ) );
	regalo4.vertices.push( new THREE.Vector3( -0.9, -0.4, -0.3 ) );
	regalo4.vertices.push( new THREE.Vector3( -0.9, -1.5, -0.3 ) );
	regalo4.vertices.push( new THREE.Vector3( 0.5, -1.5, -0.3 ) );
	regalo4.vertices.push( new THREE.Vector3( 0.5, -1.5, -0.5 ) );
	regalo4.vertices.push( new THREE.Vector3( 0.5, -0.4, -0.5 ) );
	regalo4.vertices.push( new THREE.Vector3( -0.9, -0.4, -0.5 ) );
	regalo4.vertices.push( new THREE.Vector3( -0.9, -1.5, -0.5 ) );


	regalo4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	regalo4.faces.push( new THREE.Face3( 0, 2, 3 ) );
	regalo4.faces.push( new THREE.Face3( 0, 3, 4 ) );
	regalo4.faces.push( new THREE.Face3( 0, 4, 5 ) );
	regalo4.faces.push( new THREE.Face3( 1, 6, 7 ) );
	regalo4.faces.push( new THREE.Face3( 1, 7, 2 ) );
	regalo4.faces.push( new THREE.Face3( 6, 5, 4 ) );
	regalo4.faces.push( new THREE.Face3( 6, 4, 7 ) );
	regalo4.faces.push( new THREE.Face3( 5, 6, 1 ) );
	regalo4.faces.push( new THREE.Face3( 5, 1, 0 ) );
	regalo4.faces.push( new THREE.Face3( 3, 2, 7 ) );
	regalo4.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xD35437 } ); // Material de color rojo
    var miregalo4 = new THREE.Mesh (regalo4, material); // Crea el objeto


    // REGALO 5
	
    
        var regalo5 = new THREE.Geometry();
	regalo5.vertices.push( new THREE.Vector3( 1.2, 0.6, -0.2 ) );
	regalo5.vertices.push( new THREE.Vector3( 0.6, 0.6, -0.2 ) );
	regalo5.vertices.push( new THREE.Vector3( 0.6, -1.3, -0.2 ) );
	regalo5.vertices.push( new THREE.Vector3( 1.2, -1.3, -0.2 ) );
	regalo5.vertices.push( new THREE.Vector3( 1.2, -1.3, -0.5 ) );
	regalo5.vertices.push( new THREE.Vector3( 1.2, 0.6, -0.5 ) );
	regalo5.vertices.push( new THREE.Vector3( 0.6, 0.6, -0.5 ) );
	regalo5.vertices.push( new THREE.Vector3( 0.6, -1.3, -0.5 ) );


	regalo5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	regalo5.faces.push( new THREE.Face3( 0, 2, 3 ) );
	regalo5.faces.push( new THREE.Face3( 0, 3, 4 ) );
	regalo5.faces.push( new THREE.Face3( 0, 4, 5 ) );
	regalo5.faces.push( new THREE.Face3( 1, 6, 7 ) );
	regalo5.faces.push( new THREE.Face3( 1, 7, 2 ) );
	regalo5.faces.push( new THREE.Face3( 6, 5, 4 ) );
	regalo5.faces.push( new THREE.Face3( 6, 4, 7 ) );
	regalo5.faces.push( new THREE.Face3( 5, 6, 1 ) );
	regalo5.faces.push( new THREE.Face3( 5, 1, 0 ) );
	regalo5.faces.push( new THREE.Face3( 3, 2, 7 ) );
	regalo5.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xF99D05 } ); // Material de color rojo
    var miregalo5 = new THREE.Mesh (regalo5, material); // Crea el objeto

    // OBJECT
	
    
        var piramide = new THREE.Geometry();
	piramide.vertices.push( new THREE.Vector3( 0, 0, 1 ) );
	piramide.vertices.push( new THREE.Vector3( 1, 1, 0 ) );
	piramide.vertices.push( new THREE.Vector3( 1, -1, 0 ) );
	piramide.vertices.push( new THREE.Vector3( -1, -1, 0 ) );
	piramide.vertices.push( new THREE.Vector3( -1, 1, 0 ) );


	piramide.faces.push( new THREE.Face3( 1, 0, 2 ) );
	piramide.faces.push( new THREE.Face3( 2, 0, 3 ) );
	piramide.faces.push( new THREE.Face3( 3, 0, 4 ) );
	piramide.faces.push( new THREE.Face3( 4, 0, 1 ) );
	piramide.faces.push( new THREE.Face3( 1, 2, 3 ) );
	piramide.faces.push( new THREE.Face3( 1, 3, 4 ) );

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x036D01 } ); // Material de color rojo
    var miobjeto1 = new THREE.Mesh (piramide, material); // Crea el objeto


       // OBJECT
	
    
        var piramide2 = new THREE.Geometry();
	piramide2.vertices.push( new THREE.Vector3( 0, 0, 1.6 ) );
	piramide2.vertices.push( new THREE.Vector3( 0.8, 0.8, 0.6 ) );
	piramide2.vertices.push( new THREE.Vector3( 0.8, -0.8, 0.6 ) );
	piramide2.vertices.push( new THREE.Vector3( -0.8, -0.8, 0.6 ) );
	piramide2.vertices.push( new THREE.Vector3( -0.8, 0.8, 0.6 ) );


	piramide2.faces.push( new THREE.Face3( 1, 0, 2 ) );
	piramide2.faces.push( new THREE.Face3( 2, 0, 3 ) );
	piramide2.faces.push( new THREE.Face3( 3, 0, 4 ) );
	piramide2.faces.push( new THREE.Face3( 4, 0, 1 ) );
	piramide2.faces.push( new THREE.Face3( 1, 2, 3 ) );
	piramide2.faces.push( new THREE.Face3( 1, 3, 4 ) );

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x037C01 } ); // Material de color rojo
    var miobjeto2 = new THREE.Mesh (piramide2, material); // Crea el objeto


       // OBJECT
	
    
        var piramide3 = new THREE.Geometry();
	piramide3.vertices.push( new THREE.Vector3( 0, 0, 2.1 ) );
	piramide3.vertices.push( new THREE.Vector3( 0.6, 0.6, 1.1 ) );
	piramide3.vertices.push( new THREE.Vector3( 0.6, -0.6, 1.1 ) );
	piramide3.vertices.push( new THREE.Vector3( -0.6, -0.6, 1.1 ) );
	piramide3.vertices.push( new THREE.Vector3( -0.6, 0.6, 1.1 ) );


	piramide3.faces.push( new THREE.Face3( 1, 0, 2 ) );
	piramide3.faces.push( new THREE.Face3( 2, 0, 3 ) );
	piramide3.faces.push( new THREE.Face3( 3, 0, 4 ) );
	piramide3.faces.push( new THREE.Face3( 4, 0, 1 ) );
	piramide3.faces.push( new THREE.Face3( 1, 2, 3 ) );
	piramide3.faces.push( new THREE.Face3( 1, 3, 4 ) );

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x038C00 } ); // Material de color rojo
    var miobjeto3 = new THREE.Mesh (piramide3, material); // Crea el objeto


       // OBJECT
	
    
        var piramide4 = new THREE.Geometry();
	piramide4.vertices.push( new THREE.Vector3( 0, 0, 2.6 ) );
	piramide4.vertices.push( new THREE.Vector3( 0.4, 0.4, 1.6 ) );
	piramide4.vertices.push( new THREE.Vector3( 0.4, -0.4, 1.6 ) );
	piramide4.vertices.push( new THREE.Vector3( -0.4, -0.4, 1.6 ) );
	piramide4.vertices.push( new THREE.Vector3( -0.4, 0.4, 1.6 ) );


	piramide4.faces.push( new THREE.Face3( 1, 0, 2 ) );
	piramide4.faces.push( new THREE.Face3( 2, 0, 3 ) );
	piramide4.faces.push( new THREE.Face3( 3, 0, 4 ) );
	piramide4.faces.push( new THREE.Face3( 4, 0, 1 ) );
	piramide4.faces.push( new THREE.Face3( 1, 2, 3 ) );
	piramide4.faces.push( new THREE.Face3( 1, 3, 4 ) );

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x04A400 } ); // Material de color rojo
    var miobjeto4 = new THREE.Mesh (piramide4, material); // Crea el objeto

       // PISO
	
    
        var plano1 = new THREE.Geometry();
	plano1.vertices.push( new THREE.Vector3( 5.5, 1.3, -0.5 ) );
	plano1.vertices.push( new THREE.Vector3( 5.5, -2.5, -0.5 ) );
	plano1.vertices.push( new THREE.Vector3( -1.5, -2.5, -0.5 ) );
	plano1.vertices.push( new THREE.Vector3( -1.5, 1.3, -0.5 ) );


	plano1.faces.push( new THREE.Face3( 1, 0, 2 ) );
	plano1.faces.push( new THREE.Face3( 2, 0, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0xD29849 } ); // Material de color rojo
    var miobjeto5 = new THREE.Mesh (plano1, material); // Crea el objeto

       // PAREDI
	
    
        var plano2 = new THREE.Geometry();
	plano2.vertices.push( new THREE.Vector3(-1.5, 1.3, 3.5 ) );
	plano2.vertices.push( new THREE.Vector3(-1.5, -2.5, 3.5 ) );
	plano2.vertices.push( new THREE.Vector3( -1.5, -2.5, -0.4 ) );
	plano2.vertices.push( new THREE.Vector3( -1.5, 1.3, -0.4 ) );


	plano2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	plano2.faces.push( new THREE.Face3( 0, 2, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0xE5E28E } ); // Material de color rojo
    var miobjeto6 = new THREE.Mesh (plano2, material); // Crea el objeto


       // PAREDD
	
    
        var plano3 = new THREE.Geometry();
	plano3.vertices.push( new THREE.Vector3(-1.5, 1.3, 3.5 ) );
	plano3.vertices.push( new THREE.Vector3(5.5, 1.3, 3.5 ) );
	plano3.vertices.push( new THREE.Vector3(5.5, 1.3, -0.5 ) );
	plano3.vertices.push( new THREE.Vector3( -1.5, 1.3, -0.5 ) );


	plano3.faces.push( new THREE.Face3( 1, 0, 2 ) );
	plano3.faces.push( new THREE.Face3( 2, 0, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0x9E6A3C } ); // Material de color rojo
    var miobjeto7 = new THREE.Mesh (plano3, material); // Crea el objeto


     // PAREDIA
	
    
        var plano4 = new THREE.Geometry();
	plano4.vertices.push( new THREE.Vector3(-1.5, 1.3, -0.4 ) );
	plano4.vertices.push( new THREE.Vector3(-1.5, -2.5, -0.4 ) );
	plano4.vertices.push( new THREE.Vector3( -1.5, -2.5, -0.5 ) );
	plano4.vertices.push( new THREE.Vector3( -1.5, 1.3, -0.5 ) );


	plano4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	plano4.faces.push( new THREE.Face3( 0, 2, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ); // Material de color rojo
    var miobjeto8 = new THREE.Mesh (plano4, material); // Crea el objeto



     // CHIMENEA1
	
    
        var chimenea1 = new THREE.Geometry();
	chimenea1.vertices.push( new THREE.Vector3( 2, 1.3, 1.3 ) );
	chimenea1.vertices.push( new THREE.Vector3( 1.4, 1.3, 1.3 ) );
	chimenea1.vertices.push( new THREE.Vector3( 1.4, 0.9, 1.3 ) );
	chimenea1.vertices.push( new THREE.Vector3( 2, 0.9, 1.3 ) );
	chimenea1.vertices.push( new THREE.Vector3( 2, 0.9, 0 ) );
	chimenea1.vertices.push( new THREE.Vector3( 2, 1.3, 0 ) );
	chimenea1.vertices.push( new THREE.Vector3( 1.4, 1.3, 0 ) );
	chimenea1.vertices.push( new THREE.Vector3( 1.4, 0.9, 0 ) );


	chimenea1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	chimenea1.faces.push( new THREE.Face3( 0, 2, 3 ) );
	chimenea1.faces.push( new THREE.Face3( 0, 3, 4 ) );
	chimenea1.faces.push( new THREE.Face3( 0, 4, 5 ) );
	chimenea1.faces.push( new THREE.Face3( 1, 6, 7 ) );
	chimenea1.faces.push( new THREE.Face3( 1, 7, 2 ) );
	chimenea1.faces.push( new THREE.Face3( 6, 5, 4 ) );
	chimenea1.faces.push( new THREE.Face3( 6, 4, 7 ) );
	chimenea1.faces.push( new THREE.Face3( 5, 6, 1 ) );
	chimenea1.faces.push( new THREE.Face3( 5, 1, 0 ) );
	chimenea1.faces.push( new THREE.Face3( 3, 2, 7 ) );
	chimenea1.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x856C66 } ); // Material de color rojo
    var michimenea1 = new THREE.Mesh (chimenea1, material); // Crea el objeto


    // CHIMENEA2
	
        var chimenea2 = new THREE.Geometry();
	chimenea2.vertices.push( new THREE.Vector3( 3.5, 1.3, 1.3 ) );
	chimenea2.vertices.push( new THREE.Vector3( 2.9, 1.3, 1.3 ) );
	chimenea2.vertices.push( new THREE.Vector3( 2.9, 0.9, 1.3 ) );
	chimenea2.vertices.push( new THREE.Vector3( 3.5, 0.9, 1.3 ) );
	chimenea2.vertices.push( new THREE.Vector3( 3.5, 0.9, 0 ) );
	chimenea2.vertices.push( new THREE.Vector3( 3.5, 1.3, 0 ) );
	chimenea2.vertices.push( new THREE.Vector3( 2.9, 1.3, 0 ) );
	chimenea2.vertices.push( new THREE.Vector3( 2.9, 0.9, 0 ) );


	chimenea2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	chimenea2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	chimenea2.faces.push( new THREE.Face3( 0, 3, 4 ) );
	chimenea2.faces.push( new THREE.Face3( 0, 4, 5 ) );
	chimenea2.faces.push( new THREE.Face3( 1, 6, 7 ) );
	chimenea2.faces.push( new THREE.Face3( 1, 7, 2 ) );
	chimenea2.faces.push( new THREE.Face3( 6, 5, 4 ) );
	chimenea2.faces.push( new THREE.Face3( 6, 4, 7 ) );
	chimenea2.faces.push( new THREE.Face3( 5, 6, 1 ) );
	chimenea2.faces.push( new THREE.Face3( 5, 1, 0 ) );
	chimenea2.faces.push( new THREE.Face3( 3, 2, 7 ) );
	chimenea2.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x856C66 } ); // Material de color rojo
    var michimenea2 = new THREE.Mesh (chimenea2, material); // Crea el objeto


    // CHIMENEA3
	
        var chimenea3 = new THREE.Geometry();
	chimenea3.vertices.push( new THREE.Vector3( 3.6, 1.3, 0 ) );
	chimenea3.vertices.push( new THREE.Vector3( 1.3, 1.3, 0 ) );
	chimenea3.vertices.push( new THREE.Vector3( 1.3, 0.8, 0 ) );
	chimenea3.vertices.push( new THREE.Vector3( 3.6, 0.8, 0 ) );
	chimenea3.vertices.push( new THREE.Vector3( 3.6, 0.8, -0.5 ) );
	chimenea3.vertices.push( new THREE.Vector3( 3.6, 1.3, -0.5 ) );
	chimenea3.vertices.push( new THREE.Vector3( 1.3, 1.3, -0.5 ) );
	chimenea3.vertices.push( new THREE.Vector3( 1.3, 0.8, -0.5 ) );


	chimenea3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	chimenea3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	chimenea3.faces.push( new THREE.Face3( 0, 3, 4 ) );
	chimenea3.faces.push( new THREE.Face3( 0, 4, 5 ) );
	chimenea3.faces.push( new THREE.Face3( 1, 6, 7 ) );
	chimenea3.faces.push( new THREE.Face3( 1, 7, 2 ) );
	chimenea3.faces.push( new THREE.Face3( 6, 5, 4 ) );
	chimenea3.faces.push( new THREE.Face3( 6, 4, 7 ) );
	chimenea3.faces.push( new THREE.Face3( 5, 6, 1 ) );
	chimenea3.faces.push( new THREE.Face3( 5, 1, 0 ) );
	chimenea3.faces.push( new THREE.Face3( 3, 2, 7 ) );
	chimenea3.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x9E746B } ); // Material de color rojo
    var michimenea3 = new THREE.Mesh (chimenea3, material); // Crea el objeto


    // CHIMENEA4
	
        var chimenea4 = new THREE.Geometry();
	chimenea4.vertices.push( new THREE.Vector3( 3.5, 1.3, 1.8 ) );
	chimenea4.vertices.push( new THREE.Vector3( 1.4, 1.3, 1.8 ) );
	chimenea4.vertices.push( new THREE.Vector3( 1.4, 0.9, 1.8 ) );
	chimenea4.vertices.push( new THREE.Vector3( 3.5, 0.9, 1.8 ) );
	chimenea4.vertices.push( new THREE.Vector3( 3.5, 0.9, 1.3 ) );
	chimenea4.vertices.push( new THREE.Vector3( 3.5, 1.3, 1.3 ) );
	chimenea4.vertices.push( new THREE.Vector3( 1.4, 1.3, 1.3 ) );
	chimenea4.vertices.push( new THREE.Vector3( 1.4, 0.9, 1.3 ) );


	chimenea4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	chimenea4.faces.push( new THREE.Face3( 0, 2, 3 ) );
	chimenea4.faces.push( new THREE.Face3( 0, 3, 4 ) );
	chimenea4.faces.push( new THREE.Face3( 0, 4, 5 ) );
	chimenea4.faces.push( new THREE.Face3( 1, 6, 7 ) );
	chimenea4.faces.push( new THREE.Face3( 1, 7, 2 ) );
	chimenea4.faces.push( new THREE.Face3( 6, 5, 4 ) );
	chimenea4.faces.push( new THREE.Face3( 6, 4, 7 ) );
	chimenea4.faces.push( new THREE.Face3( 5, 6, 1 ) );
	chimenea4.faces.push( new THREE.Face3( 5, 1, 0 ) );
	chimenea4.faces.push( new THREE.Face3( 3, 2, 7 ) );
	chimenea4.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x9E746B } ); // Material de color rojo
    var michimenea4 = new THREE.Mesh (chimenea4, material); // Crea el objeto

    // CHIMENEA5
	
        var chimenea5 = new THREE.Geometry();
	chimenea5.vertices.push( new THREE.Vector3( 3.6, 1.3, 1.9 ) );
	chimenea5.vertices.push( new THREE.Vector3( 1.3, 1.3, 1.9 ) );
	chimenea5.vertices.push( new THREE.Vector3( 1.3, 0.9, 1.9 ) );
	chimenea5.vertices.push( new THREE.Vector3( 3.6, 0.9, 1.9 ) );
	chimenea5.vertices.push( new THREE.Vector3( 3.6, 0.9, 1.8 ) );
	chimenea5.vertices.push( new THREE.Vector3( 3.6, 1.3, 1.8 ) );
	chimenea5.vertices.push( new THREE.Vector3( 1.3, 1.3, 1.8 ) );
	chimenea5.vertices.push( new THREE.Vector3( 1.3, 0.9, 1.8 ) );


	chimenea5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	chimenea5.faces.push( new THREE.Face3( 0, 2, 3 ) );
	chimenea5.faces.push( new THREE.Face3( 0, 3, 4 ) );
	chimenea5.faces.push( new THREE.Face3( 0, 4, 5 ) );
	chimenea5.faces.push( new THREE.Face3( 1, 6, 7 ) );
	chimenea5.faces.push( new THREE.Face3( 1, 7, 2 ) );
	chimenea5.faces.push( new THREE.Face3( 6, 5, 4 ) );
	chimenea5.faces.push( new THREE.Face3( 6, 4, 7 ) );
	chimenea5.faces.push( new THREE.Face3( 5, 6, 1 ) );
	chimenea5.faces.push( new THREE.Face3( 5, 1, 0 ) );
	chimenea5.faces.push( new THREE.Face3( 3, 2, 7 ) );
	chimenea5.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x856C66 } ); // Material de color rojo
    var michimenea5 = new THREE.Mesh (chimenea5, material); // Crea el objeto


    // CHIMENEA6
	
    
        var chimenea6 = new THREE.Geometry();
	chimenea6.vertices.push( new THREE.Vector3(1.4, 1.2, 1.9 ) );
	chimenea6.vertices.push( new THREE.Vector3(3.5, 1.2, 1.9 ) );
	chimenea6.vertices.push( new THREE.Vector3(3.5, 1.2, 0 ) );
	chimenea6.vertices.push( new THREE.Vector3( 1.4, 1.2, 0 ) );


	chimenea6.faces.push( new THREE.Face3( 1, 0, 2 ) );
	chimenea6.faces.push( new THREE.Face3( 2, 0, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0xF18F38 } ); // Material de color rojo
    var michimenea6 = new THREE.Mesh (chimenea6, material); // Crea el objeto


    // SILLA1
	
        var silla1 = new THREE.Geometry();
	silla1.vertices.push( new THREE.Vector3( 4.9, 1.1, 1.3 ) );
	silla1.vertices.push( new THREE.Vector3( 3.7, 1.1, 1.3 ) );
	silla1.vertices.push( new THREE.Vector3( 3.7, 0.9, 1.3 ) );
	silla1.vertices.push( new THREE.Vector3( 4.9, 0.9, 1.3 ) );
	silla1.vertices.push( new THREE.Vector3( 4.9, 0.9, 0.1 ) );
	silla1.vertices.push( new THREE.Vector3( 4.9, 1.1, 0.1 ) );
	silla1.vertices.push( new THREE.Vector3( 3.7, 1.1, 0.1 ) );
	silla1.vertices.push( new THREE.Vector3( 3.7, 0.9, 0.1 ) );


	silla1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla1.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla1.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla1.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla1.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla1.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla1.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla1.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla1.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla1.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla1.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla1.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xFE1C1C } ); // Material de color rojo
    var misilla1 = new THREE.Mesh (silla1, material); // Crea el objeto


    // SILLA2
	
        var silla2 = new THREE.Geometry();
	silla2.vertices.push( new THREE.Vector3( 3.8, 1.1, 0.6 ) );
	silla2.vertices.push( new THREE.Vector3( 3.7, 1.1, 0.6 ) );
	silla2.vertices.push( new THREE.Vector3( 3.7, 0.2, 0.6 ) );
	silla2.vertices.push( new THREE.Vector3( 3.8, 0.2, 0.6 ) );
	silla2.vertices.push( new THREE.Vector3( 3.8, 0.2, 0.1 ) );
	silla2.vertices.push( new THREE.Vector3( 3.8, 1.1, 0.1 ) );
	silla2.vertices.push( new THREE.Vector3( 3.7, 1.1, 0.1 ) );
	silla2.vertices.push( new THREE.Vector3( 3.7, 0.2, 0.1 ) );


	silla2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla2.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla2.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla2.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla2.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla2.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla2.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla2.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla2.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla2.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla2.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xF81616 } ); // Material de color rojo
    var misilla2 = new THREE.Mesh (silla2, material); // Crea el objeto


    // SILLA3
	
        var silla3 = new THREE.Geometry();
	silla3.vertices.push( new THREE.Vector3( 4.9, 1.1, 0.6 ) );
	silla3.vertices.push( new THREE.Vector3( 4.8, 1.1, 0.6 ) );
	silla3.vertices.push( new THREE.Vector3( 4.8, 0.2, 0.6 ) );
	silla3.vertices.push( new THREE.Vector3( 4.9, 0.2, 0.6 ) );
	silla3.vertices.push( new THREE.Vector3( 4.9, 0.2, 0.1 ) );
	silla3.vertices.push( new THREE.Vector3( 4.9, 1.1, 0.1 ) );
	silla3.vertices.push( new THREE.Vector3( 4.8, 1.1, 0.1 ) );
	silla3.vertices.push( new THREE.Vector3( 4.8, 0.2, 0.1 ) );


	silla3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla3.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla3.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla3.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla3.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla3.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla3.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla3.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla3.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla3.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla3.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xF81616 } ); // Material de color rojo
    var misilla3 = new THREE.Mesh (silla3, material); // Crea el objeto


    // SILLA4
	
        var silla4 = new THREE.Geometry();
	silla4.vertices.push( new THREE.Vector3( 4.9, 1.1, 0.1 ) );
	silla4.vertices.push( new THREE.Vector3( 3.7, 1.1, 0.1 ) );
	silla4.vertices.push( new THREE.Vector3( 3.7, 0.2, 0.1 ) );
	silla4.vertices.push( new THREE.Vector3( 4.9, 0.2, 0.1 ) );
	silla4.vertices.push( new THREE.Vector3( 4.9, 0.2, 0 ) );
	silla4.vertices.push( new THREE.Vector3( 4.9, 1.1, 0 ) );
	silla4.vertices.push( new THREE.Vector3( 3.7, 1.1, 0 ) );
	silla4.vertices.push( new THREE.Vector3( 3.7, 0.2, 0 ) );


	silla4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla4.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla4.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla4.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla4.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla4.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla4.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla4.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla4.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla4.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla4.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla4.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xB83D3D } ); // Material de color rojo
    var misilla4 = new THREE.Mesh (silla4, material); // Crea el objeto

    // SILLA5
	
        var silla5 = new THREE.Geometry();
	silla5.vertices.push( new THREE.Vector3( 3.85, 0.35, 0 ) );
	silla5.vertices.push( new THREE.Vector3( 3.7, 0.35, 0 ) );
	silla5.vertices.push( new THREE.Vector3( 3.7, 0.2, 0 ) );
	silla5.vertices.push( new THREE.Vector3( 3.85, 0.2, 0 ) );
	silla5.vertices.push( new THREE.Vector3( 3.85, 0.2, -0.5 ) );
	silla5.vertices.push( new THREE.Vector3( 3.85, 0.35, -0.5 ) );
	silla5.vertices.push( new THREE.Vector3( 3.7, 0.35, -0.5 ) );
	silla5.vertices.push( new THREE.Vector3( 3.7, 0.2, -0.5 ) );


	silla5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla5.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla5.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla5.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla5.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla5.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla5.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla5.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla5.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla5.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla5.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla5.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // Material de color rojo
    var misilla5 = new THREE.Mesh (silla5, material); // Crea el objeto


    // SILLA6
	
        var silla6 = new THREE.Geometry();
	silla6.vertices.push( new THREE.Vector3( 4.9, 1.1, 0 ) );
	silla6.vertices.push( new THREE.Vector3( 4.75, 1.1, 0 ) );
	silla6.vertices.push( new THREE.Vector3( 4.75, 0.95, 0 ) );
	silla6.vertices.push( new THREE.Vector3( 4.9, 0.95, 0 ) );
	silla6.vertices.push( new THREE.Vector3( 4.9, 0.95, -0.5 ) );
	silla6.vertices.push( new THREE.Vector3( 4.9, 1.1, -0.5 ) );
	silla6.vertices.push( new THREE.Vector3( 4.75, 1.1, -0.5 ) );
	silla6.vertices.push( new THREE.Vector3( 4.75, 0.95, -0.5 ) );


	silla6.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla6.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla6.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla6.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla6.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla6.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla6.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla6.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla6.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla6.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla6.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla6.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // Material de color rojo
    var misilla6 = new THREE.Mesh (silla6, material); // Crea el objeto


    // SILLA7
	
        var silla7 = new THREE.Geometry();
	silla7.vertices.push( new THREE.Vector3( 3.85, 1.1, 0 ) );
	silla7.vertices.push( new THREE.Vector3( 3.7, 1.1, 0 ) );
	silla7.vertices.push( new THREE.Vector3( 3.7, 0.95, 0 ) );
	silla7.vertices.push( new THREE.Vector3( 3.85, 0.95, 0 ) );
	silla7.vertices.push( new THREE.Vector3( 3.85, 0.95, -0.5 ) );
	silla7.vertices.push( new THREE.Vector3( 3.85, 1.1, -0.5 ) );
	silla7.vertices.push( new THREE.Vector3( 3.7, 1.1, -0.5 ) );
	silla7.vertices.push( new THREE.Vector3( 3.7, 0.95, -0.5 ) );


	silla7.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla7.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla7.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla7.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla7.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla7.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla7.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla7.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla7.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla7.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla7.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla7.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // Material de color rojo
    var misilla7 = new THREE.Mesh (silla7, material); // Crea el objeto

     // SILLA8
	
        var silla8 = new THREE.Geometry();
	silla8.vertices.push( new THREE.Vector3( 4.9, 0.35, 0 ) );
	silla8.vertices.push( new THREE.Vector3( 4.75, 0.35, 0 ) );
	silla8.vertices.push( new THREE.Vector3( 4.75, 0.2, 0 ) );
	silla8.vertices.push( new THREE.Vector3( 4.9, 0.2, 0 ) );
	silla8.vertices.push( new THREE.Vector3( 4.9, 0.2, -0.5 ) );
	silla8.vertices.push( new THREE.Vector3( 4.9, 0.35, -0.5 ) );
	silla8.vertices.push( new THREE.Vector3( 4.75, 0.35, -0.5 ) );
	silla8.vertices.push( new THREE.Vector3( 4.75, 0.2, -0.5 ) );


	silla8.faces.push( new THREE.Face3( 0, 1, 2 ) );
	silla8.faces.push( new THREE.Face3( 0, 2, 3 ) );
	silla8.faces.push( new THREE.Face3( 0, 3, 4 ) );
	silla8.faces.push( new THREE.Face3( 0, 4, 5 ) );
	silla8.faces.push( new THREE.Face3( 1, 6, 7 ) );
	silla8.faces.push( new THREE.Face3( 1, 7, 2 ) );
	silla8.faces.push( new THREE.Face3( 6, 5, 4 ) );
	silla8.faces.push( new THREE.Face3( 6, 4, 7 ) );
	silla8.faces.push( new THREE.Face3( 5, 6, 1 ) );
	silla8.faces.push( new THREE.Face3( 5, 1, 0 ) );
	silla8.faces.push( new THREE.Face3( 3, 2, 7 ) );
	silla8.faces.push( new THREE.Face3( 3, 7, 4 ) );
	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // Material de color rojo
    var misilla8 = new THREE.Mesh (silla8, material); // Crea el objeto


        // ADORNO1
	
    
        var adorno1 = new THREE.Geometry();
	adorno1.vertices.push( new THREE.Vector3( 2.05, 1.2, 3.2 ) );
	adorno1.vertices.push( new THREE.Vector3( 2.95, 1.2, 3.2 ) );
	adorno1.vertices.push( new THREE.Vector3( 2.95, 1.2, 2.2 ) );
	adorno1.vertices.push( new THREE.Vector3( 2.05, 1.2, 2.2 ) );
	adorno1.vertices.push( new THREE.Vector3( 1.7, 1.2, 2.7 ) );
	adorno1.vertices.push( new THREE.Vector3( 3.3, 1.2, 2.7 ) );


	adorno1.faces.push( new THREE.Face3( 1, 0, 2 ) );
	adorno1.faces.push( new THREE.Face3( 2, 0, 3 ) );
	adorno1.faces.push( new THREE.Face3( 5, 1, 2 ) );
	adorno1.faces.push( new THREE.Face3( 0, 4, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0x34D331 } ); // Material de color rojo
    var miadorno1 = new THREE.Mesh (adorno1, material); // Crea el objeto


    // ADORNO2
	
    
        var adorno2 = new THREE.Geometry();
	adorno2.vertices.push( new THREE.Vector3( 2.4, 1.1, 2.85 ) );
	adorno2.vertices.push( new THREE.Vector3( 2.6, 1.1, 2.85 ) );
	adorno2.vertices.push( new THREE.Vector3( 2.6, 1.1, 2.55 ) );
	adorno2.vertices.push( new THREE.Vector3( 2.4, 1.1, 2.55 ) );
	adorno2.vertices.push( new THREE.Vector3( 2.3, 1.1, 2.7 ) );
	adorno2.vertices.push( new THREE.Vector3( 2.7, 1.1, 2.7 ) );


	adorno2.faces.push( new THREE.Face3( 1, 0, 2 ) );
	adorno2.faces.push( new THREE.Face3( 2, 0, 3 ) );
	adorno2.faces.push( new THREE.Face3( 5, 1, 2 ) );
	adorno2.faces.push( new THREE.Face3( 0, 4, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0x9E6A3C } ); // Material de color rojo
    var miadorno2 = new THREE.Mesh (adorno2, material); // Crea el objeto


    // VENTANA
	
    
        var ventana = new THREE.Geometry();
	ventana.vertices.push( new THREE.Vector3(-1.48, 1, 3.2 ) );
	ventana.vertices.push( new THREE.Vector3(-1.48, -2.2, 3.2 ) );
	ventana.vertices.push( new THREE.Vector3( -1.48, -2.2, 0.1 ) );
	ventana.vertices.push( new THREE.Vector3( -1.48, 1, 0.1 ) );


	ventana.faces.push( new THREE.Face3( 0, 1, 2 ) );
	ventana.faces.push( new THREE.Face3( 0, 2, 3 ) );

    var material = new THREE.MeshBasicMaterial( { color: 0x88E6EC } ); // Material de color rojo
    var miventana = new THREE.Mesh (ventana, material); // Crea el objeto


	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add( miobjeto );
	scene.add( miregalo1 );
	scene.add( miregalo2 );
	scene.add( miregalo3 );
	scene.add( miregalo4 );
	scene.add( miregalo5 );
	scene.add( miobjeto1 );
	scene.add( miobjeto2 );
	scene.add( miobjeto3 );
	scene.add( miobjeto4 );
	scene.add( miobjeto5 );
	scene.add( miobjeto6 );
	scene.add( miobjeto7 );
	scene.add( miobjeto8 );
	scene.add( michimenea1 );
	scene.add( michimenea2 );
	scene.add( michimenea3 );
	scene.add( michimenea4 );
	scene.add( michimenea5 );
	scene.add( michimenea6 );
	scene.add( misilla1 );
	scene.add( misilla2 );
	scene.add( misilla3 );
	scene.add( misilla4 );
	scene.add( misilla5 );
	scene.add( misilla6 );
	scene.add( misilla7 );
	scene.add( misilla8 );
	scene.add( miadorno1 );
	scene.add( miadorno2 );
	scene.add( miventana );
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
