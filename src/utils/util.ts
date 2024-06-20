export const getRedirectUrl=()=>{
    const currentUrl = new URL(window.location.href);
    // 使用URLSearchParams获取查询参数
    const searchParams = new URLSearchParams(currentUrl.search);
    // 从查询参数中获取'redirect'的值
    const redirectUrl = searchParams.get('redirect');
    return redirectUrl
  }