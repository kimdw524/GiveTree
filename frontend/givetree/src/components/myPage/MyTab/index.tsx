import Typography from '@/components/common/Typography';
import {
  HiChevronRight,
  HiOutlineNewspaper,
  HiOutlineShoppingBag,
  HiOutlineWallet,
  HiOutlinePencilSquare,
} from 'react-icons/hi2';
import { PiHandHeart, PiListHeart } from 'react-icons/pi';
import * as styles from './MyTab.css';
import Link from 'next/link';

interface MyTabProps {
  role: string;
}

const MyTab = ({ role }: MyTabProps) => {
  return (
    <>
      <Link
        className={styles.tab}
        href={role === 'user' ? '' : '/edit/foundation'}
      >
        <div className={styles.IconBox}>
          {role === 'user' ? (
            <PiHandHeart size={22} />
          ) : (
            <HiOutlinePencilSquare size={22} />
          )}
          <Typography as="h3">
            {role === 'user' ? '기부금 사용 내역' : '재단 소개글 등록/수정'}
          </Typography>
        </div>
        <HiChevronRight size={20} />
      </Link>

      <Link
        className={styles.tab}
        href={role === 'user' ? '' : `myfoundation/campaign/register`}
      >
        <div className={styles.IconBox}>
          {role === 'user' ? (
            <HiOutlineShoppingBag size={22} />
          ) : (
            <PiHandHeart size={22} />
          )}
          <Typography as="h3">
            {role === 'user' ? '장터 거래 내역' : '캠페인 신청'}
          </Typography>
        </div>
        <HiChevronRight size={20} />
      </Link>

      <Link
        className={styles.tab}
        href={role === 'user' ? '/account' : `myfoundation/campaign`}
      >
        <div className={styles.IconBox}>
          {role === 'user' ? (
            <HiOutlineWallet size={22} />
          ) : (
            <PiListHeart size={22} />
          )}
          <Typography as="h3">
            {role === 'user' ? '간편계좌 설정' : '캠페인 내역 확인'}
          </Typography>
        </div>
        <HiChevronRight size={20} />
      </Link>

      <Link className={styles.tab} href={role === 'user' ? '/tax' : `/account`}>
        <div className={styles.IconBox}>
          {role === 'user' ? (
            <HiOutlineNewspaper size={22} />
          ) : (
            <HiOutlineWallet size={22} />
          )}
          <Typography as="h3">
            {role === 'user' ? '세액공제 알아보기' : '출금계좌 설정'}
          </Typography>
        </div>
        <HiChevronRight size={20} />
      </Link>
    </>
  );
};

export default MyTab;
