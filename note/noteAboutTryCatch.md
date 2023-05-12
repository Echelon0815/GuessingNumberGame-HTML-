Error 是一個物件，用 new Error 建構。

在 try 的途中發生 預設好的Error + throw， 程式就會提前終止

而 catch 可以顯示被設定好的 Error 物件


/*
async function doJob() {
    const rawResource = await fetch('//domain/resource-a')
      .catch(err => {
        throw new Error('Download raw resource failed', { cause: err });
      });
    const jobResult = doComputationalHeavyJob(rawResource);
    await fetch('//domain/upload', { method: 'POST', body: jobResult })
      .catch(err => {
        throw new Error('Upload job result failed', { cause: err });
      });
  }

async function test(){
  try {
    await doJob();
  } catch (e) {
    console.log(e);
    console.log('Caused by', e.cause);
  }
}

test();
*/