package com.dareuda.givetree.account.domain;

import com.dareuda.givetree.account.controller.AccountErrorCode;
import com.dareuda.givetree.common.errors.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class AccountValidator {

    private final AccountReader accountReader;

    public void validateRegisterable(long memberId) {
        if (accountReader.existsActiveAccount(memberId)) {
            throw new RestApiException(AccountErrorCode.ACTIVE_ACCOUNT_ALREADY_EXISTS);
        }
    }

    public void validateExpired(LocalDate expiryAt) {
        if (LocalDate.now().isAfter(expiryAt)) {
            throw new RestApiException(AccountErrorCode.ACCOUNT_EXPIRED);
        }
    }
}
