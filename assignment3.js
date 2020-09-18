const hello = function(num) {
  let x = 0;
  let y = ""
  if (num >= 128) {
x = num - 128;
y = y + "1";
  } else {
    y = y + "0";
    x = num
  }

  if (x >= 64) {
    x = x - 64;
    y = y + "1";
      } else {
        y = y + "0";
      }
      if (x >= 32) {
        x = x - 32;
        y = y + "1";
          } else {
            y = y + "0";
          }
          if (x >= 16) {
            x = x - 16;
            y = y + "1";
              } else {
                y = y + "0";
              }
              if (x >= 8) {
                x = x - 8;
                y = y + "1";
                  } else {
                    y = y + "0";
                  }
                  if (x >= 4) {
                    x = x - 4;
                    y = y + "1";
                      } else {
                        y = y + "0";
                      }
                      if (x >= 2) {
                        x = x - 2;
                        y = y + "1";
                          } else {
                            y = y + "0";
                          }
                          if (x >= 1) {
                            x = x - 1;
                            y = y + "1";
                              } else {
                                y = y + "0";
                              }
                              console.log(y);
  } 

  hello(162);