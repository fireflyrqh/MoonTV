// components/ObfuscatedEmail.tsx
'use client'; // 标记为客户端组件，因为它使用了 useState 和 useEffect

import { useEffect, useState } from 'react';

const ObfuscatedEmail = () => {
  const [email, setEmail] = useState<string>('加载中...'); // 初始显示文本

  useEffect(() => {
    // 将您的邮箱地址拆分开，防止被直接搜索到
    const user = 'yf'; // 替换为您的邮箱前缀
    const domain = 'linux.do'; // 替换为您的邮箱域名

    // 延迟一小段时间再设置，模拟真实加载，进一步迷惑爬虫
    const timer = setTimeout(() => {
      setEmail(`${user}@${domain}`);
    }, 500); // 500毫秒延迟

    return () => clearTimeout(timer); // 组件卸载时清除计时器
  }, []);

  if (email.includes('@')) {
    return (
      <a
        href={`mailto:${email}`}
        className='text-blue-500 hover:underline dark:text-blue-400'
      >
        联系作者
      </a>
    );
  }

  // 在邮件地址生成前，可以显示一个占位符或不显示
  return <span className='text-gray-500'>{email}</span>;
};

export default ObfuscatedEmail;
