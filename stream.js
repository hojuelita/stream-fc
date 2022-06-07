const { exec } = require("child_process");

exec(
  cd $HOME
  raspivid -o  tcp/h264://192.168.0.7:5000
  exit
);
