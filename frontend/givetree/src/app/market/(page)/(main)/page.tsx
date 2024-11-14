import type { SaleSearchParameter } from '@/types/market/market';

import colorPalette from '@/styles/tokens/colorPalette';

import Box from '@/components/common/Box';
import Flex from '@/components/common/Flex';
import SearchCondition from '@/components/market/SearchCondition';
import WriteButon from '@/components/market/WriteButton';
import SearchItemList from '@/components/market/SearchItemList';

export default async function MarketPage({
  searchParams,
}: {
  searchParams: Promise<SaleSearchParameter>;
}) {
  const params = await searchParams;

  return (
    <Flex flexDirection="column" style={{ height: '100%' }}>
      <Box
        padding="1rem"
        backgroundColor="#fff"
        style={{
          flex: '0 0 auto',
          borderBottom: `0.0625rem solid ${colorPalette.grey[200]}`,
        }}
      >
        <SearchCondition />
      </Box>
      <Box style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <SearchItemList {...params} />
        <WriteButon href="/market/write" />
      </Box>
    </Flex>
  );
}
