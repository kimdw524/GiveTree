package com.dareuda.givetree.donation.controller.dto.request;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class FoundationDonateRequest {
    private final Long amount;
    private final String simplePassword;
}
