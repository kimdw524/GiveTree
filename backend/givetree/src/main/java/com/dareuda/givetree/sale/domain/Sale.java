package com.dareuda.givetree.sale.domain;

import com.dareuda.givetree.common.domain.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Sale extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long sellerId;

    private Long purchaserId;

    @NotNull
    private Long fundedFoundationId;

    private Long transactionId;

    private long price;

    private int donationRate;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @OneToMany(mappedBy = "sale", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<SaleImage> images = new ArrayList<>();

    @NotNull
    @Enumerated(EnumType.STRING)
    private SaleStatus status;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ProductionCondition productionCondition;

    private boolean isDirectSale;

    private boolean isDeliverySale;

    private long hits;

    @NotNull
    private LocalDateTime updatedDateTime;

    @Builder
    private Sale(int donationRate, Long sellerId, Long fundedFoundationId, Long purchaserId, Long transactionId, long price, String title, String description, SaleStatus status, ProductionCondition productionCondition, boolean isDirectSale, boolean isDeliverySale, LocalDateTime updatedDateTime) {
        this.donationRate = donationRate;
        this.sellerId = sellerId;
        this.fundedFoundationId = fundedFoundationId;
        this.purchaserId = purchaserId;
        this.transactionId = transactionId;
        this.price = price;
        this.title = title;
        this.description = description;
        this.status = status;
        this.productionCondition = productionCondition;
        this.isDirectSale = isDirectSale;
        this.isDeliverySale = isDeliverySale;
        this.updatedDateTime = updatedDateTime;
    }

    public void updateHits() {
        this.hits++;
    }

    public void updateFoundationId(Long fundedFoundationId) {
        if (fundedFoundationId == null) {
            return;
        }
        if (fundedFoundationId < 1) {
            return;
        }
        this.fundedFoundationId = fundedFoundationId;
    }

    public void updatePrice(Long price) {
        if (price == null) {
            return;
        }
        if (price < 0) {
            return;
        }
        this.price = price;
    }

    public void updateDonationRate(Integer donationRate) {
        if (donationRate == null) {
            return;
        }
        if (donationRate < 0 || donationRate > 100) {
            return;
        }

        this.donationRate = donationRate;
    }

    public void updateTitle(String title) {
        if (title != null) {
            this.title = title;
        }
    }

    public void updateDescription(String description) {
        if (description != null) {
            this.description = description;
        }
    }

    public void updateImages(List<SaleImage> images) {
        if (images == null) {
            return;
        }
        this.images.clear();
        this.images.addAll(images);
    }

    public void updateStatus(SaleStatus status) {
        if (status != null) {
            this.status = status;
        }
    }

    public void updateProductionCondition(ProductionCondition productionCondition) {
        if (productionCondition != null) {
            this.productionCondition = productionCondition;
        }
    }

    public void updateIsDirectSale(Boolean isDirectSale) {
        if (isDirectSale != null) {
            this.isDirectSale = isDirectSale;
        }
    }

    public void updateIsDeliverySale(Boolean isDeliverySale) {
        if (isDeliverySale != null) {
            this.isDeliverySale = isDeliverySale;
        }
    }

    public void updateUpdatedDateTime(LocalDateTime updatedDateTime) {
        this.updatedDateTime = updatedDateTime;
    }

    public void remove() {
        delete();
    }
}
