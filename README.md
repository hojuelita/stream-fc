<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>Stream FC</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"> 

</head>
<body>

<div class="grid-principal">
	<div class="encabezado">
		<h1>Stream</h1>
	</div>
	<div class="cuerpo">
		
		<video id="videoPlayer" width="650px" height="480px" controls autoplay>
            <source src="video/video.mp4" type="video/mp4" />
            Tu navegador no admite el elemento <code>video</code>
        </video>
	</div>
	<div class="lateral">
		<form id="formulario" method="get">
			<h2>Variables</h2>
			<label>Variable1 <input id="var1" type="text" name="var1"></label><br><br>
			<label>Variable2 <input id="var2" type="text" name="var2"></label><br><br>
			<label>Variable3 <input id="var3" type="text" name="var3"></label><br><br>
			<label> <input id="actualizar" type="submit" name="actualizar"></label><br>
		</form>
	</div>
</div>

</body>
</html>
