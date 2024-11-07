'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';

import { HiMagnifyingGlass, HiOutlineBell } from 'react-icons/hi2';

import * as s from './@modal/Modal.css';

import { mergeClasses } from '@/utils/mergeClasses';

import AppBar from '@/components/common/AppBar';
import FrozenRouter from '@/components/common/FrozenRouter';
import Layout from '@/components/common/Layout';
import NavigationBar from '@/components/common/NavigationBar';

export default function MarketLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Layout>
      <header>
        <AppBar title="거래">
          <Link href="/market/search">
            <AppBar.Menu>
              <HiMagnifyingGlass />
            </AppBar.Menu>
          </Link>
          <AppBar.Menu onClick={() => alert('알림')}>
            <HiOutlineBell />
          </AppBar.Menu>
        </AppBar>
      </header>
      <main>
        <section style={{ height: '100%' }}>{children}</section>
        {/* 리팩토링 필요 */}
        <section>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={pathname === '/market' ? 'market' : 'modal'}
              initial={{ y: '5%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '5%', opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className={mergeClasses(pathname !== '/market' && s.modal)}
            >
              <FrozenRouter key={pathname}>{modal}</FrozenRouter>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <footer>
        <NavigationBar />
      </footer>
    </Layout>
  );
}
