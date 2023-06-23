

WebGL的文档包括官方规范和开发者指南，以下是一些常用的WebGL文档资源：

1. WebGL官方规范：https://www.khronos.org/registry/webgl/specs/latest/1.0/

官方规范包含了WebGL API的详细说明和使用方法，包括WebGL上下文对象、着色器程序、缓冲区对象、纹理对象、帧缓冲对象、渲染缓冲对象等。

2. WebGL开发者指南：https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial

Mozilla开发者指南提供了WebGL的入门教程和示例代码，包括如何创建WebGL上下文、绘制三角形、使用着色器程序、纹理映射等。

3. WebGL Fundamentals：https://webglfundamentals.org/

WebGL Fundamentals是一个非官方的WebGL教程网站，提供了许多实用的示例和教程，包括WebGL基础知识、顶点和片元着色器、材质和光照、动画和交互等。

4. Three.js文档：https://threejs.org/docs/

Three.js是一个基于WebGL的3D图形库，提供了许多高级的3D图形功能和效果，其文档包含了Three.js API的详细说明和示例代码。

5. Babylon.js文档：https://doc.babylonjs.com/

Babylon.js是另一个基于WebGL的3D图形库，提供了许多高性能的3D图形功能和效果，其文档包含了Babylon.js API的详细说明和示例代码。

以上是一些常用的WebGL文档资源，开发者可以根据需要选择合适的文档来学习和使用WebGL。



WebGL是一个基于OpenGL ES 2.0的JavaScript API，用于在Web浏览器中呈现交互式3D和2D图形。以下是WebGL的所有API：

1. WebGLRenderingContext：WebGL上下文对象，提供了访问WebGL功能的方法和属性。

2. WebGLBuffer：WebGL缓冲区对象，用于存储顶点数据、纹理数据和其他WebGL数据。

3. WebGLFramebuffer：WebGL帧缓冲对象，用于在渲染过程中存储图像数据。

4. WebGLProgram：WebGL着色器程序对象，用于组合顶点着色器和片元着色器。

5. WebGLRenderbuffer：WebGL渲染缓冲对象，用于存储渲染过程中的深度、模板和颜色数据。

6. WebGLShader：WebGL着色器对象，用于编写顶点着色器和片元着色器。

7. WebGLTexture：WebGL纹理对象，用于存储和操作纹理数据。

8. WebGLUniformLocation：WebGL着色器程序中uniform变量的位置。

9. WebGLActiveInfo：包含有关着色器程序中活动变量的信息，如名称、数据类型和数组大小等。

10. WebGLVertexArrayObject：WebGL顶点数组对象，用于存储顶点属性和缓冲区对象的状态。

11. WebGLQuery：WebGL查询对象，用于查询GPU完成操作的状态。

12. WebGLSampler：WebGL采样器对象，用于定义纹理过滤器和纹理寻址模式。

以上是WebGL的所有API，开发者可以使用这些API创建交互式的3D和2D图形应用程序。

## api

WebGL是一种基于OpenGL ES 2.0的JavaScript API，用于在Web浏览器中呈现交互式3D和2D图形。下面是WebGL的所有API说明：

1. WebGLRenderingContext：WebGL渲染上下文对象，提供了WebGL的全部功能，包括绘制2D和3D图形、创建着色器、创建缓冲区等等。

2. WebGLBuffer：WebGL缓冲区对象，用于存储顶点数据和其他图形数据。

3. WebGLFramebuffer：WebGL帧缓冲区对象，用于存储渲染结果。

4. WebGLProgram：WebGL着色器程序对象，用于编译和链接着色器。

5. WebGLRenderbuffer：WebGL渲染缓冲区对象，用于存储深度、模板等渲染数据。

6. WebGLShader：WebGL着色器对象，用于编译和链接着色器程序。

7. WebGLTexture：WebGL纹理对象，用于存储图像和其他纹理数据。

8. WebGLUniformLocation：WebGL着色器变量对象，用于存储着色器程序中的变量。

9. WebGLActiveInfo：WebGL着色器程序中变量的信息对象，包括变量类型、名称、大小等信息。

10. WebGLVertexArrayObject：WebGL顶点数组对象，用于存储顶点数据和其他图形数据。

11. WebGLRenderingContext.getExtension()：获取WebGL扩展对象。

12. WebGLRenderingContext.activeTexture()：激活纹理单元。

13. WebGLRenderingContext.attachShader()：将着色器附加到着色器程序中。

14. WebGLRenderingContext.bindAttribLocation()：绑定顶点属性位置。

15. WebGLRenderingContext.bindBuffer()：绑定缓冲区对象。

