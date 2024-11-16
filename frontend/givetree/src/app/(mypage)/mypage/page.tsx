import * as styles from './mypage.css';
import ProfileNull from '@/assets/images/profile.png';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import colorPalette from '@/styles/tokens/colorPalette';
import Box from '@/components/common/Box';
import Profile from '@/components/myPage/Profile';
import MyTab from '@/components/myPage/MyTab';
import Link from 'next/link';
import getSessionMember from '@/api/member/getSessionMember';
import getSessionFoundation from '@/api/member/getSessionFoundation';
import Logout from '@/components/myPage/Logout';

export default async function MyPage() {
  const { role, name, profileImageUrl } = await getSessionMember();
  const profileImage = profileImageUrl ? profileImageUrl : ProfileNull;
  const totalDonation = 35000;

  const { totalFundraisingAmount, executedAmount } =
    await getSessionFoundation();

  const currentMoney = totalFundraisingAmount - executedAmount;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.mainContainer}>
        {role === 'USER' && (
          <Link className={styles.modifyButton} href={`/edit/user`}>
            <HiOutlinePencilSquare size={22} />
          </Link>
        )}
        <Box className={styles.profileConatainer}>
          <Profile
            role={role}
            name={name}
            image={profileImage}
            totalDonation={totalDonation}
            currentMoney={currentMoney}
          />
        </Box>

        <div
          style={{
            width: '100%',
            height: '10px',
            backgroundColor: colorPalette.primary[50],
          }}
        ></div>

        <Box className={styles.tabBox}>
          <MyTab role={role} />
        </Box>

        <div
          style={{
            width: '100%',
            height: '10px',
            margin: '0',
            backgroundColor: colorPalette.primary[50],
          }}
        ></div>

        <Box className={styles.subContainer}>
          <Logout />
        </Box>
      </div>
    </div>
  );
}
