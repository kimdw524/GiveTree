package com.dareuda.givetree.token.domain;

import com.dareuda.givetree.finance.domain.MemberFinanceValidator;
import com.dareuda.givetree.history.domain.TransactionType;
import com.dareuda.givetree.member.domain.MemberValidator;
import com.dareuda.givetree.wallet.domain.WalletVO;
import com.dareuda.givetree.wallet.domain.member.MemberWallet;
import com.dareuda.givetree.wallet.domain.member.MemberWalletReader;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.web3j.protocol.core.methods.response.TransactionReceipt;

@Component
@RequiredArgsConstructor
public class SaleTokenTransferrer {

    private final MemberWalletReader memberWalletReader;
    private final MemberFinanceValidator memberFinanceValidator;
    private final TokenTransferrer tokenTransferrer;
    private final MemberValidator memberValidator;

    public void transfer(long senderId, long receiverId, long amount, String simplePassword) {
        memberValidator.validateUser(senderId);
        memberValidator.validateUser(receiverId);

        MemberWallet senderWallet = memberWalletReader.readByMemberId(senderId);
        MemberWallet receiverWallet = memberWalletReader.readByMemberId(receiverId);

        memberFinanceValidator.validateSimplePassword(senderId, simplePassword);

        TransactionReceipt receipt = tokenTransferrer.transfer(WalletVO.from(senderWallet), WalletVO.from(receiverWallet), amount);
        tokenTransferrer.saveTransaction(
                senderWallet.getId(),
                receiverWallet.getId(),
                amount,
                TransactionType.SALE,
                receipt
        );
    }
}