16. WebGLRenderingContext.bindFramebuffer()：绑定帧缓冲区对象。

17. WebGLRenderingContext.bindRenderbuffer()：绑定渲染缓冲区对象。

18. WebGLRenderingContext.bindTexture()：绑定纹理对象。

19. WebGLRenderingContext.blendColor()：设置混合颜色。

20. WebGLRenderingContext.blendEquation()：设置混合方程式。

21. WebGLRenderingContext.blendEquationSeparate()：设置RGB和Alpha混合方程式。

22. WebGLRenderingContext.blendFunc()：设置混合因子。

23. WebGLRenderingContext.blendFuncSeparate()：设置RGB和Alpha混合因子。

24. WebGLRenderingContext.bufferData()：设置缓冲区数据。

25. WebGLRenderingContext.bufferSubData()：更新缓冲区数据。

26. WebGLRenderingContext.checkFramebufferStatus()：检查帧缓冲区状态。

27. WebGLRenderingContext.clear()：清空缓冲区。

28. WebGLRenderingContext.clearColor()：设置清空颜色。

29. WebGLRenderingContext.clearDepth()：设置清空深度值。

30. WebGLRenderingContext.clearStencil()：设置清空模板值。

31. WebGLRenderingContext.colorMask()：设置颜色掩码。

32. WebGLRenderingContext.compileShader()：编译着色器。

33. WebGLRenderingContext.copyTexImage2D()：复制纹理图像。

34. WebGLRenderingContext.copyTexSubImage2D()：复制纹理子图像。

35. WebGLRenderingContext.createBuffer()：创建缓冲区对象。

36. WebGLRenderingContext.createFramebuffer()：创建帧缓冲区对象。

37. WebGLRenderingContext.createProgram()：创建着色器程序对象。

38. WebGLRenderingContext.createRenderbuffer()：创建渲染缓冲区对象。

39. WebGLRenderingContext.createShader()：创建着色器对象。

40. WebGLRenderingContext.createTexture()：创建纹理对象。

41. WebGLRenderingContext.cullFace()：设置剔除面。

42. WebGLRenderingContext.deleteBuffer()：删除缓冲区对象。

43. WebGLRenderingContext.deleteFramebuffer()：删除帧缓冲区对象。

44. WebGLRenderingContext.deleteProgram()：删除着色器程序对象。

45. WebGLRenderingContext.deleteRenderbuffer()：删除渲染缓冲区对象。

46. WebGLRenderingContext.deleteShader()：删除着色器对象。

47. WebGLRenderingContext.deleteTexture()：删除纹理对象。

48. WebGLRenderingContext.depthFunc()：设置深度比较函数。

49. WebGLRenderingContext.depthMask()：设置深度掩码。

50. WebGLRenderingContext.depthRange()：设置深度范围。

51. WebGLRenderingContext.detachShader()：从着色器程序中分离着色器。

52. WebGLRenderingContext.disable()：禁用指定功能。

53. WebGLRenderingContext.disableVertexAttribArray()：禁用顶点属性数组。

54. WebGLRenderingContext.drawArrays()：绘制数组图形。

55. WebGLRenderingContext.drawElements()：绘制索引图形。

56. WebGLRenderingContext.enable()：启用指定功能。

57. WebGLRenderingContext.enableVertexAttribArray()：启用顶点属性数组。

58. WebGLRenderingContext.finish()：等待所有绘制命令完成。

59. WebGLRenderingContext.flush()：立即执行所有绘制命令。

60. WebGLRenderingContext.framebufferRenderbuffer()：将渲染缓冲区附加到帧缓冲区中。

61. WebGLRenderingContext.framebufferTexture2D()：将纹理对象附加到帧缓冲区中。

62. WebGLRenderingContext.frontFace()：设置正面和背面。

63. WebGLRenderingContext.generateMipmap()：生成纹理的Mipmap。

64. WebGLRenderingContext.getAttribLocation()：获取顶点属性位置。

65. WebGLRenderingContext.getError()：获取WebGL错误状态。

66. WebGLRenderingContext.getProgramParameter()：获取着色器程序参数。

67. WebGLRenderingContext.getProgramInfoLog()：获取着色器程序信息日志。

68. WebGLRenderingContext.getShaderParameter()：获取着色器参数。

69. WebGLRenderingContext.getShaderInfoLog()：获取着色器信息日志。

70. WebGLRenderingContext.getShaderPrecisionFormat()：获取着色器精度格式。

71. WebGLRenderingContext.getShaderSource()：获取着色器源代码。

72. WebGLRenderingContext.getUniformLocation()：获取着色器变量位置。

73. WebGLRenderingContext.getVertexAttrib()：获取顶点属性。

