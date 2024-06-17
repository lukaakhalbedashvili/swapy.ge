export interface CreatePaymentLinkResponseI {
  data: {
    _links: {
      redirect: {
        href: string;
      };
    };
  };
}

export enum PaymentMethods {
  card = "card",
  google_pay = "google_pay",
  apple_pay = "apple_pay",
  bog_p2p = "bog_p2p",
  bog_loyalty = "bog_loyalty",
  bnpl = "bnpl",
  bog_loan = "bog_loan",
  gift_card = "gift_card",
}

export interface getPaymentLinkActionPayloadI {
  requiredLariAmount: string | number;
  paymentMethod: PaymentMethods;
}
