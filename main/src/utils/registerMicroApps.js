import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'

const startQiankun = (microApps) => {
  registerMicroApps(
    microApps,
    {
      //qiankun 生命周期钩子 - 加载前
      beforeLoad: [
        app => {
          console.log('[qiankun] before load %c%s', 'color: green;', app.name)
          return Promise.resolve()
        }
      ],
      beforeMount: [
        app => {
          console.log('[qiankun] before mount %c%s', 'color: green;', app.name)
          return Promise.resolve()
        }
      ],
      //qiankun加载子应用完后，进度条加载完成
      afterUnmount: [
        app => {
          console.log('[qiankun] after unmount %c%s', 'color: green;', app.name)
          return Promise.resolve()
        }
      ]
    }
  )
  /**
   * 添加全局的未捕获异常处理器
   */
  addGlobalUncaughtErrorHandler((event) => {
    console.log('[qiankun] addGlobalUncaughtErrorHandler', event)
    const { msg } = event
    // 加载失败时提示
    if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
      console.log('[qiankun] 微应用加载失败，请检查应用是否可运行')
    }
  })

  /**
   * @description 启动微前端
   * @param prefetch 是否在第一次安装子应用程序后预取子应用程序的资产,默认为 true
   * @param jsSandbox 是否启用沙盒，当沙盒启用时，我们可以保证子应用程序是相互隔离的,默认为 true
   * @param singular 是否在一个运行时只显示一个子应用程序，这意味着子应用程序将等待挂载，直到卸载之前,默认为 true
   * @param fetch 设置一个fetch function,默认为 window.fetch
   */
  start({ prefetch: true, sandbox: { experimentalStyleIsolation: true } })
}

export default startQiankun