74. WebGLRenderingContext.getVertexAttribOffset()：获取顶点属性偏移量。

75. WebGLRenderingContext.hint()：设置提示。

76. WebGLRenderingContext.isBuffer()：检查是否为缓冲区对象。

77. WebGLRenderingContext.isEnabled()：检查是否启用指定功能。

78. WebGLRenderingContext.isFramebuffer()：检查是否为帧缓冲区对象。

79. WebGLRenderingContext.isProgram()：检查是否为着色器程序对象。

80. WebGLRenderingContext.isRenderbuffer()：检查是否为渲染缓冲区对象。

81. WebGLRenderingContext.isShader()：检查是否为着色器对象。

82. WebGLRenderingContext.isTexture()：检查是否为纹理对象。

83. WebGLRenderingContext.lineWidth()：设置线条宽度。

84. WebGLRenderingContext.linkProgram()：链接着色器程序。

85. WebGLRenderingContext.pixelStorei()：设置像素存储模式。

86. WebGLRenderingContext.polygonOffset()：设置多边形偏移量。

87. WebGLRenderingContext.readPixels()：读取像素数据。

88. WebGLRenderingContext.renderbufferStorage()：设置渲染缓冲区存储模式。

89. WebGLRenderingContext.sampleCoverage()：设置采样覆盖范围。

90. WebGLRenderingContext.scissor()：设置剪裁区域。

91. WebGLRenderingContext.shaderSource()：设置着色器源代码。

92. WebGLRenderingContext.stencilFunc()：设置模板测试函数。

93. WebGLRenderingContext.stencilFuncSeparate()：设置前后模板测试函数。

94. WebGLRenderingContext.stencilMask()：设置模板掩码。

95. WebGLRenderingContext.stencilMaskSeparate()：设置前后模板掩码。

96. WebGLRenderingContext.stencilOp()：设置模板操作。

97. WebGLRenderingContext.stencilOpSeparate()：设置前后模板操作。

98. WebGLRenderingContext.texImage2D()：设置纹理图像。

99. WebGLRenderingContext.texParameterf()：设置纹理参数。

100. WebGLRenderingContext.texParameteri()：设置纹理参数。

101. WebGLRenderingContext.uniform1f()：设置浮点数类型的着色器变量。

102. WebGLRenderingContext.uniform1fv()：设置浮点数类型的着色器变量数组。

103. WebGLRenderingContext.uniform1i()：设置整数类型的着色器变量。

104. WebGLRenderingContext.uniform1iv()：设置整数类型的着色器变量数组。

105. WebGLRenderingContext.uniform2f()：设置二维浮点数类型的着色器变量。

106. WebGLRenderingContext.uniform2fv()：设置二维浮点数类型的着色器变量数组。

107. WebGLRenderingContext.uniform2i()：设置二维整数类型的着色器变量。

108. WebGLRenderingContext.uniform2iv()：设置二维整数类型的着色器变量数组。

109. WebGLRenderingContext.uniform3f()：设置三维浮点数类型的着色器变量。

110. WebGLRenderingContext.uniform3fv()：设置三维浮点数类型的着色器变量数组。

111. WebGLRenderingContext.uniform3i()：设置三维整数类型的着色器变量。

112. WebGLRenderingContext.uniform3iv()：设置三维整数类型的着色器变量数组。

113. WebGLRenderingContext.uniform4f()：设置四维浮点数类型的着色器变量。

114. WebGLRenderingContext.uniform4fv()：设置四维浮点数类型的着色器变量数组。

115. WebGLRenderingContext.uniform4i()：设置四维整数类型的着色器变量。

116. WebGLRenderingContext.uniform4iv()：设置四维整数类型的着色器变量数组。

117. WebGLRenderingContext.uniformMatrix2fv()：设置二维浮点数类型的矩阵着色器变量数组。

118. WebGLRenderingContext.uniformMatrix3fv()：设置三维浮点数类型的矩阵着色器变量数组。

119. WebGLRenderingContext.uniformMatrix4fv()：设置四维浮点数类型的矩阵着色器变量数组。

120. WebGLRenderingContext.useProgram()：使用着色器程序。

121. WebGLRenderingContext.validateProgram()：验证着色器程序。

122. WebGLRenderingContext.vertex





## 示例

~~~html
以下是使用 WebGL 画一个彩色三角形的示例：

