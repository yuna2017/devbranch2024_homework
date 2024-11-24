playerX = 200;
playerY = 100;

playerV = 0;

i = 0;

mapX = 500;
timer = setInterval(timer1, 10);
document.addEventListener("keydown", OnKeyDown);

function timer1() 
{
    if (playerY < 0 || playerY > 800) {
        clearInterval(timer);
        window.alert("游戏结束！");
    }
    i++;
    console.log("tick:" + i);
    playerV -= 0.1;
    playerY -= playerV;
    mapX--;
    document.getElementById("0").style.top = playerY + "px";
    document.getElementById("0").style.left = playerX + "px";
    document.getElementById("1").style.left = mapX + "px";
    if (i % 500 == 0) {
        MakeABlock();
    }

    // 碰撞检测
    checkCollision();
}

function OnKeyDown(event) 
{
    if (event.keyCode == 87) {
        playerV = 5;
    }
}

function MakeABlock() 
{
    var block = document.createElement("div");
    block.id = "block_" + i;
    block.className="block";
    block.style.cssText = "left:" + (i + 1000) + "px;top: 0px;background-color: green;width: 50px;height: 840px;position:absolute;";
    var space = document.createElement("div");
    space.style.cssText = "top:" + Math.random() * 600 + "px;background-color: gray;width: 90px;height: 240px;position: absolute";
    space.className="space";
    block.appendChild(space);
    document.getElementById("1").appendChild(block);
}

var crashed=false;
function checkCollision() 
{
    var player = document.getElementById("0");
    var playerRect = player.getBoundingClientRect();

    var blocks = document.querySelectorAll(".block");
    blocks.forEach(function (block) 
    {
        var blockRect = block.getBoundingClientRect();

        // 检查玩家是否与障碍物发生碰撞
        if ( playerRect.left < blockRect.right && playerRect.right > blockRect.left && playerRect.top < blockRect.bottom && playerRect.bottom > blockRect.top ) 
        {
            crashed=true;
            var spaces=document.querySelectorAll(".space");
            spaces.forEach(function(space)
            {
                var spaceRect=space.getBoundingClientRect();
                if( playerRect.left < spaceRect.right && playerRect.right > spaceRect.left && playerRect.top < spaceRect.bottom && playerRect.bottom > spaceRect.top )
                {
                    crashed=false;
                }
            })
        }
        if(crashed)
        {
            clearInterval(timer);
            window.alert("游戏结束！");
        }
    });
}
