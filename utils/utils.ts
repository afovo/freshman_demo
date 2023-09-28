export function getCurrentTime(): string {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // 获取年份的最后两位
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 获取月份，并确保两位数字
    const day = String(now.getDate()).padStart(2, '0'); // 获取日期，并确保两位数字
    const hours = String(now.getHours()).padStart(2, '0'); // 获取小时，并确保两位数字
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 获取分钟，并确保两位数字
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 获取秒钟，并确保两位数字
  
    return `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
  }