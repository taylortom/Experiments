(function() {

    var canvas = null;
    var gl = null;
    var squareVerticesBuffer;
    var mvMatrix;
    var shaderProgram;
    var vertexPositionAttribute;
    var perspectiveMatrix;
    var horizAspect = 480.0/640.0;

    $(document).ready(function() 
    {   
        canvas = document.getElementById("main");

        initGL(canvas);

        if (gl) 
        {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);                  // Set clear color to black, fully opaque
            gl.enable(gl.DEPTH_TEST);                           // Enable depth testing
            gl.depthFunc(gl.LEQUAL);                            // Near things obscure far things
            gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);  // Clear the color as well as the depth buffer.

            // Initialize the shaders (lighting for the vertices etc.)
            initShaders();
            
            // build the objects we'll be drawing
            initBuffers();
            
            // draw the scene!
            setInterval(drawScene, 15);
        }
        else console.warn("Unable to initialize WebGL. Your browser may not support it.");
    });
    
    function initGL(canvas) 
    {
        console.log("initGL: " + canvas);

        try 
        {
            // Try to grab the standard context. If it fails, fallback to experimental.
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        }
        catch(e) { } // do nothing(!!!)
    }

    function initShaders() 
    {
        var fragmentShader = getShader(gl, "shader-fs");
        var vertexShader = getShader(gl, "shader-vs");

        // Create the shader program

        shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        // If creating the shader program failed, alert

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) 
        {
            console.warn("initShaders: unable to initialize the shader program.");
        }

        gl.useProgram(shaderProgram);

        vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(vertexPositionAttribute);
    }

    function getShader(gl, id) 
    {
        var shaderScript, theSource, currentChild, shader;

        shaderScript = document.getElementById(id);

        if (!shaderScript) 
        {
            console.warn("getShader: no shader found with the id '" + id + "'");
            return null;
        }

        theSource = "";
        currentChild = shaderScript.firstChild;

        while(currentChild) 
        {
            if (currentChild.nodeType == currentChild.TEXT_NODE) 
                theSource += currentChild.textContent;

            currentChild = currentChild.nextSibling;
        }

        switch(shaderScript.type)
        {
            case "x-shader/x-fragment":
                shader = gl.createShader(gl.FRAGMENT_SHADER);
                break;
            case "x-shader/x-vertex":
                shader = gl.createShader(gl.VERTEX_SHADER);
                break;
            default:
                console.warn("getShader: error, Unknown shader type '" + shaderScript.type + "'")// Unknown shader type
                return null;
        }

        gl.shaderSource(shader, theSource);
    
        // Compile the shader program
        gl.compileShader(shader);  

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) 
        {  
            console.warn("getShader: an error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));  
            return null;  
        }

        return shader;
    }

    function initBuffers() 
    {
        squareVerticesBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

        var vertices = 
        [
            1.0,  1.0,  0.0,
            -1.0, 1.0,  0.0,
            1.0,  -1.0, 0.0,
            -1.0, -1.0, 0.0
        ];

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    }

    function drawScene() 
    {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        perspectiveMatrix = makePerspective(45, 640.0/480.0, 0.1, 100.0);

        loadIdentity();
        mvTranslate([-0.0, 0.0, -6.0]);

        gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
        gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    /**
     * Some matrix utility functions
     */

    function loadIdentity() 
    {
        mvMatrix = Matrix.I(4);
    }

    function multMatrix(m) 
    {
        mvMatrix = mvMatrix.x(m);
    }

    function mvTranslate(v) 
    {
        multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
    }

    function setMatrixUniforms() 
    {
        var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
        gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix.flatten()));

        var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
        gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
    }

    // on resize
    // gl.viewport(0, 0, canvas.width, canvas.height);
    
})();
