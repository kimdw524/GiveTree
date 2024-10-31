package com.dareuda.givetree.finance.domain;

import com.dareuda.givetree.finance.infrastructure.MemberFinanceInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberFinanceInfoReader {

    private final MemberFinanceInfoRepository memberFinanceInfoRepository;

    public MemberFinanceInfo read(long memberId) {
        return memberFinanceInfoRepository.findById(memberId);
    }

    public boolean isExists(long memberId) {
        return memberFinanceInfoRepository.existsById(memberId);
    }
}
