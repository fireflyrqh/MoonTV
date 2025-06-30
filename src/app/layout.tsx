import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import AuthProvider from '../components/AuthProvider';
import { ThemeProvider } from '../components/ThemeProvider';
import ObfuscatedEmail from '../components/ObfuscatedEmail'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EhhxTV',
  description: '影视聚合',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh-CN' suppressHydrationWarning>
      {/* 
        修改 1: 在 body 上添加 flex 和 flex-col，使其成为一个纵向的flex容器。
        这对于将页脚推到底部至关重要。
      */}
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900 dark:bg-black dark:text-gray-200`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/*
            修改 2: 用一个 <main> 标签包裹主要内容，并让它 flex-grow。
            这会让主内容区域自动伸展，占据所有可用空间，从而将页脚推到底部。
          */}
          <main className='flex-grow'>
            <AuthProvider>{children}</AuthProvider>
          </main>

          {/*
            修改 3: 在主内容之后，添加 footer 元素。
            这里使用了 Tailwind CSS 进行样式设置。
          */}
          <footer className='py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800'>
            {/* 版权信息 */}
            <p className='px-4'>
              Copyright © 2024–{new Date().getFullYear()} EhhxTV. All Rights Reserved.
            </p>
            {/* 作者和联系方式 */}
            <div className='mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1'>
              <span>基于MoonTV构建</span>
              <span>|</span>
              <ObfuscatedEmail />
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