```html
<!DOCTYPE html>
<html>
<head>
	<title>WebGL 画一个三角形示例</title>
	<script src="https://cdn.bootcdn.net/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"></script>
	<style>
		canvas {
			border: 1px solid black;
		}
	</style>
</head>
<body>
	<canvas id="myCanvas" width="400" height="400"></canvas>

	<script>
		// 获取 canvas 元素
		var canvas = document.getElementById("myCanvas");

		// 获取 WebGL 上下文
		var gl = canvas.getContext("webgl");

		// 顶点着色器代码
		var vertexShaderSource = `
			attribute vec3 aPosition;
			attribute vec3 aColor;
			varying vec3 vColor;
			void main() {
				gl_Position = vec4(aPosition, 1.0);
				vColor = aColor;
			}
		`;

		// 片元着色器代码
		var fragmentShaderSource = `
			precision mediump float;
			varying vec3 vColor;
			void main() {
				gl_FragColor = vec4(vColor, 1.0);
			}
		`;

		// 创建顶点着色器
		var vertexShader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertexShader, vertexShaderSource);
		gl.compileShader(vertexShader);

		// 创建片元着色器
		var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fragmentShader, fragmentShaderSource);
		gl.compileShader(fragmentShader);

		// 创建着色器程序
		var program = gl.createProgram();
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		gl.useProgram(program);

		// 定义三角形的顶点坐标和颜色
		var vertices = [
			-0.5, 0.5, 0.0,  // 左上角
			-0.5, -0.5, 0.0, // 左下角
			0.5, -0.5, 0.0,  // 右下角
		];
		var colors = [
			1.0, 0.0, 0.0, // 红色
			0.0, 1.0, 0.0, // 绿色
			0.0, 0.0, 1.0, // 蓝色
		];

		// 创建缓冲区对象
		var vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

		// 向缓冲区对象中写入数据
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices.concat(colors)), gl.STATIC_DRAW);

		// 获取顶点着色器中的变量地址
		var aPosition = gl.getAttribLocation(program, "aPosition");
		var aColor = gl.getAttribLocation(program, "aColor");

		// 指定如何解析缓冲区中的数据
		gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
		gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, vertices.length * 4);

		// 启用顶点着色器中的变量
		gl.enableVertexAttribArray(aPosition);
		gl.enableVertexAttribArray(aColor);

		// 清空 canvas 并设置背景色
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		// 绘制三角形
		gl.drawArrays(gl.TRIANGLES, 0, 3);
	</script>
</body>
</html>
```

运行以上代码，即可在浏览器中看到一个彩色的三角形。
~~~

## 文档

https://webglfundamentals.org/webgl/lessons/zh_cn/

```josn
WebGL（Web Graphics Library）是一种基于OpenGL ES 2.0的图形库，用于在Web浏览器中呈现3D图形。它允许开发人员使用JavaScript编写3D应用程序，而不需要使用插件或其他第三方软件。

以下是一些WebGL文档和资源：

1. WebGL官方网站：https://www.khronos.org/webgl/

2. WebGL API文档：https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API

3. WebGL教程：https://webglfundamentals.org/

4. Three.js：一个流行的WebGL框架，用于创建3D场景和动画。它有很多文档和示例：https://threejs.org/

5. Babylon.js：另一个流行的WebGL框架，用于创建3D游戏和应用程序。它有很多文档和示例：https://www.babylonjs.com/

6. WebGL开发者社区：https://www.reddit.com/r/WebGL/

7. WebGL样例集：https://webgl2fundamentals.org/webgl/lessons/zh_cn/

8. WebGL游戏开发：https://webglstats.com/games

9. WebGL性能优化：https://webglstats.com/performance

10. WebGL安全性：https://webglstats.com/security
```

glsl

```json
GLSL（OpenGL Shading Language）是一种专门用于编写着色器程序的编程语言，它是OpenGL的一部分。着色器程序是用于在OpenGL中进行渲染的程序，它们控制着图形的颜色、光照、纹理等方面。

以下是一些GLSL文档和资源：

1. GLSL官方文档：https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language

2. GLSL教程：https://learnopengl.com/Getting-started/Shaders

3. ShaderToy：一个在线的着色器编辑器和社区，可以用于创建和分享着色器程序：https://www.shadertoy.com/

4. GLSL Sandbox：另一个在线的着色器编辑器和社区：http://glslsandbox.com/

5. The Book of Shaders：一个交互式的在线教程，用于学习GLSL和着色器编程：https://thebookofshaders.com/

6. Shaderific：一个用于iOS设备的着色器编辑器和学习工具：https://www.shaderific.com/

7. GLSL开发者社区：https://www.reddit.com/r/glsl/

8. GLSL样例集：https://www.shadertoy.com/browse

9. GLSL优化：https://www.slideshare.net/CassEveritt/glsl-optimization-tips-tricks

10. GLSL库：https://github.com/patriciogonzalezvivo/glslCollection
```

