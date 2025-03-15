/**
 * UnityService - 提供与Unity WebGL通信的方法
 */

// Unity实例访问
const getUnityInstance = (): any => {
  return (window as any).MyGameInstance;
};

/**
 * 向Unity发送消息
 * @param gameObject Unity中的游戏对象名称
 * @param method 方法名
 * @param parameter 参数（可选）
 */
export const sendMessageToUnity = (gameObject: string, method: string, parameter: any = '') => {
  const unityInstance = getUnityInstance();
  if (unityInstance && typeof unityInstance.SendMessage === 'function') {
    unityInstance.SendMessage(gameObject, method, parameter);
    console.log(`发送消息到Unity: ${gameObject}.${method}(${parameter})`);
    return true;
  } else {
    console.warn('Unity实例未初始化，无法发送消息');
    return false;
  }
};

/**
 * 添加Unity事件监听器
 * 用于接收Unity发出的事件
 * @param eventName 事件名称
 * @param callback 回调函数
 */
export const addUnityEventListener = (eventName: string, callback: (data: any) => void) => {
  window.addEventListener(eventName, (event: any) => {
    if (event.detail && event.detail.arr) {
      callback(event.detail.arr);
    } else {
      callback(event);
    }
  });
};

/**
 * 移除Unity事件监听器
 * @param eventName 事件名称
 * @param callback 回调函数
 */
export const removeUnityEventListener = (eventName: string, callback: (data: any) => void) => {
  window.removeEventListener(eventName, callback as EventListener);
};

/**
 * 检查Unity是否已加载完成
 * @returns 是否加载完成
 */
export const isUnityLoaded = (): boolean => {
  return getUnityInstance() !== null && getUnityInstance() !== undefined;
};

export default {
  sendMessageToUnity,
  addUnityEventListener,
  removeUnityEventListener,
  isUnityLoaded
}; 