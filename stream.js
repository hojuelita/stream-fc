const { exec } = require("child_process");

exec(raspivid -o  tcp/h264://192.168.0.7:8080);
