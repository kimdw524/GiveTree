package com.dareuda.givetree.sale.domain;

import com.dareuda.givetree.common.errors.errorcode.CommonErrorCode;
import com.dareuda.givetree.common.errors.exception.RestApiException;
import com.dareuda.givetree.sale.infrastructure.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class SaleReader {

    private final SaleRepository saleRepository;

    public Sale read(long saleId) {
        return saleRepository.findByIdAndIsDeletedFalse(saleId)
                .orElseThrow(() -> new RestApiException(CommonErrorCode.RESOURCE_NOT_FOUND));
    }

    public boolean isCurrentUserReserved(long memberId, long saleId) {
        Sale sale = read(saleId);
        return sale.getPurchaserId() == memberId;
    }
}
