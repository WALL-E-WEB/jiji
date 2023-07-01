

```javascript
let _canvas = wx.createOffscreenCanvas({ type: '2d', width: _w, height: _h });

                let ctx = _canvas.getContext('2d');

                // 创建一个图片
                let image = _canvas.createImage();
                // 等待图片加载
                try {
                    await new Promise(loadResolve => {
                        image.onload = loadResolve;
                        image.src = tempFilePaths; // 要加载的图片 url
                    });
                } catch (error) {
                    console.log('image.onload', error);
                    resolve(tempFilePaths);
                }

                ctx.clearRect(0, 0, _w, _h);
                ctx.drawImage(image, 0, 0, _w, _h);
                /// 水印
                let fontSize = _w * 0.02;
                ctx.font = `normal bold ${fontSize}px sans-serif`;
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                let _time = L3DateHandler.getDateStringToSec();
                ctx.fillText(_time, fontSize, _h-fontSize*2-fontSize/2);
                if(_props.address){
                    ctx.fillText(_props.address, fontSize, _h-fontSize);
                }
                console.log('ctx', ctx, _canvas);
                // 获取base64图像
                const b64Data = ctx.canvas.toDataURL();
                const time = new Date().getTime();
                const filePath = `${uni.env.USER_DATA_PATH}/temp_image_${time}.png`;
                // base64格式的图片要去除逗号前面的部分才能正确解码
                const buffer = uni.base64ToArrayBuffer(b64Data.substring(b64Data.indexOf(',') + 1));
                // 写入临时文件
                uni.getFileSystemManager().writeFile({
                    filePath,
                    data: buffer,
                    encoding: 'utf8',
                    success: res => {
                        console.log('保存图片：', res, filePath);
                        resolve(filePath);
                    },
                    fail:(err:any)=>{
                        resolve(tempFilePaths);
                    }
                });

```

